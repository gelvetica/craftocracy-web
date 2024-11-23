'use client'

import {getAccountAccountGet} from "@/lib/client";
import useSWR from "swr";
import React from "react";
import SuperErrorHandlerDeluxe from "@/components/SuperErrorHandlerDeluxe";


const AccountInfoComponent = () => {
    const { data, error, isLoading } = useSWR("/parties", getAccountAccountGet);
    if (error) return <div>{SuperErrorHandlerDeluxe(error)}</div>
    if (isLoading) return <div>loading...</div>
    return (
        <ul>
            <p className="text-2xl">{data.name}</p><br/>
            <p className="text-2xl">Discord: {data.dc_uuid}</p><br/>
            <p className="text-2xl">Minecraft: {data.mc_uuid}</p><br/>
            <p className="text-2xl">Strudel: {data.id}</p><br/>
            <p className="text-xs text-subtext0">LATER: proper fetch discord, minecraft usernames. pretty this up in general</p>
        </ul>
    );
}


export default function Home() {
    return (
        <div>
            {AccountInfoComponent()}
        </div>
    );
}
