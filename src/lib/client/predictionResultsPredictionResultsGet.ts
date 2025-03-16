/* eslint-disable no-alert, no-console */
import client from "../axiosInstance.ts";
import type { RequestConfig } from "../axiosInstance.ts";
import type { PredictionResultsPredictionResultsGetQueryResponse } from "./types/PredictionResultsPredictionResultsGet.ts";

 /**
 * @summary Prediction Results
 * {@link /prediction_results}
 */
export async function predictionResultsPredictionResultsGet(config: Partial<RequestConfig> = {}) {
    const res = await client<PredictionResultsPredictionResultsGetQueryResponse, Error, unknown>({ method: "GET", url: `/prediction_results`, ...config });
    return res.data;
}