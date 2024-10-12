

const BookSection = () => {
  return (
    <section className="h-[618px] bg-[#AFCDE5] flex flex-col items-center justify-center ">
      <h1 className="font-semibold text-4xl md:text-6xl text-center text-[#203C79] mb-8">
        Ready to get your home <br /> in shape?
      </h1>
      <h3 className="text-lg md:text-2xl font-semibold text-center text-[black] max-w-3xl mb-8">
        At [Handy Man], we believe in making home improvement and repairs stress-free and reliable.
        Our team of experienced and certified handymen is dedicated to providing top-notch services
        that you can trust. We’ve got the skills to get the job done right the first time.
      </h3>
      <button className="mt-4 text-white bg-[#0E3995] py-4 px-8 rounded-3xl">
        Book Now
      </button>
    </section>
  );
};

export default BookSection;
