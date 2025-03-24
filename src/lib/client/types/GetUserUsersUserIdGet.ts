import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { UserModel } from './UserModel.ts'

export type GetUserUsersUserIdGetPathParams = {
  /**
   * @type string
   */
  user_id: string
}

/**
 * @description Successful Response
 */
export type GetUserUsersUserIdGet200 = UserModel

/**
 * @description Validation Error
 */
export type GetUserUsersUserIdGet422 = HTTPValidationError

export type GetUserUsersUserIdGetQueryResponse = GetUserUsersUserIdGet200

export type GetUserUsersUserIdGetQuery = {
  Response: GetUserUsersUserIdGet200
  PathParams: GetUserUsersUserIdGetPathParams
  Errors: GetUserUsersUserIdGet422
}