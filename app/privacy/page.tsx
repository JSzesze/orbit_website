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

        <p className="text-sm text-zinc-500 dark:text-zinc-400">Last Updated: September 23, 2025</p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Introduction</h2>
        <p>
          Welcome to Orbit. This Privacy Policy applies to the Orbit iOS mobile app and describes how we handle
          information when you use our app. We are committed to protecting your privacy and ensuring a transparent
          experience.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Summary</h2>
        <p>
          Orbit is a simple iOS app that does not collect personal data, use analytics, require login, or store any
          information about users. All data remains on your device and is not transmitted to our servers.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Information We Collect</h2>
        <p>We do not collect any personal information from users of the Orbit app.</p>
        <ul>
          <li>
            <strong>No Personal Data:</strong> We do not collect names, email addresses, or any other personal
            information.
          </li>
          <li>
            <strong>No Analytics:</strong> We do not use tracking tools, analytics, or crash reporting to monitor your
            app usage.
          </li>
          <li>
            <strong>No Login Required:</strong> The app does not require registration, login, or account creation to
            access any features.
          </li>
          <li>
            <strong>No Data Transmission:</strong> No data is sent from your device to our servers or any third-party
            services.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">How We Use Your Information</h2>
        <p>
          Since we do not collect any personal information, there is no data to use. The Orbit app functions entirely
          locally on your device without requiring any user data.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Data Storage and Security</h2>
        <p>
          All data remains stored locally on your iOS device. We do not have access to any data stored on your device.
          The app uses standard iOS security features to protect any local data. We do not maintain any servers or
          databases that store user information.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Third-Party Services</h2>
        <p>
          The Orbit app does not integrate with any third-party services that would collect or process your personal
          data. We do not use analytics, advertising networks, or any external data processing services.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">App Permissions</h2>
        <p>
          The Orbit app requests minimal permissions necessary for basic functionality. We do not request access to
          your contacts, location, camera, microphone, or other sensitive data. Any permissions granted are used
          solely for the app's core features and are not shared with third parties.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Your Rights</h2>
        <p>
          Since we do not collect any personal data, there is no data to access, modify, or delete. You have complete
          control over your app experience and any data stored locally on your device.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Children's Privacy</h2>
        <p>
          The Orbit app is safe for users of all ages. Since we do not collect any personal information, there are no
          special considerations for children's privacy. The app does not require parental consent for any features.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update this policy from time to time. Any changes will be posted on this page with an updated
          "Last Updated" date. Since we do not collect contact information, we cannot notify you directly of changes.
          We recommend checking this page periodically for updates.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or the Orbit app, please contact us through the
          information provided on our main page. We respond to inquiries as quickly as possible.
        </p>
      </main>
    </div>
  )
}
