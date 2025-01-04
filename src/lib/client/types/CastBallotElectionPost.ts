import type { Ballot } from "./Ballot.ts";
import type { HttpValidationError } from "./HttpValidationError.ts";

 /**
 * @description Successful Response
*/
export type CastBallotElectionPost200 = any;

 /**
 * @description Validation Error
*/
export type CastBallotElectionPost422 = HttpValidationError;

 export type CastBallotElectionPostMutationRequest = Ballot;

 export type CastBallotElectionPostMutationResponse = CastBallotElectionPost200;

 export type CastBallotElectionPostMutation = {
    Response: CastBallotElectionPost200;
    Request: CastBallotElectionPostMutationRequest;
    Errors: CastBallotElectionPost422;
};