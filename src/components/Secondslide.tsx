import Slide from "../assets/secondimage.jpg";

const Secondslide = () => {
  return (
    <section className="w-full bg-grey-300 px-4 py-12 flex justify-center">
      <div className="max-w-6xl w-full">

      
        <h1 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-10">
         Our Expertise
        </h1>

       
        <div className="flex flex-col md:flex-row items-center gap-8">

          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md border border-gray-600 rounded-lg overflow-hidden">
              <img
                src={Slide}
                alt="What we do"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

         
          <div className="w-full md:w-1/2 max-w-md text-center md:text-left text-white">
            <h2 className="text-2xl font-semibold mb-4">
              THIS IS WHAT WE DO
            </h2>

            <p className="leading-relaxed text-gray-200">
              We supply and install Swedish-made platform home lifts from
              Cibes AG and MRL lifts from Italy, backed with first-class
              after-sales maintenance services, all conforming to EU
              quality standards and specifications.
              <br /><br />
              With lifting technology based on an electrically powered
              screw drive, our shaft designs are elegant and adaptable and
              can be supplied as standalone lifts or fitted into existing
              building shafts.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Secondslide;
