// Description:
//  Wow ilvl commands for our friends
//
// Commands:
//  hubot ilvl me - take out the measuring stick
//
// Author:
//  Matt Perry

import Axios from 'axios';
import { Response, Robot } from 'hubot';

interface WOWData {
    items: {
        averageItemLevel: number;
        averageItemLevelEquipped: number;
    };
}

interface RaiderIO {
    name: "string",
    mythic_plus_scores: {
        all: number,
        dps: number,
        healer: number,
        tank: number
    }
}

interface PlayerId {
    name: string;
    realm: string;
}

const key               = process.env.HUBOT_WOW_API_KEY;
const armoryUrl         = 'https://us.api.battle.net/wow';
const raiderIOUrl       = `https://raider.io/api/v1`;
const locale            = 'en_us';
const users: PlayerId[] = [
    { name: 'Titanburn', realm: 'Thrall' },
    { name: 'Titansmite', realm: 'Thrall' },
    { name: 'Xzem', realm: 'Thrall' },
    { name: 'Xiala', realm: 'Thrall' },
    { name: 'Iambushman', realm: 'Thrall' },
    { name: 'Trudgling', realm: 'Thrall' },
    { name: 'Avgwhiteguy', realm: 'Illidan' },
    { name: 'Starfail', realm: 'Illidan' },
];

async function getIlvl(id: PlayerId) {
    const resp = await Axios.get<WOWData>(`${armoryUrl}/character/${id.realm}/${id.name}`, {
        params: {
           apikey: key,
           fields: 'items',
           locale,
        },
    });

    return {
        ...id,
        ilvl: resp.data.items.averageItemLevel,
        ilvlEquip: resp.data.items.averageItemLevelEquipped
    };
}

async function getRaiderIO(id: PlayerId) {
    const resp = await Axios.get<RaiderIO>(`${raiderIOUrl}/characters/profile`, {
        params: {
            region: 'us',
            realm: id.realm,
            name: id.name,
            fields: 'mythic_plus_scores'
        }
    });

    return resp.data;
}

async function makeRanking<T>(
    getter: (id: PlayerId) => Promise<T>,
    sortProp: (item: T) => number,
    display: (item: T) => string
) {
    return (await Promise.all(users.map(getter)))
        .sort((a, b) => sortProp(b) - sortProp(a))
        .map(display)
        .join('\n');
}

async function ilevelList(res: Response) {
    res.send(await makeRanking(
        getIlvl,
        i => i.ilvlEquip,
        c => `${c.name}: ${c.ilvlEquip} (${c.ilvl})`
    ));
}

async function raiderioScore(res: Response) {
    res.send(await makeRanking(
        getRaiderIO,
        i => i.mythic_plus_scores.all,
        c => `${c.name}: ${c.mythic_plus_scores.all}`
    ));
}

async function affixes(res: Response) {
    const resp = await Axios.get<{ title: string }>(`${raiderIOUrl}/mythic-plus/affixes`, {
        params: { region: 'us' }
    });

    res.send(resp.data.title);
}

export = (robot: Robot) => {
    robot.respond(/(ilvl)( me)?/i, async res => {
        try {
            await ilevelList(res);
        } catch (e) {
            console.error(e);
        }
    });

    robot.respond(/(raider)?(io)( me)?/i, async res => {
        try {
            await raiderioScore(res);
        } catch (e) {
            console.error(e);
        }
    });

    robot.respond(/(affixes)( me)?/i, async res => {
        try {
            await affixes(res);
        } catch (e) {
            console.error(e);
        }
    });
}
