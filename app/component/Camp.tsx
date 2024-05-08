type campSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoin:string
};
const CampSite = ({ backgroundImage, title, subtitle, peopleJoin }: campSiteProps) => {
  return <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}>
    <div></div>
  </div>;
};

const Camp = () => {
  return (
    <section className=" relative flex flex-col 2xl: max-container padding-container py-10 xl:mb-20 lg:py-20 lg:mb-10  border border-cyan-800 ">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[300px] xl:h-[540px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Cherry Bay Camp"
          subtitle="prigen , Pasuruan"
          peopleJoin="50+ Joined"
        />
        <CampSite />
      </div>
    </section>
  );
}

export default Camp