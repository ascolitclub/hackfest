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
           Meet The Team Responsible
          </p>

          <CurvedLine
            className="text-primary hidden lg:block absolute top-[120px] right-[10px]"
            size={120}
          />

          <Pointer
            className="dark:text-white text-muted-foreground hidden lg:block absolute top-[120px] left-[10px]"
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
              src="/Aayusha.jpeg"
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
              src="/Ajita.jpg"
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
              src="/Rashmi.jpg"
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
              src="/Ritika.jpg"
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
              src="/Roshan.jpg"
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
              src="/Saroj.jpg"
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
              src="/Shreejit.jpg"
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
              src="/Susma.jpg"
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
              src="/Unique.JPG"
              width={120}
              height={120}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
