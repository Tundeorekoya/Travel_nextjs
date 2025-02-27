import { PEOPLE_URL } from "@/constant";
import { url } from "inspector";
import Image from "next/image";

type campSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoin: string;
};
const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoin,
}: campSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-5xl lg:rounded-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-500 p-4">
            <Image src="/folded-map.svg" alt="map" height={28} width={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                width={52}
                height={52}
                alt="person"
                className="inline-block w-10 h-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoin}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className=" relative flex flex-col 2xl: max-container padding-container py-10 xl:mb-20 lg:py-20 lg:mb-10">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[300px] xl:h-[540px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Cherry Bay Camp"
          subtitle="prigen , Pasuruan"
          peopleJoin="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wild"
          peopleJoin="50+ Joined"
        />
      </div>

      <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[700px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h3 className="capitalize text-white regular-24 md:regular-32 2xl:regular-64 ">
            {" "}
            <strong>Feeling Lost</strong> And Knowing The Way?
          </h3>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            Adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
