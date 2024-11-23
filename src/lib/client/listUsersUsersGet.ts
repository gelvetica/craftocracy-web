/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { ListUsersUsersGetQueryResponse } from "./types/ListUsersUsersGet.ts";

 /**
 * @summary List Users
 * @link /users/
 */
export async function listUsersUsersGet(config: Partial<RequestConfig> = {}) {
    const res = await client<ListUsersUsersGetQueryResponse, Error, unknown>({ method: "GET", url: `/users/`, ...config });
    return res.data;
}