import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { TempVoterStatus } from './TempVoterStatus.ts'

export type TempVoterStatusPollsPollIdVoterStatusGetPathParams = {
  /**
   * @type string
   */
  poll_id: string
}

/**
 * @description Successful Response
 */
export type TempVoterStatusPollsPollIdVoterStatusGet200 = TempVoterStatus

/**
 * @description Validation Error
 */
export type TempVoterStatusPollsPollIdVoterStatusGet422 = HTTPValidationError

export type TempVoterStatusPollsPollIdVoterStatusGetQueryResponse = TempVoterStatusPollsPollIdVoterStatusGet200

export type TempVoterStatusPollsPollIdVoterStatusGetQuery = {
  Response: TempVoterStatusPollsPollIdVoterStatusGet200
  PathParams: TempVoterStatusPollsPollIdVoterStatusGetPathParams
  Errors: TempVoterStatusPollsPollIdVoterStatusGet422
}