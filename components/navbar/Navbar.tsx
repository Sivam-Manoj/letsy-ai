import { FaHome, FaUser, FaCog } from 'react-icons/fa'; // Using FontAwesome icons, but you can choose others

const Navbar = () => {
  return (
    <div className="flex flex-col items-center w-30 h-screen bg-black text-white shadow-md">
      {/* App Name */}
      <div className="text-xl font-semibold p-4 text-center whitespace-nowrap overflow-hidden text-ellipsis">
        Letsy-Ai
      </div>

      <div className="mt-10"></div>

       {/* Home*/}
       <div className="p-4 hover:bg-gray-700 rounded-full cursor-pointer">
        <span>Home</span>
      </div>

      {/* Account Icon */}
      <div className="p-4 hover:bg-gray-700 rounded-full cursor-pointer">
        <FaUser size={24} />
      </div>

      {/* Settings Icon */}
      <div className="p-4 hover:bg-gray-700 rounded-full cursor-pointer">
        <FaCog size={24} />
      </div>
    </div>
  );
};

export default Navbar;
