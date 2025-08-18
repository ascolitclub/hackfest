import { CrossLines } from "../Lines/CrossLines";

export function HackFestCommunityCoordinator() {
  return (
    <section className="relative py-16 md:py-32">
      <CrossLines />
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing..
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
            <span className="font-medium">Lorem ipsum dolor sit amet.</span> —
            Lorem, ipsum dolor.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              eum soluta nostrum repellat, eligendi quis.
            </p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +1200
                </div>
                <p>Stars on GitHub</p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +500
                </div>
                <p>Powered Apps</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur velit beatae quo odit? Dolore aliquid nostrum
                voluptatem provident. Eaque in facilis accusantium laboriosam
                ullam? Harum optio consectetur distinctio voluptates accusamus?
              </p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium">John Doe, CEO</cite>
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
