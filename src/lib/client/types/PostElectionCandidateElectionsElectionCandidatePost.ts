import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { InsertElectionCandidateModel } from './InsertElectionCandidateModel.ts'

export type PostElectionCandidateElectionsElectionCandidatePostPathParams = {
  /**
   * @type string
   */
  election: string
}

/**
 * @description Successful Response
 */
export type PostElectionCandidateElectionsElectionCandidatePost200 = any

/**
 * @description Validation Error
 */
export type PostElectionCandidateElectionsElectionCandidatePost422 = HTTPValidationError

export type PostElectionCandidateElectionsElectionCandidatePostMutationRequest = InsertElectionCandidateModel

export type PostElectionCandidateElectionsElectionCandidatePostMutationResponse = PostElectionCandidateElectionsElectionCandidatePost200

export type PostElectionCandidateElectionsElectionCandidatePostMutation = {
  Response: PostElectionCandidateElectionsElectionCandidatePost200
  Request: PostElectionCandidateElectionsElectionCandidatePostMutationRequest
  PathParams: PostElectionCandidateElectionsElectionCandidatePostPathParams
  Errors: PostElectionCandidateElectionsElectionCandidatePost422
}