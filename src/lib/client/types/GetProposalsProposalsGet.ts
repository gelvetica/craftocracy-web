import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { ProposalCollection } from './ProposalCollection.ts'

export type GetProposalsProposalsGetQueryParams = {
  author?: string | null
  invalid?: boolean | null
}

/**
 * @description Successful Response
 */
export type GetProposalsProposalsGet200 = ProposalCollection

/**
 * @description Validation Error
 */
export type GetProposalsProposalsGet422 = HTTPValidationError

export type GetProposalsProposalsGetQueryResponse = GetProposalsProposalsGet200

export type GetProposalsProposalsGetQuery = {
  Response: GetProposalsProposalsGet200
  QueryParams: GetProposalsProposalsGetQueryParams
  Errors: GetProposalsProposalsGet422
}