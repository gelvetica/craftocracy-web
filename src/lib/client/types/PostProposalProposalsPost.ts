import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { PostProposalModel } from './PostProposalModel.ts'
import type { ProposalReferenceModel } from './ProposalReferenceModel.ts'

/**
 * @description Successful Response
 */
export type PostProposalProposalsPost200 = ProposalReferenceModel

/**
 * @description Validation Error
 */
export type PostProposalProposalsPost422 = HTTPValidationError

export type PostProposalProposalsPostMutationRequest = PostProposalModel

export type PostProposalProposalsPostMutationResponse = PostProposalProposalsPost200

export type PostProposalProposalsPostMutation = {
  Response: PostProposalProposalsPost200
  Request: PostProposalProposalsPostMutationRequest
  Errors: PostProposalProposalsPost422
}