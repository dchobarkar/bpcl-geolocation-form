const Footer = () => {
  return (
    <footer className="w-full mt-auto py-4 bg-gray-800">
      <p className="text-center text-white text-sm">
        &copy; {new Date().getFullYear()} BPCL Geolocation Project
      </p>
    </footer>
  );
};

export default Footer;
