import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 ">
      <div className="flex flex-col items-center my-20">
        <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
          {HERO_CONTENT.title}
        </h1>
        <p className="lg:mt-6 text-xl ml-3 mb-4 font-medium tracking-tight">
            {HERO_CONTENT.subtitle}
        </p>
        <img src={HERO_CONTENT.image} alt="image" className="w-full h-[65vh] rounded-2xl p-2 object-cover" />
      </div>
    </section>
  );
};

export default Hero;
