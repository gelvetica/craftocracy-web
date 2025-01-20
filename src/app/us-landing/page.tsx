import Link from "next/link";

export default function FakeTikTokPage() {
    return ( <div className="2xl:mx-96 xl:mx-48">
    <div className="text-2xl font-bold">Sorry, Craftocracy isn’t available right now.</div>
        <div className="mt-6 font-normal">
        <p className="mb-5 text-subtext1">A law banning Craftocracy has been enacted in the U.S. Unfortunately, that means you can’t use Craftocracy for now.</p>
        <p className="mb-5 text-subtext1">We are fortunate that President Trump has indicated that he will work with us on a solution to reinstate Craftocracy once he takes office. Please stay tuned!</p>
        <p className="text-subtext1">In the meantime, you can still <Link className="text-blue" href="/discordauthredir">log in</Link> to download your data.</p>
        </div>
    </div>
    )
}