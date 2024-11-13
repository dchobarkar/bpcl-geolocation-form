const Header = ({ title }: { title: string }) => {
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-center">{title}</h1>
  );
};

export default Header;
