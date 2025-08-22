import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { CrossLines } from "../Lines/CrossLines";

export default function Testimonials() {
  return (
    <section id="testimonial" className="relative py-16 md:py-32">
      <CrossLines />
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            ASCOL Hackfest 2024 TESTIMONIAL
          </h2>
          <p>
            ASCOL Hackfest 2024 brought together innovators, developers, and
            dreamers to solve real-world challenges through creativity and
            technology.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="shadow-none grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
             
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  “ASCOL Hackfest gave me the chance to collaborate with
                  brilliant minds and turn an idea into a real solution. The
                  energy, the mentorship, and the community spirit made it an
                  unforgettable experience.”
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/1.jpg"
                      alt="."
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>RN</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">
                      Rupesh Neupane
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Software Engineer
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 shadow-none">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  “It’s more than just coding. Hackfest taught me teamwork, problem-solving under pressure, and how to think outside the box. Highly recommend it to every student!”
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src=""
                      alt="Jonathan Yombo"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>BC</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Bikash Chhetri</cite>
                    <span className="text-muted-foreground block text-sm">
                      Software Engineer
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                 “Hackfest was the platform where I pushed my limits. From brainstorming to pitching, every moment was a lesson in innovation.”
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src=""
                      alt="Yucel Faruksahan"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>SG</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">
                     Sandip Gyawali
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Creator, Flutter Developer
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed shadow-none">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                 “Being part of Hackfest means being part of a family of change-makers. The network and skills I gained still help me today.”
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src=""
                      alt="Rodrigo Aguilar"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>NK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Nidina Koirala</p>
                    <span className="text-muted-foreground block text-sm">
                      Creator, TailwindAwesome
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
