import type { HttpValidationError } from "./HttpValidationError.ts";
import type { ProposalReferenceModel } from "./ProposalReferenceModel.ts";
import type { ReviseProposalModel } from "./ReviseProposalModel.ts";

 export type ReviseProposalProposalsProposalRevisePostPathParams = {
    /**
     * @type integer
    */
    proposal: number;
};

 /**
 * @description Successful Response
*/
export type ReviseProposalProposalsProposalRevisePost200 = ProposalReferenceModel;

 /**
 * @description Validation Error
*/
export type ReviseProposalProposalsProposalRevisePost422 = HttpValidationError;

 export type ReviseProposalProposalsProposalRevisePostMutationRequest = ReviseProposalModel;

 export type ReviseProposalProposalsProposalRevisePostMutationResponse = ReviseProposalProposalsProposalRevisePost200;

 export type ReviseProposalProposalsProposalRevisePostMutation = {
    Response: ReviseProposalProposalsProposalRevisePost200;
    Request: ReviseProposalProposalsProposalRevisePostMutationRequest;
    PathParams: ReviseProposalProposalsProposalRevisePostPathParams;
    Errors: ReviseProposalProposalsProposalRevisePost422;
};