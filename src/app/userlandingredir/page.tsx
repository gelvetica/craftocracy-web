'use client'

import {redirect} from "next/navigation";
import {useAccountStatus} from "@/lib/useAccountStatus";

export default function UserLandingRedir() {
    const {data, isLoading} = useAccountStatus();
    if (isLoading) return
    if (data) {
        console.log(data)
        redirect(data.ref)
    }
}