/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { ListUsersUsersGetQueryResponse, ListUsersUsersGetQueryParams, ListUsersUsersGet422 } from "./types/ListUsersUsersGet.ts";

 /**
 * @summary List Users
 * {@link /users/}
 */
export async function listUsersUsersGet(params?: ListUsersUsersGetQueryParams, config: Partial<RequestConfig> = {}) {
    const res = await client<ListUsersUsersGetQueryResponse, ListUsersUsersGet422, unknown>({ method: "GET", url: `/users/`, params, ...config });
    return res.data;
}