import Navbar from '../components/NavBar';
import BookSection from '../components/BookSection';
import Footer from '../components/Footer';
import GalleryCard from '../components/GalleryCard';
const defaultBackground = require('../assets/blogBG.png');
const Blog1 = require('../assets/blog1.png');
const Blog2 = require('../assets/blog1.png');



const BlogPage = () => {

    let gallery = [
        {
            id: 1,
            image: require('../assets/After Log/blog3.png'),
        },
        {
            id: 2,
            image: require('../assets/blog4.png'),
        },
        {
            id: 3,
            image: require('../assets/blog5.png'),
        }
        
    ]

let blogs = [
    {
        id: 1,
        title: 'DIY Projects',
    },
    {
        id: 2,
        title: 'SelfCare',
    },
    {
        id: 3,
        title: 'Safety',
    }
]
  return (
   <>
   <section>
   <div
        style={{ backgroundImage: `url(${defaultBackground})` }}
        className="w-full h-screen p-2 bg-no-repeat bg-cover"
      >
        <Navbar />
        <div className="flex flex-col  justify-start text-4xl font-bold">
          <h1 className="text-[black]  text-6xl font-bold mt-[180px] p-6">Stay Handy with our <br/> Expert Tips</h1>
        </div>
        <div className="">
          <p className="text-2xl p-6 my-4">
          Discover essential maintenance advice, DIY projects, and insider tips from the pros.<br/>"projects, and insider tips from the pros."
          </p>
          <h2 className="text-xl font-bold text-[#0E3995] mt-10 p-6">Read More</h2>

          <button className="py-4 px-8 bg-[#0E3995] text-white border-2 border-[#0E3995] rounded-3xl mt-10">
            Request a Service
          </button>
        </div>
      </div>
     <section className="w-full px-6 bg-[#AFCDE57D]">
     <div className= "p-6">
      <h1 className="text-3xl text-[#0E3995] font-semibold">Popular Posts</h1>
      <img src={Blog1} alt="" className='h-[317px] w-full' />
      </div>
      <div className= "p-6">
      <h1 className="text-xl  font-semibold">5 Quick Fixes Every Homeowner should know</h1>
      <img src={Blog2} alt="" className='h-[317px] w-full' />
      </div>

      <h1 className="text-3xl text-[#0E3995] font-semibold">Topics</h1>
        <div className="grid w-full grid-cols-3 gap-10 py-8">
          {gallery.map((service) => (
            <GalleryCard key={service.id} gallery={service} />
          ))}
          {
            blogs.map((blog) => (
                <h1 key={blog.id} className="text-3xl font-semibold p-6">{blog.title}</h1>
            ))
          }
        </div>
        <h1 className="text-3xl text-[#0E3995] font-semibold">Blogs</h1>
        <div className="grid w-full grid-cols-3 gap-10 py-8">
          {gallery.map((service) => (
            <GalleryCard key={service.id} gallery={service} />
          ))}
            {
            blogs.map((blog) => (
                <h1 key={blog.id} className="text-3xl font-semibold p-6">{blog.title}</h1>
            ))
          }
        </div>
       <div className='bg-[#AFCDE57D] w-full'>
       <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden w-full max-w-md lg:max-w-[1045px] mx-auto font-[sans-serif]">
  <input
    type="email"
    placeholder="Search for tips, tools or projects"
    className="w-full outline-none bg-white pl-4 text-sm"
  />
  <button
    type="button"
    className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
  >
    Search
  </button>
</div>
       </div>

     </section>
      <BookSection/>
      <Footer/>
   </section>
   </>
  )
}

export default BlogPage
