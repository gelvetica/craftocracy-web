import type { HttpValidationError } from "./HttpValidationError.ts";
import type { ProposalModel } from "./ProposalModel.ts";

 export type GetProposalProposalsProposalGetPathParams = {
    /**
     * @type integer
    */
    proposal: number;
};

 /**
 * @description Successful Response
*/
export type GetProposalProposalsProposalGet200 = ProposalModel;

 /**
 * @description Validation Error
*/
export type GetProposalProposalsProposalGet422 = HttpValidationError;

 export type GetProposalProposalsProposalGetQueryResponse = GetProposalProposalsProposalGet200;

 export type GetProposalProposalsProposalGetQuery = {
    Response: GetProposalProposalsProposalGet200;
    PathParams: GetProposalProposalsProposalGetPathParams;
    Errors: GetProposalProposalsProposalGet422;
};