const FormsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[90vh] md:min-h-[85vh] flex items-center justify-center py-4 text-black bg-gray-100">
      {children}
    </div>
  );
};

export default FormsLayout;
