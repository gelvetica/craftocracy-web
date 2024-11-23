import type { UserCollection } from "./UserCollection.ts";

 /**
 * @description Successful Response
*/
export type ListUsersUsersGet200 = UserCollection;

 export type ListUsersUsersGetQueryResponse = ListUsersUsersGet200;

 export type ListUsersUsersGetQuery = {
    Response: ListUsersUsersGet200;
    Errors: any;
};