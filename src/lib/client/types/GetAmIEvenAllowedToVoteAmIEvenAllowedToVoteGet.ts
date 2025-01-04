import type { VoterStatusModel } from "./VoterStatusModel.ts";

 /**
 * @description Successful Response
*/
export type GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet200 = VoterStatusModel;

 export type GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryResponse = GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet200;

 export type GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQuery = {
    Response: GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet200;
    Errors: any;
};