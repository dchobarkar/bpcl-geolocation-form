const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-gray-800 py-4">
      <p className="text-center text-white text-sm">
        &copy; {new Date().getFullYear()} BPCL Geolocation Project
      </p>
    </footer>
  );
};

export default Footer;
