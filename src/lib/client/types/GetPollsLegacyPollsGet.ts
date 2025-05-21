import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { PollCollection } from './PollCollection.ts'

export type GetPollsLegacyPollsGetQueryParams = {
  poll_open?: boolean | null
  i_voted?: boolean | null
  i_can_vote?: boolean | null
}

/**
 * @description Successful Response
 */
export type GetPollsLegacyPollsGet200 = PollCollection

/**
 * @description Validation Error
 */
export type GetPollsLegacyPollsGet422 = HTTPValidationError

export type GetPollsLegacyPollsGetQueryResponse = GetPollsLegacyPollsGet200

export type GetPollsLegacyPollsGetQuery = {
  Response: GetPollsLegacyPollsGet200
  QueryParams: GetPollsLegacyPollsGetQueryParams
  Errors: GetPollsLegacyPollsGet422
}