import type { HttpValidationError } from "./HttpValidationError.ts";
import type { PostProposalModel } from "./PostProposalModel.ts";
import type { ProposalReferenceModel } from "./ProposalReferenceModel.ts";

 /**
 * @description Successful Response
*/
export type PostProposalProposalsPost200 = ProposalReferenceModel;

 /**
 * @description Validation Error
*/
export type PostProposalProposalsPost422 = HttpValidationError;

 export type PostProposalProposalsPostMutationRequest = PostProposalModel;

 export type PostProposalProposalsPostMutationResponse = PostProposalProposalsPost200;

 export type PostProposalProposalsPostMutation = {
    Response: PostProposalProposalsPost200;
    Request: PostProposalProposalsPostMutationRequest;
    Errors: PostProposalProposalsPost422;
};