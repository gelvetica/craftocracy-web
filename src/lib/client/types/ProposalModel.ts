import type { ProposalRevisionModel } from './ProposalRevisionModel.ts'
import type { UserModel } from './UserModel.ts'

export type ProposalModel = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  title: string
  /**
   * @type object
   */
  author: UserModel
  /**
   * @type boolean
   */
  invalid: boolean
  /**
   * @type string
   */
  rejection_reason: string
  /**
   * @type array
   */
  revisions: ProposalRevisionModel[]
  /**
   * @type boolean
   */
  revisions_allowed: boolean
}