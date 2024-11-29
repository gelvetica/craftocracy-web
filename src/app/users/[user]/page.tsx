'use client'

import { useParams } from 'next/navigation'
import useSWR from "swr";
import {getUserUsersUserIdGet} from "@/lib/client";

export default function ExampleClientComponent() {
    const params = useParams<{ user: string }>()
    const {data: user, isLoading} = useSWR(params.user, getUserUsersUserIdGet)
    if (isLoading) return <div>please wait...</div>
    if (user) return (
        <div className="text-2xl">{user.name}</div>
    )
}