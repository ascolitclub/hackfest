import Link from "next/link";
import { CrossLines } from "../Lines/CrossLines";
import { CurvedLine } from "../Doodles/CurvedLine";
import { Pointer } from "../Doodles/Pointer";
import Image from "next/image";

export function CommunitySection() {
  return (
    <section className="relative py-16 md:py-36">
      <CrossLines />

      <div className="mx-auto max-w-5xl px-6">
        <div className="relative text-center">
          <h2 className="text-3xl font-semibold">
            Built by the Community <br /> for the Community
          </h2>
          <p className="mt-6">
            Harum quae dolore orrupti aut temporibus ariatur.
          </p>

          <CurvedLine
            className="text-primary hidden lg:block absolute top-[120px] right-[500px]"
            size={120}
          />

          <Pointer
            className="dark:text-white text-muted-foreground hidden lg:block absolute top-[120px] left-[500px]"
            size={120}
          />
        </div>
        <div className="mx-auto mt-12 flex max-w-lg flex-wrap justify-center gap-3">
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              src="/1.jpg"
              loading="lazy"
              width={120}
              height={120}
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              src="/1.jpg"
              loading="lazy"
              width={120}
              height={120}
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              src="/1.jpg"
              loading="lazy"
              width={120}
              height={120}
            />
          </Link>
          <Link
            target="_blank"
            href="/"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              src="/1.jpg"
              loading="lazy"
              width={120}
              height={120}
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              src="/1.jpg"
              loading="lazy"
              width={120}
              height={120}
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              src="/1.jpg"
              loading="lazy"
              width={120}
              height={120}
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              loading="lazy"
              src="/1.jpg"
              width={120}
              height={120}
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              loading="lazy"
              src="/1.jpg"
              width={120}
              height={120}
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              loading="lazy"
              src="/1.jpg"
              width={120}
              height={120}
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              loading="lazy"
              src="/1.jpg"
              width={120}
              height={120}
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="Méschac Irung"
            className="size-16 rounded-full border *:size-full *:rounded-full *:object-cover"
          >
            <Image
              alt="John Doe"
              loading="lazy"
              src="/1.jpg"
              width={120}
              height={120}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
