import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-500 p-4 flex justify-between items-center">
      <Link
        href="/"
        className="bg-white text-blue-500 py-1 px-3 rounded-md font-medium hover:bg-gray-200"
      >
        BPCL Geolocation
      </Link>
    </nav>
  );
};

export default Navbar;
