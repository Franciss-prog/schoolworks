import { FaCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex justify-start items-center min-h-[50vh]">
      <section className="flex gap-4 items-center h-full">
        <div className="relative flex flex-col items-center">
          <FaCircle className="text-2xl" />

          {/* Create a vertical line */}
          <div className="absolute inset-x-1/2 transform -translate-x-1/2 top-6 w-px h-[770px] bg-white" />
        </div>

        <div>
          {/* content */}
          <span className="text-gray-500 text-[80px]">
            // First Generation (1940s-1950s)
          </span>
        </div>
      </section>
    </main>
  );
}
