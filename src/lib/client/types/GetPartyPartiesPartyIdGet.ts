import type { HttpValidationError } from "./HttpValidationError.ts";
import type { PartyModel } from "./PartyModel.ts";

 export type GetPartyPartiesPartyIdGetPathParams = {
    /**
     * @type string
    */
    party_id: string;
};

 /**
 * @description Successful Response
*/
export type GetPartyPartiesPartyIdGet200 = PartyModel;

 /**
 * @description Validation Error
*/
export type GetPartyPartiesPartyIdGet422 = HttpValidationError;

 export type GetPartyPartiesPartyIdGetQueryResponse = GetPartyPartiesPartyIdGet200;

 export type GetPartyPartiesPartyIdGetQuery = {
    Response: GetPartyPartiesPartyIdGet200;
    PathParams: GetPartyPartiesPartyIdGetPathParams;
    Errors: GetPartyPartiesPartyIdGet422;
};