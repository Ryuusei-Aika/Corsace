import { Beatmap, Beatmapset } from "./beatmap";
import { Eligibility } from "./eligibility";
import { RequestStatus } from "./guestRequests";
import { ModeDivision } from "./modes";

export interface UserMCAInfo extends UserInfo {
    guestReq: {
        ID: number,
        year: number,
        mode: ModeDivision,
        accepted: RequestStatus,
        user: User,
        beatmap: Beatmap,
    };
    eligibility: Eligibility[];
    mcaStaff: {
        standard: boolean;
        taiko: boolean;
        fruits: boolean;
        mania: boolean;
        storyboard: boolean;
    }
}

export interface UserInfo {
    corsaceID: number;
    discord: {
        avatar: string;
        userID: string;
        username: string;
    };
    osu: {
        avatar: string;
        userID: string;
        username: string;
        otherNames: string[];
    };
    staff: {
        corsace: boolean;
        headStaff: boolean;
        staff: boolean;
    };
    joinDate: Date;
    lastLogin: Date;
}

export interface UserCondensedInfo {
    corsaceID: number;
    username: string;
    avatar: string;
    userID: string;
    otherNames: string[];
    chosen: boolean;
}

export interface User {
    ID: number;
    discord: OAuth;
    osu: OAuth;
    registered: Date;
    lastLogin: Date;
    mcaEligibility: Eligibility[];
    beatmapsets: Beatmapset[];
    canComment: boolean;
}

export interface OAuth {
    userID: string;
    username: string;
    avatar: string;
    accessToken?: string;
    refreshToken?: string;
    dateAdded: Date;
    lastVerified: Date;
}