'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">😢 Something went wrong</h2>
        <p className="text-gray-700 mb-6">
          We are sorry, but an unexpected error has occurred.
        </p>
        <button
          onClick={() => reset()}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition duration-200"
        >
          🔄 Try Again
        </button>
      </div>
    </div>
  )
}
