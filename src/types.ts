export const BomRegex = new RegExp("^[^{]");
export const PidRegex = new RegExp("^[A-F\\d]{16}$", "i");
export const RouteRegex = new RegExp("/:(\\w+)", "g");

export namespace Endpoints {
    export const INDEX = "/index"
    export const STATS = INDEX;
    export const PROFILE = "/players/:prefix/:hash";
    export const ORIGINAL_TRACKS = "/original-track-leaderboards";
    export const CUSTOM_TRACKS = "/ctgp-leaderboards";
    export const TRACK = "/leaderboard/:prefix/:hash/:category";
}

export namespace Responses {

    export interface Link {
        href: string
    }

    export interface Links {
        self: Link
    }

    export interface TrackLinks extends Links {
        index: Link,
        leaderboardFastLap: Link
    }

    export interface LeaderboardLinks {
        item: Link
    }

    export interface GhostLinks extends LeaderboardLinks {
        leaderboard: Link
    }

    export interface PlayerLinks extends GhostLinks {
        player: Link
    }

    export interface StatsLinks extends Links {
        'original-tracks': Link,
        'ctgp-tracks': Link,
        'other-tracks': Link,
        'all-tracks': Link,
        'original-tracks-200cc': Link,
        'ctgp-tracks-200cc': Link,
        'other-tracks-200cc': Link,
        'all-tracks-200cc': Link,
        'players': Link
    }

    export interface ProfileStars<T> {
        bronze: T,
        silver: T,
        gold: T
    }

    export interface RecentRecord {
        
    }

    export interface Stats {
        _links: StatsLinks,
        uniquePlayers: number,
        leaderboardCount: number,
        ghostCount: number,
        // recentRecords:
    }

    export interface ProfileGhost {
        href: string,
        slotId: number,
        '200cc': boolean,
        trackId: string,
        trackName: string,
        finishTime: string,
        finishTimeSimle: string,
        bestSplit: string,
        bestSplitSimple: string,
        hash: string,
        vehicleId: number,
        driverId: number,
        controller: number,
        usbGcnAdapterAttached: boolean,
        playersFastest: boolean,
        stars: ProfileStars<boolean>,
        dateSet: string
    }

    export interface Profile {
        _links: Links,
        playerId: string,
        ghostCount: number,
        stars: ProfileStars<number>,
        ghostfest: number,
        ghostfestTimestamp: string,
        ghosts: Array<ProfileGhost>,
        miiName: string,
        miiNames: Array<string>,
        leaderboardCount: number,
        controller: number,
        country: number,
        region: number
    }

    export interface Leaderboard {
        _links: LeaderboardLinks,
        name: string,
        authors: Array<string>,
        slotId: number,
        correctSlotId: number,
        inCtgp: boolean,
        defaultTrack: boolean,
        '200cc': boolean,
        trackId: string,
        ghostCount: number,
        uniquePlayers: number,
        popularity: number,
        lastChanged: string,
        fastestTime: string,
        fastestTimeSimple: string,
        fastestTimeLastChange: string
    }

    export interface TrackLeaderboards {
        leaderboards: Array<Leaderboard>
    }

    export interface Ghost {
        _links: GhostLinks,
        href: string,
        playerId: string,
        finishTime: string,
        finishTimeSimple: string,
        hash: string,
        vehicleId: number,
        driverId: number,
        controller: number,
        usbGcnAdapterAttached: boolean,
        country: number,
        region: number,
        player: string,
        continent: number,
        playersFasteest: boolean,
        leaderboardPlayerId: number,
        dateSet: string,
        wasWr: boolean
    }

    export interface Track {
        _links: TrackLinks,
        name: string,
        version: string,
        authors: Array<string>,
        slotId: number,
        correctSlotId: number,
        inCtgp: boolean,
        defaultTrack: boolean,
        '200cc': boolean,
        trackId: string,
        ghostCount: number,
        ghosts: Array<Ghost>
    }
}