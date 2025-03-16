export const ballotFirstEnum = {
    "Gem / Haox": "Gem / Haox",
    "Atlas / Azocir": "Atlas / Azocir",
    "Pentagonal / Releporp": "Pentagonal / Releporp"
} as const;

 export type BallotFirstEnum = (typeof ballotFirstEnum)[keyof typeof ballotFirstEnum];

 export const ballotSecondEnum = {
    "Gem / Haox": "Gem / Haox",
    "Atlas / Azocir": "Atlas / Azocir",
    "Pentagonal / Releporp": "Pentagonal / Releporp"
} as const;

 export type BallotSecondEnum = (typeof ballotSecondEnum)[keyof typeof ballotSecondEnum];

 export const ballotThirdEnum = {
    "Gem / Haox": "Gem / Haox",
    "Atlas / Azocir": "Atlas / Azocir",
    "Pentagonal / Releporp": "Pentagonal / Releporp"
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