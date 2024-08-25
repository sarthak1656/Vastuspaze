import aboutImage from "../assets/about.webp";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
        About
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20 ">
        <div className="mb-8 lg:mb-0">
          <img
            src={aboutImage}
            alt="About Vastuspaze"
            className="w-full h-auto"
          />

          <p className="text-lg lg:text-2xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
            Welcome to Vastuspaze, your ultimate destination for transforming
            your living spaces into havens of comfort, style, and positive
            energy.Whether you're looking to revamp a single room or undertake a
            full-scale home renovation, our team of skilled professionals is
            committed to delivering results that not only meet your aesthetic
            desires but also harmonize your living environment. With Vastuspaze,
            experience the perfect balance of beauty, functionality, and
            serenity in every corner of your home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
