import type { Ballot } from "./Ballot.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

 /**
 * @description Successful Response
*/
export type CastBallotPredictionVotePost200 = any;

 /**
 * @description Validation Error
*/
export type CastBallotPredictionVotePost422 = HttpValidationError;

 export type CastBallotPredictionVotePostMutationRequest = Ballot;

 export type CastBallotPredictionVotePostMutationResponse = CastBallotPredictionVotePost200;

 export type CastBallotPredictionVotePostMutation = {
    Response: CastBallotPredictionVotePost200;
    Request: CastBallotPredictionVotePostMutationRequest;
    Errors: CastBallotPredictionVotePost422;
};