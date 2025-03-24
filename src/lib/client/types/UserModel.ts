import type { UserPartyModel } from './UserPartyModel.ts'

export type UserModel = {
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
  dc_uuid: string
  /**
   * @type string
   */
  mc_uuid: string
  party: UserPartyModel | null
}