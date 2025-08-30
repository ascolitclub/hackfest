import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import { div } from "motion/react-client";
import { button } from "motion/react-m";

// import { TextEffect } from "@/components/motion";
// import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

export function HeroSection() {
  return (
    <>
      <main id="hero" className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <Image
            src="/hackfest-main-img.jpg"
            alt="background"
            className="absolute inset-x-0 md:top-56 -z-20 lg:top-32 block"
            width="3276"
            decoding="async"
            loading="eager"
            height="4500"
          />
          <div className="relative pt-24 md:pt-36">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <Link
                  target="blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeWfX81syG9qM2ITpHlgLVZQJNELwFqZO077QGz0VTun6V7cA/viewform"
                  className=" bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                >
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      <span className="text-foreground text-sm mr-2">
                        Register Now
                      </span>
                      <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                      <div className="bg-background group-hover:bg-muted ml-2 size-6 overflow-hidden rounded-full duration-500">
                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                          <span className="flex size-6">
                            <ArrowRight className="m-auto size-3" />
                          </span>
                          <span className="flex size-6">
                            <ArrowRight className="m-auto size-3" />
                          </span>
                        </div>
                      </div>
                    </span>
                  </button>
                </Link>

                <h1 className="mt-8 text-balance text-2xl md:text-4xl lg:mt-16">
                  Ascol Campus Presents
                </h1>
                <p className="mt-8 text-balance text-3xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                  ASCOL HACKFEST 2025
                </p>

                {/* <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <div
                    key={1}
                    className="rounded-[calc(var(--radius-xl)+0.125rem)] p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Register Now</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="secondary"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <a
                      href="https://www.ascolitclub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-nowrap">About Ascol IT Club</span>
                    </a>
                  </Button>
                </div> */}
              </div>
            </div>

            {/* <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            > */}
            <div className="relative w-[100%] -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <Image
                  className="bg-background rounded-2xl dark:block"
                  src="/ascolitclub.jpg"
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
