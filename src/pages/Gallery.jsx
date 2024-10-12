import Navbar from '../components/NavBar';
import BookSection from '../components/BookSection';
import Footer from '../components/Footer';
import GalleryCard from '../components/GalleryCard';
const defaultBackground = require('../assets/gallBG.png');

const Gallery = () => {
  let gallery = [
    {
      id: 1,
      image: require('../assets/gallery1.png'),
    },
    {
      id: 2,
      image: require('../assets/gallery1.png'),
    },
    {
      id: 3,
      image: require('../assets/gallery1.png'),
    },
    {
      id: 4,
      image: require('../assets/gallery1.png'),
    }
  ];

  return (
    <section className="w-full">
      {/* Background Section */}
      <div
        style={{ backgroundImage: `url(${defaultBackground})` }}
        className="w-full h-screen p-2 bg-no-repeat bg-cover"
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center text-4xl font-bold">
          <h1 className="text-[black] text-center text-6xl font-bold mt-[180px]">Our Work Speaks for itself</h1>
        </div>
        <div className="text-center">
          <p className="text-xl p-6 my-4">
            Browse through our gallery to see the high-quality home repairs, renovations, and improvements we've completed for satisfied clients. From plumbing fixes to full kitchen remodels, we handle every job with precision and care.
          </p>

          <button className="py-4 px-8 bg-[#0E3995] text-white border-2 border-[#0E3995] rounded-3xl mt-10">
            Request a Service
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full px-6 bg-[#AFCDE57D]">
        <h1 className="text-3xl text-[#0E3995] font-semibold">General Repairs</h1>
        <div className="grid w-full grid-cols-4 gap-10 py-8">
          {gallery.map((service) => (
            <GalleryCard key={service.id} gallery={service} />
          ))}
        </div>

        <h1 className="text-3xl text-[#0E3995] font-semibold">Home Maintenance</h1>
        <div className="grid w-full grid-cols-4 gap-10 py-8">
          {gallery.map((service) => (
            <GalleryCard key={service.id} gallery={service} />
          ))}
        </div>

        <h1 className="text-3xl text-[#0E3995] font-semibold">Outdoor Services</h1>
        <div className="grid w-full grid-cols-4 gap-10 py-8">
          {gallery.map((service) => (
            <GalleryCard key={service.id} gallery={service} />
          ))}
        </div>
      </div>

      {/* Book Section and Footer */}
      <div className="w-full">
        <BookSection />
        <Footer />
      </div>
    </section>
  );
};

export default Gallery;
