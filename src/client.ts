import * as Types from './types';
import fetch, { RequestInit } from 'node-fetch';
import * as Util from './util';

const host = 'https://tt.chadsoft.co.uk';

export class Client {
    public static getEndpoint<T>(endpoint: string, options?: RequestInit): Promise<T> {
        if (!endpoint.endsWith('.json')) endpoint += '.json';

        return fetch(host + endpoint, options ?? {
                headers: {
                    'User-Agent': 'ctgp-rest (https://github.com/y21/ctgp-rest)'
                }
            }).then(resp => {
                if (!Util.isJson(resp)) {
                    throw new Error('Invalid content-type header received');
                } else {
                    return resp;
                }
            })
            .then(resp => resp.text())
            .then(Util.removeBom)
            .then(JSON.parse);
    }

    public static getStats() {
        return this.getEndpoint<Types.Responses.Stats>(Types.Endpoints.STATS);
    }

    public static getProfileInfo(pid: string) {
        if (!Util.isValidPid(pid)) {
            throw new Error(`Invalid Profile ID provided! Format: ${Types.PidRegex}`);
        }

        return this.getEndpoint<Types.Responses.Profile>(
            Util.formatUrl({
                prefix: pid.substr(0, 2),
                hash: pid.substr(2)
            }, Types.Endpoints.PROFILE)
        );
    }

    public static getOriginalTracks() {
        return this.getEndpoint<Types.Responses.TrackLeaderboards>(Types.Endpoints.ORIGINAL_TRACKS);
    }

    public static getCustomTracks() {
        return this.getEndpoint<Types.Responses.TrackLeaderboards>(Types.Endpoints.CUSTOM_TRACKS);
    }

    public static getTrack(hash: string, category = '00') {
        return this.getEndpoint<Types.Responses.Track>(Util.formatUrl({
            prefix: hash.substr(0, 2),
            hash: hash.substr(2),
			category
        }, Types.Endpoints.TRACK));
    }
}