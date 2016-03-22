// Description:
//  They need to know, so make sure they know
//
// Commands:
//  told - show the checklist to let them know
//
// Author:
//  Matt Perry

/// <reference path="..\..\typings\main.d.ts" />

import { Robot } from "hubot";

let unchecked = "☐";
let checked = "☑";
let tolds = [
    "24 carat told",
    "2001: A Space Toldyssey",
    "3D Dot Told Heroes",
    "Assassin's Creed: Tolderhood",
    "Avatold: The Last Airbender",
    "Battletolds",
    "Battoldfield: Bad Company 2",
    "Biotold 2",
    "Castlevania: RonTold of Blood",
    "Countold Strike",
    "Command & Conquer: Toldberian Sun",
    "Conker's Bad Fur Day: Live and Retolded",
    "Cyndaquil, Chicorita, and Toldodile",
    "demon's told",
    "Dragon Told Z: Toldkaichi Budokai",
    "Fear and Tolding in Las Vegas",
    "Gran Toldrismo 5",
    "Guilty Gear XX Accent Told",
    "GuiTold Hero: World Told",
    "Half Life 2: Episode Told",
    "Ice-told",
    "http://cash4told.com",
    "J.R.R Toldkien's Lord of the Told",
    "Knights of the Told Republic",
    "Lead and Told: Gangs of the Wild West",
    "Left 4 Told",
    "Legend of Zelda: Toldacarnia of Time",
    "Leo Toldstoy",
    "Littold Big Planet",
    "Mario Golf: Toldstool Tour",
    "Metal Gear Toldid 3: Snake Eater",
    "Nintentold",
    "My Neighbor Toldtoro",
    "My Little Sister can't be this Told",
    "No country for told men",
    "Olympic Told Medal",
    "Pokemon Told and Silver",
    "Portold 2",
    "Rampage: Toldal Destruction",
    "Roller Coaster Toldcoon",
    "Rome: Toldal War",
    "S.T.A.L.K.E.R.: Shatold of Chernobyl",
    "Super Mario SunTold",
    "Super Told Boy",
    "Stone-told Steve Austin",
    "Texas Told 'em",
    "The Elder Tolds IV: Oblivious",
    "The Legend of Eldorado : The Lost City of Told",
    "The Good, The Bad, and The Told",
    "The Told Italic",
    "Tic-Tac-Told",
    "Told Calibur 4",
    "Told Fortress Classic",
    "Told Fortress 2",
    "Told King of Boletaria",
    "Told of Duty 4: Modern Toldfare",
    "Told of the Rings",
    "Told Spice",
    "Told Story 3",
    "Told you that ps3 has no games",
    "TOLDASAURUS REX",
    "Toldasauraus Rex 2: Electric Toldaloo",
    "Toldbound",
    "Tolden Sun: Dark Dawn",
    "Tolden Boy",
    "Toldeneye 007",
    "Toldback Mountain",
    "Toldman: Arkham Told",
    "Toldstone creamery",
    "Toldman Sachs",
    "Toldcraft II: Tolds of Toldberty",
    "Unreal Toldament",
    "was foretold",
    "World of Warcraft: Catoldclysm",
    "www.youtold.com",
    "TOLDASAURUS REX",
    "Cash4Told.com",
    "No Country for Told Men",
    "Knights of the Told Republic",
    "ToldSpice",
    "The Elder Tolds IV: Oblivious",
    "Command & Conquer: Toldberian Sun",
    "GuiTold Hero: World Told",
    "Told King of Boletaria",
    "Countold Strike",
    "Unreal Toldament",
    "Stone-told Steve Austin",
    "Half Life 2: Episode Told",
    "Roller Coaster Toldcoon",
    "Assassin’s Creed: Tolderhood",
    "Battletolds",
    "S.T.A.L.K.E.R.: Shatold of Chernobyl",
    "Toldasauraus Rex 2: Electric Toldaloo",
    "Told of Duty 4: Modern Toldfare",
    "Pokemon Told and Silver",
    "The Legend of Eldorado : The Lost City of Told",
    "Rampage: Toldal Destruction",
    "Told Fortress Classic",
    "Toldman: Arkham Told",
    "The Good, The Bad, and The Told",
    "Super Mario SunTold",
    "Legend of Zelda: Toldacarnia of Time",
    "Toldstone Creamery",
    "Mario Golf: Toldstool Tour",
    "Super Told Boy",
    "Sir Barristan the Told",
    "Left 4 Told",
    "Battoldfield: Bad Company 2",
    "Toldman Sachs",
    "Conker’s Bad Fur Day: Live and Retolded",
    "Lead and Told: Gangs of the Wild West",
    "Portold 2",
    "Avatold: The Last Airbender",
    "Dragon Ball Z Toldkaichi Budokai",
    "Toldcraft II: Tolds of Toldberty",
    "Leo Toldstoy",
    "Metal Gear Toldid 3: Snake Eater",
    "3D Dot Told Heroes",
    "J.R.R Toldkien’s Lord of the Told",
    "Told you that PS3 has no games",
    "LitTOLD Big Planet",
    "Rome: Toldal War",
    "Gran Toldrismo 5",
    "Told Calibur 4",
    "Told Fortress 2",
    "Castlevania: RonTold of Blood",
    "Guilty Gear XX Accent Told",
    "Cyndaquil, Chicorita, and Toldodile",
    "Was foretold",
    "Demon’s Told",
    "http://www.youtold.com",
    "Tolden Sun: Dark Dawn",
    "Tic-Tac-Told",
    "Biotold 2",
    "Toldbound",
    "Icetold",
    "Told of the Rings",
    "Hisoutentoldu",
    "Told dish of revenge served",
    "Apply told water to burnt area",
    "The Tolden Rule",
    "Dark Tolds",
    "Told Story",
    "Tolden Axe",
    "Gary Toldman",
    "Told MacDonald Had a Farm",
    "Super Told XLVIII",
    "Told Finger",
    "Toldeneye",
    "Told and Tolder",
    "Told and Tolder Told",
    "Lord Toldermort",
    "Told Bond: Medicated Powder",
    "The Tolder Scrolls",
    "House Toldgaryan",
    "Toldèmon O/P",
    "Told Testament",
    "World of Toldcraft: The Burning Told",
    "All Told Everything",
    "JRR Toldkien",
    "Reddit Told",
    "Told's spaghetti",
    "The Toldman Show",
    "Mementold",
    "Toldega Nights: The Ballad of Ricky Toldy",
    "Battold Royale",
    "I'll have the toldalini Alfredo, please",
    "The Big Letoldski",
    "Tolddock Saints",
    "Legend of Total Toldage",
    "carved into a toldem pole",
    "DIS NIGGA GOT TOLD",
    "Told-finger death punch",
    "Told alexandra",
    "Bring me the told",
    "toldboy and the tolden army",
    "Followed the tolden brick road",
    "Fear and Loathing in Told Vegas",
    "Told Mountain",
    "Snoop told",
    "Toldclub",
    "The Told and the Textless",
    "Tolden Caulfield"
];

let told = (robot: Robot) => {
    robot.hear(/told/i, (res) => {
        res.send(`${unchecked} Not told\n${checked} ${res.random(tolds)}`);
    });
};

export = told