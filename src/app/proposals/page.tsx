'use client'

import {getProposalsProposalsGet} from "@/lib/client";
import useSWR from "swr";
import Link from "next/link";
import {useAccountStatus} from "@/lib/useAccountStatus";
import React from "react";


const ProposalsList = () => {
    const { data, error, isLoading } = useSWR("/proposals", getProposalsProposalsGet);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <ul>
            {data.proposals.toReversed().map((proposal) => {
                return (
                    <li key={proposal.id}><Link href={`/proposals/${proposal.id}`}>{proposal.id}. {proposal.title}</Link></li>
                )
            })}
        </ul>
    );
}


export default function ProposalsPage() {
    const {data, isLoading} = useAccountStatus();
    const plist = ProposalsList();
    if (isLoading) return
    return (
        <div>
            {
                (data.status === "registered") &&
                <div className="float-right bg-surface0 p-1 px-2 rounded-full text-xl">
                    <Link href={'/proposals/new'}>Add proposal</Link>
                </div>
            }
            <p className="text-2xl">Proposals</p>
            {plist}
        </div>
    );
}
