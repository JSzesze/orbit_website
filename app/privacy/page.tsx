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

        <p className="text-sm text-zinc-500 dark:text-zinc-400">Last Updated: May 19, 2025</p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Introduction</h2>
        <p>
          Welcome to Follo ("we," "our," or "us"). This Privacy Policy applies to the Follo mobile app and our website,
          findmyflo.com, operated by Follo Dev, located at [Your Address]. We are committed to protecting your privacy
          and ensuring a positive experience.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Summary</h2>
        <p>
          We collect minimal data: a unique identifier from Google Sign-In to sync preferences and settings across
          devices. We do not collect other personal data, use analytics, or share data with third parties except for
          Google authentication.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Information We Collect</h2>
        <p>We collect only the data necessary for our services:</p>
        <ul>
          <li>
            <strong>Identifiers:</strong> A unique identifier from Google Sign-In to recognize you across
            sessions/devices. We do not receive your Google password.
          </li>
          <li>
            <strong>User Content:</strong> App preferences, Bible reading progress, and spiritual practice data (e.g.,
            prayer tracking) for a consistent experience.
          </li>
          <li>
            <strong>No Device/Usage Data:</strong> We collect no device information, usage data, or analytics. Sign-in
            is required to use Follo.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">How We Use Your Information</h2>
        <p>We use your data only to:</p>
        <ul>
          <li>Authenticate your session via Google Sign-In.</li>
          <li>Sync preferences and settings (e.g., prayer, Bible reading progress) across devices.</li>
          <li>Track spiritual practices for app functionality.</li>
          <li>Improve app performance and user experience.</li>
          <li>We do not use your data for marketing, advertising, or other purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">Data Storage and Security</h2>
        <p>
          Your data is stored securely, accessible only through your Google account. We use AES-256 encryption and
          secure access controls. Most data is stored locally on your device; cloud data (preferences/settings) is
          stored on Google's secure servers (see Google's privacy policy for locations). We retain data until you delete
          your account.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Third-Party Services</h2>
        <p>
          We use only Google Sign-In, which receives a unique identifier for authentication. No other personal data is
          shared with Google. We use no other third-party services, including analytics or advertising. See{" "}
          <Link href="https://policies.google.com/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
            Google's privacy policy
          </Link>
          .
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Offline Usage</h2>
        <p>
          Follo works fully offline, storing Bible reading and spiritual practice data locally, accessible only to you.
          Once you sign in with Google, you can sync your data when back online.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>
            Access or delete your data via Settings &gt; Account or email{" "}
            <a href="mailto:jason@follo.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
              jason@follo.dev
            </a>
            .
          </li>
          <li>Request data portability or object to processing (GDPR users).</li>
          <li>We respond to requests within 30 days.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">Children's Privacy</h2>
        <p>
          Follo is designed for users 13 and older. Users under 16 require parental consent (GDPR regions). We do not
          knowingly collect data from children under 13. If you believe your child has provided data, email{" "}
          <a href="mailto:jason@follo.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
            jason@follo.dev
          </a>{" "}
          for deletion.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update this policy, notifying users of material changes via the app or email. Changes take effect 7
          days after posting.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p>
          For questions, contact us at{" "}
          <a href="mailto:jason@follo.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
            jason@follo.dev
          </a>{" "}
          or Follo Dev, [Your Address]. We respond within 5 business days.
        </p>
      </main>
    </div>
  )
}
