import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

type ExperienceDetail = {
  position: string;
  prevPositions?: string[];
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  link?: string;
};

type ExperienceProps = {
  experienceDetails: ExperienceDetail[];
};

function ExperienceItem(props: ExperienceDetail) {
  return (
    // TODO need to work on the hover border/shadow
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Card
        className="flex flex-col lg:flex-row w-full min-h-fit border-transparent gap-0 mb-4 px-2 lg:gap-3
    hover:border-cardhover-border hover:bg-cardhover-background hover:shadow-[inset_0_1px_0_0] hover:shadow-cardhover-shadow hover:drop-shadow-lg"
      >
        <CardHeader className="h-full w-1/2 p-0 lg:p-1">
          <CardTitle className="whitespace-normal">
            {props.startDate} - {props.endDate}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col w-full p-0">
          <p className="text-foreground text-base">
            {props.position} • {props.company}
          </p>
          {props.prevPositions?.map((position, index) => (
            <p key={index} className="text-sm">
              {position}
            </p>
          ))}
          <CardDescription className="py-2 text-muted-foreground">
            {props.description}
          </CardDescription>
          <CardFooter className="px-0 pb-2 flex flex-wrap gap-2">
            {props.skills.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </CardFooter>
        </CardContent>
      </Card>
    </a>
  );
}

const Experience: FC<ExperienceProps> = ({ experienceDetails }) => {
  const experience = experienceDetails.map((item, index) => {
    return (
      <ExperienceItem
        key={index}
        position={item.position}
        prevPositions={item.prevPositions}
        company={item.company}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        skills={item.skills}
        link={item.link}
      ></ExperienceItem>
    );
  });

  return (
    <section id="experience" className="">
      {experience}
    </section>
  );
};

export default Experience;
