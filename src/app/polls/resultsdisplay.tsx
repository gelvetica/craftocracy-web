'use client'

import {PollReferenceModel} from "@/lib/client";

function percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
}


export default function ResultsDisplay(poll: PollReferenceModel) {
    const percentages = []
    for (let i = 0; i < poll.choices.length; i++) {
        percentages.push(percentage(poll.choices[i].votes, poll.total_voters))
    }
    console.log(percentages)
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="font-xl">Yes - {poll.choices[0].votes}</span>
                <span className="font-xl">{poll.choices[1].votes} - No</span>
            </div>
            <div className="w-full bg-surface1 rounded-full h-5">
                <div className="font-medium p-0.5 bg-green leading-none text-surface0 h-full rounded-l-full text-center float-left" style={{width: percentages[0] + "%"}}>{percentages[0].toFixed(2)}%</div>
                <div className="font-medium p-0.5 bg-red leading-none text-surface0 h-full rounded-r-full text-center float-right" style={{width: percentages[1] + "%"}}>{percentages[1].toFixed(2)}%</div>
            </div>
        </div>
    )
}