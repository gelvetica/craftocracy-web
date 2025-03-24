import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { PollModel } from './PollModel.ts'

export type GetPollPollsPollIdGetPathParams = {
  /**
   * @type string
   */
  poll_id: string
}

/**
 * @description Successful Response
 */
export type GetPollPollsPollIdGet200 = PollModel

/**
 * @description Validation Error
 */
export type GetPollPollsPollIdGet422 = HTTPValidationError

export type GetPollPollsPollIdGetQueryResponse = GetPollPollsPollIdGet200

export type GetPollPollsPollIdGetQuery = {
  Response: GetPollPollsPollIdGet200
  PathParams: GetPollPollsPollIdGetPathParams
  Errors: GetPollPollsPollIdGet422
}