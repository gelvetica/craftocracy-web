import type { HttpValidationError } from "./HttpValidationError.ts";
import type { PollReferenceModel } from "./PollReferenceModel.ts";
import type { PostPollModel } from "./PostPollModel.ts";

 /**
 * @description Successful Response
*/
export type PostPollPollsPost200 = PollReferenceModel;

 /**
 * @description Validation Error
*/
export type PostPollPollsPost422 = HttpValidationError;

 export type PostPollPollsPostMutationRequest = PostPollModel;

 export type PostPollPollsPostMutationResponse = PostPollPollsPost200;

 export type PostPollPollsPostMutation = {
    Response: PostPollPollsPost200;
    Request: PostPollPollsPostMutationRequest;
    Errors: PostPollPollsPost422;
};