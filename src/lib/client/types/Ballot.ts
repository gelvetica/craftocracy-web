export const ballotFirstEnum = {
    ".Ihavenoname": ".Ihavenoname",
    "Kio": "Kio",
    "Pentagonal": "Pentagonal"
} as const;

 export type BallotFirstEnum = (typeof ballotFirstEnum)[keyof typeof ballotFirstEnum];

 export const ballotSecondEnum = {
    ".Ihavenoname": ".Ihavenoname",
    "Kio": "Kio",
    "Pentagonal": "Pentagonal"
} as const;

 export type BallotSecondEnum = (typeof ballotSecondEnum)[keyof typeof ballotSecondEnum];

 export const ballotThirdEnum = {
    ".Ihavenoname": ".Ihavenoname",
    "Kio": "Kio",
    "Pentagonal": "Pentagonal"
} as const;

 export type BallotThirdEnum = (typeof ballotThirdEnum)[keyof typeof ballotThirdEnum];

 export type Ballot = {
    /**
     * @type string
    */
    first: BallotFirstEnum;
    /**
     * @type string
    */
    second: BallotSecondEnum;
    /**
     * @type string
    */
    third: BallotThirdEnum;
};