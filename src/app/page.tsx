'use client'

import {listPartiesPartiesGet} from "@/lib/client";
import useSWR from "swr";



const MyComponent = () => {
    const { data, error, isLoading } = useSWR("/parties", listPartiesPartiesGet);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <ul>
            {data.parties.map((party) => (
                <li key={party.id}>{party.members.length} - ({party.shorthand}) {party.name} - {party.leader.name}</li>
            ))}
        </ul>
    );
}


export default function Home() {
  return (
    <div>
        <p className="text-2xl">Craftocracy Demo</p>
    </div>
  );
}
