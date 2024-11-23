import useSWR from "swr";
import {getAccountAccountGet} from "@/lib/client";
import {isAxiosError} from "axios";

export const useAccountStatus: [data: object | undefined, isLoading: boolean] = () => {
    const {data, isLoading, error} = useSWR("/account", getAccountAccountGet);
    if (isLoading) return {data: undefined, isLoading: true};
    if (error) {
        if (isAxiosError(error)) {
            if (error.response.status === 403) {
                return {data: {
                        status: "unauthorized",
                        ref: "/discordauthredir",
                        name: "Sign In",},
                    isLoading: false};
            }
            if (error.response.status === 401) {
                return {data: {
                        status: "unregistered",
                        ref: "/register",
                        name: "Finish Registration",},
                    isLoading: false};
            }
        }
    }
    if (data) {
        return {data: {
                status: "registered",
                ref: "/account",
                name: data.name,},
            isLoading: false};
    }
}