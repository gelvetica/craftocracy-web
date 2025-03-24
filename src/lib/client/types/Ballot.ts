export const ballotFirstEnum = {
  'Atlas / Azocir': 'Atlas / Azocir',
  'Pentagonal / Releporp': 'Pentagonal / Releporp',
} as const

export type BallotFirstEnum = (typeof ballotFirstEnum)[keyof typeof ballotFirstEnum]

export type Ballot = {
  /**
   * @type string
   */
  first: BallotFirstEnum
}