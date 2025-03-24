import type { UserAccountModel } from './UserAccountModel.ts'

/**
 * @description Successful Response
 */
export type GetAccountAccountGet200 = UserAccountModel

export type GetAccountAccountGetQueryResponse = GetAccountAccountGet200

export type GetAccountAccountGetQuery = {
  Response: GetAccountAccountGet200
  Errors: any
}