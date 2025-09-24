import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <header className="mb-12 flex flex-col items-start gap-6">
          <Image
            src="/icon.png"
            alt="Orbit icon"
            width={96}
            height={97}
            priority
            className="h-16 w-16 rounded-2xl bg-zinc-100 p-3 shadow-sm ring-1 ring-zinc-200/60 dark:bg-zinc-800 dark:ring-zinc-700/60"
          />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Orbit</p>
          <h1 className="mt-3 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Intentional connection within your God-given sphere of influence
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Relationships move closer and farther just like objects in orbit. Orbit keeps the people God has entrusted to
            you within view so that distance never turns into disconnection.
          </p>
        </header>

        <main className="prose prose-zinc dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold mt-10 mb-4">Live aware of your orbit</h2>
          <p>
            Orbit gathers the conversations, commitments, and rhythms that matter so you can respond with intentionality
            instead of hurry.
          </p>
          <ul>
            <li>
              <strong>Weekly check-in planner</strong> — Schedule meaningful touchpoints, whether you are meeting in
              person or reaching out virtually, and keep them all visible in one place.
            </li>
            <li>
              <strong>Faithful progress tracking</strong> — Weekly goals and the Orbit check-in bar reveal who you have
              connected with and who might need a nudge this week.
            </li>
            <li>
              <strong>Quick actions for everyday ministry</strong> — Import your contacts, assign roles, and start an
              intentional follow-up with just a tap.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">Hold space for their stories</h2>
          <p>
            Every relationship carries moments, prayers, and promises worth remembering. Orbit helps you treasure them so
            you can show up prepared and present.
          </p>
          <ul>
            <li>
              <strong>Context-rich notes</strong> — Capture what God is doing in each person’s life, record prayer
              requests, and log the details that spark deeper conversation.
            </li>
            <li>
              <strong>Follow-up cues</strong> — Track the commitments you have made so nothing slips through the cracks
              after a great conversation.
            </li>
            <li>
              <strong>History at a glance</strong> — Review past check-ins to celebrate growth and discern the next faithful
              step together.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">Stay rooted in calling</h2>
          <p>
            Orbit is built on the belief that God has placed you in a particular sphere of influence on purpose. By
            noticing who is near and who is drifting, you can prayerfully decide how to invest your limited time and
            energy.
          </p>
          <p>
            Use Orbit to cultivate rhythms of presence, prayer, and care—no matter how far you are from the people you love
            in this season.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">What’s next</h2>
          <p>
            Orbit is actively being shaped by pastors, ministry leaders, missionaries, and neighbors who want to steward the
            relationships around them. Join the journey and help us build the tools that keep your orbit connected.
          </p>

          <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            <em>Orbit helps you honor the relationships God has placed within your sphere of influence—intentionally,
              prayerfully, and consistently.</em>
          </p>

          <p className="text-sm">
            <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              Privacy Policy <ChevronRight className="h-3 w-3 ml-1" />
            </Link>
          </p>
        </main>
      </div>
    </div>
  )
}
