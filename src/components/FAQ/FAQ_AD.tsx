"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import { CrossLines } from "../Lines/CrossLines";

export default function FAQ_AD() {
  const faqItems: {
    key: string;
    question: string;
    answer: string;
    icon: React.ReactNode;
    image: string;
    alt: string;
  }[] = [
    {
      key: "item-1",
      question: "What is Ascol Hackfest?",
      answer:
        "Ascol Hackfest is a student-led tech innovation event organized by the IT Club of Ascol Campus. It's a 24-48 hour hackathon where students from various colleges come together to brainstorm, design, and build creative solutions to real-world problems using technology. The event fosters learning, collaboration, and problem-solving skills among participants while being mentored by industry professionals and evaluated by expert judges.",
      icon: <Database className="size-4" />,
      image: "/team-2024.jpg",
      alt: "Hackfest overview illustration",
    },
    {
      key: "item-2",
      question: "Who can participate?",
      answer:
        "Ascol Hackfest is open to all students, developers, designers, and tech enthusiasts regardless of their academic background or skill level. Whether you're a beginner looking to learn or an experienced coder aiming to compete, you're welcome! Participants can register as teams or individuals, and we’ll help solo participants find a team if needed.",
      icon: <Fingerprint className="size-4" />,
      image: "/ascolhackfest.jpg",
      alt: "Participants discussion illustration",
    },
    {
      key: "item-3",
      question: "Is there a registration fee?",
      answer:
        "No, participation in Ascol Hackfest is absolutely free. The event is funded through sponsorships and organized by passionate volunteers, so you don’t have to worry about any hidden costs. All you need is enthusiasm, a laptop, and a drive to innovate!",
      icon: <IdCard className="size-4" />,
      image: "/hackfest-registration-2025.jpg",
      alt: "Free registration image",
    },
    {
      key: "item-4",
      question: "What do winners get?",
      answer:
        "Winners receive exciting tech gadgets, cash prizes, certificates, and goodies from our sponsors. Beyond material rewards, winners also get networking opportunities, mentorship access, and potential internship or job offers from partner organizations. It's a great platform to get noticed by the tech community.",
      icon: <ChartBarIncreasingIcon className="size-4" />,
      image: "/hackfest-hero.jpg",
      alt: "Based on hackfest organized previously here are the pricing.",
    },
  ];

  const [activeItem, setActiveItem] = useState<string>(faqItems[0].key);

  const activeImage = faqItems.find((item) => item.key === activeItem);

  return (
    <section id="faqs" className="relative py-12 md:py-20 lg:py-32">
      <CrossLines />
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p>
            Got questions about Ascol Hackfest? We&apos;ve got answers to help you
            get started.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value)}
            className="w-full"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.key} value={item.key}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    {item.icon}
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  {activeImage && (
                    <Image
                      src={activeImage.image}
                      className="size-full object-cover object-left-top dark:mix-blend-lighten"
                      alt={activeImage.alt}
                      width={1207}
                      height={929}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
