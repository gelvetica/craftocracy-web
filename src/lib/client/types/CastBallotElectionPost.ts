import type { Ballot } from './Ballot.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

/**
 * @description Successful Response
 */
export type CastBallotElectionPost200 = any

/**
 * @description Validation Error
 */
export type CastBallotElectionPost422 = HTTPValidationError

export type CastBallotElectionPostMutationRequest = Ballot

export type CastBallotElectionPostMutationResponse = CastBallotElectionPost200

export type CastBallotElectionPostMutation = {
  Response: CastBallotElectionPost200
  Request: CastBallotElectionPostMutationRequest
  Errors: CastBallotElectionPost422
}