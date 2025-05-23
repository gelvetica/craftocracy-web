'use client'

import Link from "next/link";
import React from "react";
import {useGetPollsLegacyPollsGet} from "@/lib/client/hooks";
import {PollReferenceModel} from "@/lib/client";
import ResultsDisplay from "@/app/polls/resultsdisplay";
import {useSearchParams} from "next/navigation";
import { Suspense } from 'react'

function PollCard(poll: PollReferenceModel) {
    return (
        <div className="bg-surface0 rounded-2xl p-2">
            <div className="font-bold text-xl text-center"><Link href={`/polls/${poll.id}`}>{poll.title}</Link></div>
            <div className="text-lg text-subtext0 text-center">References:
                <Link className="text-blue" href={`/proposals/${poll.proposal}`}> Proposal #{poll.proposal}</Link></div>
            {ResultsDisplay(poll)}
        </div>
    )
}

function PollsList() {
    //"/polls", getPollsPollsGet,
    const {data, isLoading} = useGetPollsLegacyPollsGet({...{poll_open: true}, ...Object.fromEntries(useSearchParams())}, {query: {refreshInterval: 10000}});
    if (isLoading) return
    if (data) return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {data.polls.toReversed().map((poll) => {
                return (
                    <div key={poll.id}>
                        {PollCard(poll)}
                    </div>
                )
            })}
        </div>
    );
}

export default function PollPage() {
    return (
        <div>
            <p className="text-2xl mb-2">Polls</p>
            <Suspense fallback={(<div>loading...</div>)}>
                <PollsList />
            </Suspense>
        </div>
    )
}
