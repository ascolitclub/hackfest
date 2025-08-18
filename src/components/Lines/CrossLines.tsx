function CrossLines() {
  return (
    <>
      {/* Lines */}
      <div className="absolute left-0 right-0 top-[34px] z-10 h-px w-full dark:bg-zinc-600 bg-neutral-300 md:top-[48px]"></div>
      <div className="absolute bottom-0 right-[34px] top-0 z-10 h-full w-px dark:bg-zinc-600 bg-neutral-300 md:right-[48px]"></div>
      <div className="absolute bottom-[34px] left-0 right-0 z-10 h-px w-full dark:bg-zinc-600 bg-neutral-300 md:bottom-[48px]"></div>
      <div className="absolute bottom-0 left-[34px] top-0 z-10 h-full w-px dark:bg-zinc-600 bg-neutral-300 md:left-[48px]"></div>

      {/* Top Right Cross */}
      <div className="absolute right-[43.5px] top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute right-[48px] top-[43.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Top Left Cross */}
      <div className="absolute left-[42.5px] right-0 top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute left-[48px] right-0 top-[42.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Left Cross */}
      <div className="absolute bottom-[48px] left-[42.5px] right-0 z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[42.5px] left-[48px] right-0 z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Right Cross */}
      <div className="absolute bottom-[48px] right-[43.5px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[43.5px] right-[48px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* lines end */}
    </>
  );
}

export { CrossLines };
