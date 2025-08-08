'use client'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
          Enter your email to receive a password reset link.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  )
}
