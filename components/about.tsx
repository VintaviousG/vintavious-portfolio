import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

{/* Content */}
<div className="flex-1 md:text-left">
  <Badge variant="secondary" className="mb-4">
    About Me
  </Badge>
  <ProfileImage className="mt-3 mb-8 block md:hidden" />
  <h2 className="text-4xl font-bold mb-4 tracking-tight">
    Passionate about learning, building, and creating web experiences
  </h2>
  <p className="text-muted-foreground mb-6 text-justify">
    I’m Vintavious Gilbert — a dedicated and curious Full Stack Web Developer 
    with a B.S. in Computer Science from Albany State University. 
    I’m passionate about turning ideas into functional, user-friendly applications 
    and continuously improving my skills in modern web technologies. 
    I enjoy working with tools like React, Next.js, and TypeScript, and I’m expanding 
    my knowledge in backend and database development. 
    I’m currently seeking an entry-level opportunity where I can grow, contribute, 
    and build meaningful digital experiences.
  </p>
            <div className="flex flex-wrap gap-4 justify-start">
              
              <Link href="https://github.com/VintaviousG" >
                  <Button className="rounded-full">
      <GithubLogo />
      View Github
    </Button>
              </Link>
    <Button variant="outline" className="rounded-full">
      <Download />
      Download CV
    </Button>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/images/portfolio_photo.jpg" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
