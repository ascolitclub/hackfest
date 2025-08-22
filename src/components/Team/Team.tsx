/* eslint-disable @next/next/no-img-element */

import { CrossLines } from "../Lines/CrossLines";

const members = [
  {
    name: "Dr. Vijay Kumar Jha",
    role: "Asst. Campus Chief, ASCOL",
    avatar: "/Vijay.jpg",
    link: "#",
  },
  {
    name: "Rabindra S.Mahat",
    role: "Student Welfare, ASCOL",
    avatar: "/Rabindra.jpeg",
    link: "#",
  },
  {
    name: "Akkal Bista",
    role: "Head Techincal Assistant-IT, TU",
    avatar: "/Akkal.jpeg",
    link: "#",
  },
  {
    name: "Bibek Koirala",
    role: "Treasurer, FSU",
    avatar: "/Bibek.jpg",
    link: "#",
  },
  {
    name: "Sadhana Sigdel",
    role: "Member, FSU",
    avatar: "/Sadhana.jpg",
    link: "#",
  },
  {
    name: "Sijan Panta",
    role: "Member, FSU",
    avatar: "/Sijan.jpg",
    link: "#",
  },
  {
    name: "Sandesh Khadka",
    role: "President, Ascol It Club",
    avatar: "/Sandesh.jpg",
    link: "#",
  },
  {
    name: "Rishab Khakurel",
    role: "PR-Manager, Ascol It Club",
    avatar: "/Rishab.jpg",
    link: "#",
  },
  {
    name: "Kushal Dhakal",
    role: "Treasurer, Ascol It Club",
    avatar: "/Kushal.png",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-16 md:py-32 dark:bg-transparent">
      <CrossLines />
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-primary rounded-lg text-white font-medium px-6">
          Team
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our Organizing Committee
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              This event is made possible by the tireless efforts of our
              organizing committee, a diverse group united by the purpose of
              creating the best possible experience for every participant.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    {/* <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {" "}
                      Linktree
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
