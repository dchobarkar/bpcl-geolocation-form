const Header = ({ title }: { title: string }) => {
  return (
    <header className="w-full bg-blue-500 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
        {title}
      </h1>
    </header>
  );
};

export default Header;
