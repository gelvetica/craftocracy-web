import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { ModelsPollModel } from './ModelsPollModel.ts'

export type GetPollLegacyPollsPollIdGetPathParams = {
  /**
   * @type string
   */
  poll_id: string
}

/**
 * @description Successful Response
 */
export type GetPollLegacyPollsPollIdGet200 = ModelsPollModel

/**
 * @description Validation Error
 */
export type GetPollLegacyPollsPollIdGet422 = HTTPValidationError

export type GetPollLegacyPollsPollIdGetQueryResponse = GetPollLegacyPollsPollIdGet200

export type GetPollLegacyPollsPollIdGetQuery = {
  Response: GetPollLegacyPollsPollIdGet200
  PathParams: GetPollLegacyPollsPollIdGetPathParams
  Errors: GetPollLegacyPollsPollIdGet422
}