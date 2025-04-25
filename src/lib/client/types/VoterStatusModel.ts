export type VoterStatusModel = {
  /**
   * @type string
   */
  id: string
  /**
   * @type boolean
   */
  open: boolean
  /**
   * @type boolean
   */
  user_is_voter: boolean
  /**
   * @type boolean
   */
  user_has_voted: boolean
  /**
   * @type boolean
   */
  user_can_vote: boolean
}