export const ballotFirstEnum = {
    "Pentagonal / LemonShark": "Pentagonal / LemonShark",
    "Puppy Leanna / jade": "Puppy Leanna / jade",
    "trif / Gem": "trif / Gem"
} as const;

 export type BallotFirstEnum = (typeof ballotFirstEnum)[keyof typeof ballotFirstEnum];

 export const ballotSecondEnum = {
    "Pentagonal / LemonShark": "Pentagonal / LemonShark",
    "Puppy Leanna / jade": "Puppy Leanna / jade",
    "trif / Gem": "trif / Gem"
} as const;

 export type BallotSecondEnum = (typeof ballotSecondEnum)[keyof typeof ballotSecondEnum];

 export const ballotThirdEnum = {
    "Pentagonal / LemonShark": "Pentagonal / LemonShark",
    "Puppy Leanna / jade": "Puppy Leanna / jade",
    "trif / Gem": "trif / Gem"
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