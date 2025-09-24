import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <header className="mb-12 flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/splash-icon-bJ5SzzM4ntQKhvpsQFJCQwa3fGxPwl.png"
            alt="Follo Logo"
            width={40}
            height={40}
            className="dark:hidden mr-3"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-2MmN8MwI8ufmYqNvzJfBzEhqnRee94.png"
            alt="Follo Logo"
            width={40}
            height={40}
            className="hidden dark:block mr-3"
          />
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Follo</h1>
        </header>

        <main className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mt-0 mb-6">Follo - Your Spiritual Journey Companion</h1>

          <h2 className="text-xl font-semibold mt-10 mb-4">Enrich Your Faith Journey</h2>
          <p>
            Follo helps you build meaningful spiritual rhythms and daily practices that deepen your relationship with
            God. With our beautifully designed interface and thoughtful features, staying consistent with your spiritual
            practices has never been easier.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-4">Key Features</h2>

          <h3 className="text-lg font-medium mt-6 mb-2">📖 Immersive Bible Reading</h3>
          <ul>
            <li>
              <strong>Two Reading Experiences</strong>
              <ul>
                <li>Verse-by-verse study for deep reflection</li>
                <li>Continuous reading mode for immersive scripture engagement</li>
              </ul>
            </li>
            <li>
              <strong>ESV Bible Integration</strong> for accurate, readable scripture
            </li>
            <li>
              <strong>Progress Tracking</strong> to help you stay consistent
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">🎯 Spiritual Practice Tracking</h3>
          <ul>
            <li>Build and maintain your Rule of Life</li>
            <li>Track daily, weekly, and monthly spiritual rhythms</li>
            <li>Monitor your consistency and growth</li>
            <li>Set personalized reminders for your practices</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">📅 Reading Plans</h3>
          <ul>
            <li>Structured reading schedules</li>
            <li>Track your progress</li>
            <li>Multiple completion tracking</li>
            <li>Stay motivated with progress statistics</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">🌓 Beautiful Design</h3>
          <ul>
            <li>Clean, modern interface</li>
            <li>Dark and light themes</li>
            <li>Thoughtfully designed for focus</li>
            <li>Distraction-free reading experience</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">Your Spiritual Growth Journey</h2>
          <p>Follo is more than just a Bible app - it's your companion for spiritual growth. Whether you're:</p>
          <ul>
            <li>Starting a new daily reading habit</li>
            <li>Deepening your existing spiritual practices</li>
            <li>Looking for structure in your devotional time</li>
            <li>Wanting to track your spiritual journey</li>
          </ul>
          <p>Follo provides the tools and support you need to stay consistent and grow in your faith.</p>

          <h2 className="text-xl font-semibold mt-10 mb-4">Privacy & Trust</h2>
          <p>Your spiritual journey is personal. That's why Follo:</p>
          <ul>
            <li>Keeps your data private and secure</li>
            <li>Works offline for uninterrupted access</li>
            <li>Never shares your personal information</li>
            <li>Provides transparent privacy policies</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-4">Download</h2>
          <p>Coming soon to the App Store!</p>

          <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            <em>FOLLO helps you build spiritual rhythms and daily practices to enrich your faith journey.</em>
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
