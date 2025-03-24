import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { UserCollection } from './UserCollection.ts'

export type ListUsersUsersGetQueryParams = {
  party?: string | null
  inactive?: boolean | null
}

/**
 * @description Successful Response
 */
export type ListUsersUsersGet200 = UserCollection

/**
 * @description Validation Error
 */
export type ListUsersUsersGet422 = HTTPValidationError

export type ListUsersUsersGetQueryResponse = ListUsersUsersGet200

export type ListUsersUsersGetQuery = {
  Response: ListUsersUsersGet200
  QueryParams: ListUsersUsersGetQueryParams
  Errors: ListUsersUsersGet422
}