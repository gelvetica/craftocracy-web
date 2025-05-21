export type ApprovalBallot = {
  /**
   * @type string | undefined
   */
  _id?: string
  /**
   * @type string
   */
  ballot_type: 'approval'
  approve: boolean | null
}