import banner from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <div className="flex items-center justify-between px-10 py-16 max-w-7xl mx-auto">
      
     
      <div className="w-1/2">
        <h1 className="text-6xl font-bold text-[#0F172A] leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Development Stack
          </span>
        </h1>
        
        <p className="text-gray-500 text-lg mt-6 mb-8 pr-12">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        
        
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-6 py-2.5 rounded-md font-medium">
            Explore Technologies
          </button>
          <button className="border border-gray-300 text-gray-600 px-6 py-2.5 rounded-md font-medium bg-white">
            Learn More
          </button>
        </div>
      </div>

     
      <div className="w-1/2 flex justify-end">
        <img src={banner} alt="stack banner" className="max-w-[450px]" />
      </div>

    </div>
  );
};

export default Hero;