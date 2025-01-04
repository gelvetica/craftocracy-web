/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { RegisterUserAccountPostMutationRequest, RegisterUserAccountPostMutationResponse, RegisterUserAccountPost422 } from "./types/RegisterUserAccountPost.ts";

 /**
 * @summary Register User
 * {@link /account/}
 */
export async function registerUserAccountPost(data: RegisterUserAccountPostMutationRequest, config: Partial<RequestConfig<RegisterUserAccountPostMutationRequest>> = {}) {
    const res = await client<RegisterUserAccountPostMutationResponse, RegisterUserAccountPost422, RegisterUserAccountPostMutationRequest>({ method: "POST", url: `/account/`, data, ...config });
    return res.data;
}