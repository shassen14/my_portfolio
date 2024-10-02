// TODO: Make lefside type and accept props
// TODO: if mobile, change header and to not include menu so it's just a scroll thru
// so need to figure out the tailwind
import Menu from "./Menu";
import Contacts from "./Contacts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PageDetailsFile from "@p/configs/page_details.json";

const LeftSide = () => {
  return (
    <section className="lg:flex lg:flex-col lg:sticky lg:top-0 lg:py-24 lg:gap-4 lg:max-h-96 lg:w-1/2 lg:justify-between">
      <div className="flex flex-col gap-4 lg:pr-24">
        <Avatar className="w-24 lg:w-48 h-auto">
          <AvatarImage src="/images/profile.jpg" />
          <AvatarFallback className="w-24 h-24 lg:w-48 lg:h-48">
            SH
          </AvatarFallback>
        </Avatar>
        <h1 className="text-4xl">Howdy, Samir here</h1>
        <h2 className="text-xl">Software Engineer</h2>
        <p className="text-lg text-muted-foreground">
          I like to build autonomous systems
        </p>
      </div>
      <Menu MenuDetails={PageDetailsFile.menu}></Menu>
      <Contacts></Contacts>
    </section>
  );
};

export default LeftSide;
