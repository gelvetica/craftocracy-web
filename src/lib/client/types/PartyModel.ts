import type { PartyLeaderModel } from './PartyLeaderModel.ts'

export type PartyModel = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  shorthand: string
  /**
   * @type string
   */
  color: string
  leader: PartyLeaderModel | null
}