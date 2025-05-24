import type { HTTPValidationError } from './HTTPValidationError.ts'

export type ProcessPollResultsPollsPollIdProcessResultsGetPathParams = {
  /**
   * @type string
   */
  poll_id: string
}

/**
 * @description Successful Response
 */
export type ProcessPollResultsPollsPollIdProcessResultsGet200 = any

/**
 * @description Validation Error
 */
export type ProcessPollResultsPollsPollIdProcessResultsGet422 = HTTPValidationError

export type ProcessPollResultsPollsPollIdProcessResultsGetQueryResponse = ProcessPollResultsPollsPollIdProcessResultsGet200

export type ProcessPollResultsPollsPollIdProcessResultsGetQuery = {
  Response: ProcessPollResultsPollsPollIdProcessResultsGet200
  PathParams: ProcessPollResultsPollsPollIdProcessResultsGetPathParams
  Errors: ProcessPollResultsPollsPollIdProcessResultsGet422
}