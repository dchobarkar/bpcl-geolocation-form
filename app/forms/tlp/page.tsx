import Header from "@/app/ui/header";

const Page = () => {
  return (
    <>
      <Header title="TLP Form" />

      <form>
        <div className="max-w-lg mx-auto mt-2 p-2 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="ch" className="mb-2 block text-sm font-medium">
              CH
            </label>
            <input
              required
              id="ch"
              type="number"
              step="0.001"
              name="ch"
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
