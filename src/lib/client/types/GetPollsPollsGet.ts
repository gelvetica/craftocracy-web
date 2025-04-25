import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { PollCollection } from './PollCollection.ts'

export type GetPollsPollsGetQueryParams = {
  poll_open?: boolean | null
  i_voted?: boolean | null
  i_can_vote?: boolean | null
}

/**
 * @description Successful Response
 */
export type GetPollsPollsGet200 = PollCollection

/**
 * @description Validation Error
 */
export type GetPollsPollsGet422 = HTTPValidationError

export type GetPollsPollsGetQueryResponse = GetPollsPollsGet200

export type GetPollsPollsGetQuery = {
  Response: GetPollsPollsGet200
  QueryParams: GetPollsPollsGetQueryParams
  Errors: GetPollsPollsGet422
}