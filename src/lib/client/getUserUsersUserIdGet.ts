/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { GetUserUsersUserIdGetQueryResponse, GetUserUsersUserIdGetPathParams, GetUserUsersUserIdGet422 } from "./types/GetUserUsersUserIdGet.ts";

 /**
 * @summary Get User
 * @link /users/:user_id
 */
export async function getUserUsersUserIdGet(userId: GetUserUsersUserIdGetPathParams["user_id"], config: Partial<RequestConfig> = {}) {
    const res = await client<GetUserUsersUserIdGetQueryResponse, GetUserUsersUserIdGet422, unknown>({ method: "GET", url: `/users/${userId}`, ...config });
    return res.data;
}