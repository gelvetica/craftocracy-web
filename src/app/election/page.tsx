'use client'
import {FormEvent, MouseEvent} from "react"
import {castBallotElectionPost, getElectionElectionGet, getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet} from "@/lib/client"
import useSWR from "swr";

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
            <td><input onClick={BallotOnSelect} className="mx-8" type="radio" id="fourth" name="fourth" value={candidate}
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
        await castBallotElectionPost(ballot_data)
        window.location.reload()
    }
    const {data: election} = useSWR("/election", getElectionElectionGet, {refreshInterval: 5000})
    const {data: voterstatus} = useSWR("/am_i_even_allowed_to_vote", getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet)
    if (election && voterstatus) return (
        <div>
            <p className="text-2xl">3rd Strudel Presidential Election</p>
            <p className="text-xs text-subtext0">to ensure confidentiality of ballots, please do not share screenshots of partially or completely filled out ballots.</p>
            <br/>
            <form onSubmit={cast_ballot}>
                <table>
                    <thead>
                    <tr>
                        <th>Candidate</th>
                        <th>1st</th>
                        <th>2nd</th>
                        <th>3rd</th>
                        <th>4th</th>
                    </tr>
                    </thead>
                    <tbody>
                    {CandidateRow("CiCi / Sol", "Sky Shatter Industries")}
                    {CandidateRow("dominoexists / PetBat", "Armored Party")}
                    {CandidateRow("Pentagonal / poop barrel", "Reform MC")}
                    {CandidateRow("milowyorhi / Alibaba", "spongebob season 3")}
                    </tbody>
                </table>
                <br/>
                <div>{election.votes_cast}/{election.voters.length} votes cast</div>
                <br/>
                <p className="text-xl">Please quadruple, then triple, then double check your choices before casting your ballot.</p>
                <p className="text-4xl">YOU CANNOT CHANGE YOUR VOTE!!!!!</p>
                <br/>
                <input className="p-4 rounded-full bg-surface0 font-bold" type="submit" value="Cast ballot!"/>
                <div>{voterstatus.reason}</div>
            </form>
        </div>
    );
}