import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { PollWithResultsModel } from './PollWithResultsModel.ts'

export type GetPollResultsPollsPollIdResultsGetPathParams = {
  /**
   * @type string
   */
  poll_id: string
}

/**
 * @description Successful Response
 */
export type GetPollResultsPollsPollIdResultsGet200 = PollWithResultsModel

/**
 * @description Validation Error
 */
export type GetPollResultsPollsPollIdResultsGet422 = HTTPValidationError

export type GetPollResultsPollsPollIdResultsGetQueryResponse = GetPollResultsPollsPollIdResultsGet200

export type GetPollResultsPollsPollIdResultsGetQuery = {
  Response: GetPollResultsPollsPollIdResultsGet200
  PathParams: GetPollResultsPollsPollIdResultsGetPathParams
  Errors: GetPollResultsPollsPollIdResultsGet422
}