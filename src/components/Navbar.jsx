import logo from '../assets/logo-text.png'; 

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-sm sticky top-0 bg-white z-50">
      
      
      <div>
        <img src={logo} alt="logo" className="h-10" />
      </div>

      
      <div className="flex gap-8 text-gray-600 font-semibold">
        <a href="#" className="text-[#DE277F]">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      
      <div className="flex items-center gap-5 text-gray-600 font-semibold">
        <a href="#">Sign In</a>
        <button className="bg-[#DE277F] text-white px-6 py-2 rounded-full">
          Sign Up
        </button>
      </div>

    </div>
  );
};

export default Navbar;