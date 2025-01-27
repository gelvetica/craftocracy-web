export const ballotFirstEnum = {
    "TheBrokenFox / spiderpickl": "TheBrokenFox / spiderpickl",
    "Pentagonal / Big Todd": "Pentagonal / Big Todd",
    "dominoexists / Gem": "dominoexists / Gem",
    "CiCi / Sol": "CiCi / Sol",
    "poop barrel / trif": "poop barrel / trif"
} as const;

 export type BallotFirstEnum = (typeof ballotFirstEnum)[keyof typeof ballotFirstEnum];

 export const ballotSecondEnum = {
    "TheBrokenFox / spiderpickl": "TheBrokenFox / spiderpickl",
    "Pentagonal / Big Todd": "Pentagonal / Big Todd",
    "dominoexists / Gem": "dominoexists / Gem",
    "CiCi / Sol": "CiCi / Sol",
    "poop barrel / trif": "poop barrel / trif"
} as const;

 export type BallotSecondEnum = (typeof ballotSecondEnum)[keyof typeof ballotSecondEnum];

 export const ballotThirdEnum = {
    "TheBrokenFox / spiderpickl": "TheBrokenFox / spiderpickl",
    "Pentagonal / Big Todd": "Pentagonal / Big Todd",
    "dominoexists / Gem": "dominoexists / Gem",
    "CiCi / Sol": "CiCi / Sol",
    "poop barrel / trif": "poop barrel / trif"
} as const;

 export type BallotThirdEnum = (typeof ballotThirdEnum)[keyof typeof ballotThirdEnum];

 export const ballotFourthEnum = {
    "TheBrokenFox / spiderpickl": "TheBrokenFox / spiderpickl",
    "Pentagonal / Big Todd": "Pentagonal / Big Todd",
    "dominoexists / Gem": "dominoexists / Gem",
    "CiCi / Sol": "CiCi / Sol",
    "poop barrel / trif": "poop barrel / trif"
} as const;

 export type BallotFourthEnum = (typeof ballotFourthEnum)[keyof typeof ballotFourthEnum];

 export const ballotFifthEnum = {
    "TheBrokenFox / spiderpickl": "TheBrokenFox / spiderpickl",
    "Pentagonal / Big Todd": "Pentagonal / Big Todd",
    "dominoexists / Gem": "dominoexists / Gem",
    "CiCi / Sol": "CiCi / Sol",
    "poop barrel / trif": "poop barrel / trif"
} as const;

 export type BallotFifthEnum = (typeof ballotFifthEnum)[keyof typeof ballotFifthEnum];

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
    /**
     * @type string
    */
    fourth: BallotFourthEnum;
    /**
     * @type string
    */
    fifth: BallotFifthEnum;
};