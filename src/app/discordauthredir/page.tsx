'use client'

import useSWR from "swr";
import {serverInfoGet} from "@/lib/client";
import {redirect} from "next/navigation";

export default function Home() {
    redirect(process.env.NEXT_PUBLIC_DISCORD_OAUTH_URL);
}