import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-8"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>

      <main className="prose prose-zinc dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mt-0 mb-6">Privacy Policy</h1>

        <p className="text-sm text-zinc-500 dark:text-zinc-400">Last Updated: January 7, 2026</p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Introduction</h2>
        <p>
          Welcome to Orbit. This Privacy Policy applies to the Orbit iOS mobile app and describes how we handle
          information when you use our app. We are committed to protecting your privacy and ensuring a transparent
          experience.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Summary</h2>
        <p>
          Orbit is an iOS app that helps you manage personal relationships. You may optionally sign in with Apple to enable cloud backup. When you do, your data (contacts, events, goals, notes, and settings) is stored securely on our servers. Without sign-in, all data remains on your device only.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Information We Collect</h2>
        <ul>
          <li>
            <strong>Apple Sign-In:</strong> When you sign in with Apple, we receive your Apple User ID and optionally your name and email (if you choose to share them).
          </li>
          <li>
            <strong>Contact Information:</strong> You may import contacts from your device. This data is stored locally and, if you enable backup, uploaded to our secure cloud servers.
          </li>
          <li>
            <strong>App Data:</strong> Events, notes, goals, and settings you create are stored locally on your device and, with your consent, backed up to our servers.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">How We Use Your Information</h2>
        <p>
          Your data is used solely to provide app functionality and cloud backup/sync. We do not sell, share, or use your data for advertising or analytics purposes.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Data Storage and Security</h2>
        <p>
          Local data is stored on your iOS device using standard security features. Cloud backups are stored securely on Convex servers. You can delete your account and all cloud data at any time from within the app.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">App Permissions</h2>
        <p>
          Orbit may request access to your <strong>Contacts</strong> (to import contact information) and <strong>Calendar</strong> (to sync events). These permissions are optional and used only for their stated purpose.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Your Rights</h2>
        <p>
          You can delete your account and all associated data at any time from the app settings (My Card → Edit Profile → Delete Account). This permanently removes all your data from our servers.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or the Orbit app, please contact us at{" "}
            <a href="mailto:jason@follo.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
            jason@follo.dev
          </a>
          . We respond to inquiries as quickly as possible.
        </p>
      </main>
    </div>
  )
}
