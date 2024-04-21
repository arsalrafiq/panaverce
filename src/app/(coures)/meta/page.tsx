
import Link from "next/link"
import CourseDescription from "../course/page"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-950 text-white">
      <div className="container p-8 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h4 className="text-xl font-bold tracking-tighter text-teal-500">
            Specialized Track
          </h4>
          <h2 className="text-5xl font-semibold">Web 3.0 (Blockchain) and Metaverse Specialization</h2>
          <p className="text-gray-300 md:text-xl">
            Dive deep into the world of Web 3.0 and the Metaverse with our specialized track. Learn about blockchain
            technology, decentralized applications, and the future of the internet.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-teal-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-teal-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Enroll Now
          </Link>
        </div>
         <img
          alt="Specialized Track"
          className="mx-auto rounded-xl"
          src="/meta.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CourseDescription/>
    </section>
  )
}

