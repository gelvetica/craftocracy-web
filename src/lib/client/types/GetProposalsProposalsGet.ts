import type { ProposalCollection } from './ProposalCollection.ts'

/**
 * @description Successful Response
 */
export type GetProposalsProposalsGet200 = ProposalCollection

export type GetProposalsProposalsGetQueryResponse = GetProposalsProposalsGet200

export type GetProposalsProposalsGetQuery = {
  Response: GetProposalsProposalsGet200
  Errors: any
}