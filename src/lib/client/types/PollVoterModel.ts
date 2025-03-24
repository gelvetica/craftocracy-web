import type { UserModel } from './UserModel.ts'

export type PollVoterModel = {
  /**
   * @type object
   */
  user: UserModel
  choice: string | null
}