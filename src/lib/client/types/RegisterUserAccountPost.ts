import type { HttpValidationError } from "./HttpValidationError.ts";
import type { RegistrationModel } from "./RegistrationModel.ts";
import type { UserAccountModel } from "./UserAccountModel.ts";

 /**
 * @description Successful Response
*/
export type RegisterUserAccountPost201 = UserAccountModel;

 /**
 * @description Validation Error
*/
export type RegisterUserAccountPost422 = HttpValidationError;

 export type RegisterUserAccountPostMutationRequest = RegistrationModel;

 export type RegisterUserAccountPostMutationResponse = RegisterUserAccountPost201;

 export type RegisterUserAccountPostMutation = {
    Response: RegisterUserAccountPost201;
    Request: RegisterUserAccountPostMutationRequest;
    Errors: RegisterUserAccountPost422;
};