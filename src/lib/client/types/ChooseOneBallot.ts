export type ChooseOneBallot = {
  /**
   * @type string | undefined
   */
  _id?: string
  /**
   * @type string
   */
  ballot_type: 'choose-one'
  /**
   * @type string
   */
  choice: string
}