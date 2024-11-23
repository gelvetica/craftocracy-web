'use client'

import useSWR from "swr";
import {serverInfoGet} from "@/lib/client";
import {redirect} from "next/navigation";

export default function Home() {
    const {data, isLoading} = useSWR("/", serverInfoGet);
    if (isLoading) return
    if (data) {
        redirect(data.login_url);
    }
}