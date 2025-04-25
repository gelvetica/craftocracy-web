import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { VoterStatusModel } from './VoterStatusModel.ts'

export type GetVoterStatusElectionsElectionVoterStatusGetPathParams = {
  /**
   * @type string
   */
  election: string
}

/**
 * @description Successful Response
 */
export type GetVoterStatusElectionsElectionVoterStatusGet200 = VoterStatusModel

/**
 * @description Validation Error
 */
export type GetVoterStatusElectionsElectionVoterStatusGet422 = HTTPValidationError

export type GetVoterStatusElectionsElectionVoterStatusGetQueryResponse = GetVoterStatusElectionsElectionVoterStatusGet200

export type GetVoterStatusElectionsElectionVoterStatusGetQuery = {
  Response: GetVoterStatusElectionsElectionVoterStatusGet200
  PathParams: GetVoterStatusElectionsElectionVoterStatusGetPathParams
  Errors: GetVoterStatusElectionsElectionVoterStatusGet422
}