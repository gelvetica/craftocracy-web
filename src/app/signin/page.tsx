'use client'

import {useSearchParams} from "next/navigation";
import {callbackCallbackGet} from "@/lib/client";
import useSWR from "swr";
import { Suspense } from 'react'


function SignIn() {
    const searchParams = useSearchParams()
    const input_code = searchParams.get('code')
    const {data, error, isLoading} = useSWR({code: input_code}, callbackCallbackGet);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>please wait...</div>
    localStorage.setItem("strudel_token", data.access_token)
    window.location.href = "/userlandingredir"
}

function wtf() {
    return <div>U have no idea how much im crying right now</div>
}

export default function SignInPage() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense fallback={wtf()}>
            <SignIn />
        </Suspense>
    )
}