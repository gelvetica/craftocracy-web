'use client'
import {FormEvent, MouseEvent} from "react"
import {castBallotPredictionVotePost} from "@/lib/client"

function CandidateDescription(candidate: string, party: string) {
    return (
        <div>
            <div className="font-bold">{candidate}</div>
            <div className="text-xs pb-3">{party}</div>
        </div>
    )
}

function BallotOnSelect(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    const children = e.currentTarget.parentElement.parentElement.children
    for (let i = 0; i < children.length; i++) {
        const target = children[i].children[0]
        if (target.nodeName === 'INPUT') {
            console.log("got input")
            if (target.id !== e.currentTarget.id ) {
                target.checked = false
            }
        }
    }

}

function CandidateRow(candidate: string, party: string) {
    return (
        <tr>
            <td>{CandidateDescription(candidate, party)}</td>
            <td><input onClick={BallotOnSelect} className="mx-8" type="radio" id="first" name="first" value={candidate}
                       required/></td>
            <td><input onClick={BallotOnSelect} className="mx-8" type="radio" id="second" name="second" value={candidate}
                       required/></td>
            <td><input onClick={BallotOnSelect} className="mx-8" type="radio" id="third" name="third" value={candidate}
                       required/></td>
        </tr>
    )
}

//                 {CandidateDescription("trif / Gem", "Strudel Unity Party")}
//                 {CandidateDescription("Pentagonal / LemonShark", "Armored Party")}
//                 {CandidateDescription("Pentagonal / LemonShark", "Armored Party")}

export default function ElectionPage() {
    async function cast_ballot(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const ballot_data = Object.fromEntries(formData.entries())
        console.log(ballot_data)
        await castBallotPredictionVotePost(ballot_data)
    }
    return (
        <div>
            <p className="text-2xl">AMETHYST ORDER ELECTION PREDICTION</p>
            <p className="text-xs text-subtext0">sponsored by strudel computers</p>
            <br/>
            <form onSubmit={cast_ballot}>
                <table>
                    <thead>
                    <tr>
                        <th>Candidate</th>
                        <th>1st</th>
                        <th>2nd</th>
                        <th>3rd</th>
                    </tr>
                    </thead>
                    <tbody>
                    {CandidateRow("Gem / Haox", "Armored Party")}
                    {CandidateRow("Atlas / Azocir", "Sky Shatter Industries")}
                    {CandidateRow("Pentagonal / Releporp", "Reform MC")}
                    </tbody>
                </table>
                <br/>
                <br/>
                <p className="text-xl">deez nuts</p>
                <p className="text-4xl">Ngl bro idk if its working or not just hit it 20 times to be safe</p>
                <br/>
                <input className="p-4 rounded-full bg-surface0 font-bold" type="submit" value="Cast ballot!"/>
            </form>
        </div>
    );
}