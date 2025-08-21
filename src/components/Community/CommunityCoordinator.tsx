import { CrossLines } from "../Lines/CrossLines";

export function HackFestCommunityCoordinator() {
  return (
    <section id="about" className="relative py-16 md:py-32">
      <CrossLines />
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Ascol Hackfest 2025: Innovate, Collaborate, Create
          </h2>
          <p>
            Whether you&apos;re a seasoned developer, a curious designer, or a
            tech enthusiast looking to learn, our hackathon is the perfect
            environment to turn your ideas into reality.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p>
              You&apos;ll have access to expert mentors, workshops on
              cutting-edge technologies, and a vibrant community of fellow
              hackers.
            </p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +250
                </div>
                <p>Applicants</p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +20
                </div>
                <p>Districts</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <p>
                &quot;The ASCOL HACKFEST is a true showcase of our community&apos;s
                innovative spirit. I am consistently amazed by the creativity
                and skill of our participants and am confident that their
                projects will make a lasting impact. This event is a powerful
                demonstration of how collaboration can drive real change.&quot;
              </p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium">Sandesh Khadka, President</cite>
                {/* <img
                  className="h-5 w-fit dark:invert"
                  src=""
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                /> */}
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
