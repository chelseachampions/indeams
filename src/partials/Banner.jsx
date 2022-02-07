/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Banner() {
  return (
    <div className="bg-indigo-600">
      <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-1 w-0">
            <span className="flex p-2 bg-indigo-800 rounded-lg">
              <SpeakerphoneIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">A high-level concept page, it does not exist.</span>
              <span className="hidden md:inline">We're very early in our venture journey. This is just a high-level concept page, it does not exist.</span>
            </p>
          </div>
        
          <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="flex p-2 -mr-1 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}