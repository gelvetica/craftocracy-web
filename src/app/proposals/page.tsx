'use client'

import {useGetProposalsProposalsGet} from "@/lib/client/hooks";
import Link from "next/link";
import {useAccountStatus} from "@/lib/useAccountStatus";
import React from "react";


const ProposalsList = () => {
    const { data, isLoading } = useGetProposalsProposalsGet();

    if (isLoading) return <div>loading...</div>
    return (
        <ul>
            {data.proposals.toReversed().map((proposal) => {
                return (
                    <div key={proposal.id} className={proposal.invalid ? 'underline decoration-red' : ""}>
                    <li><Link href={`/proposals/${proposal.id}`}>{proposal.id}. {proposal.title}</Link></li>
                    </div>
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
