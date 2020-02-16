import { inject, injectable } from 'inversify';

import { ChannelManagerTag } from '../tags';
import { ChannelManager } from '../channelManager';
import { Feature, Registration } from './feature';

@injectable()
export class GamesNotificationFeature extends Feature {
    private readonly timeMap: Record<string, number | undefined> = {};

    constructor(@inject(ChannelManagerTag) private channels: ChannelManager) {
        super();
    }

    public* setup(): Iterable<Registration> {
        this.channels.onVoiceChannelEnter('Games', member => {
            const general = this.channels.fetchByName('general', 'text');
            if (!general) {
                return;
            }

            const currentTime = Date.now();
            const userTime = this.timeMap[member.displayName];
            if (!userTime || (currentTime - userTime) > 60000) {
                this.timeMap[member.displayName] = currentTime;
                general.send(`${member.displayName} wants to play games!`);
            }
        });

        return;
    }
}