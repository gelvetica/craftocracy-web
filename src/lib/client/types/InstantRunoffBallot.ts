export type InstantRunoffBallot = {
  /**
   * @type string | undefined
   */
  _id?: string
  /**
   * @type string
   */
  ballot_type: 'irv'
  /**
   * @type array
   */
  rankings: string[]
}