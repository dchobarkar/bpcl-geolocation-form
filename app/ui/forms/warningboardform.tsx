import RadioInput from "../inputs/radio";

const WarningBoardForm = () => {
  return (
    <form className="max-w-lg mx-2 md:mx-auto mt-4 p-6 font-medium bg-white rounded-lg shadow-md text-sm">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="ch"
            className="sm:mr-2 mb-1 sm:mb-0 text-sm font-medium"
          >
            CH
          </label>

          <input
            required
            id="ch"
            name="ch"
            type="number"
            step="0.001"
            className="w-full p-2 border rounded-md"
            placeholder="Enter CH value"
          />
        </div>

        <RadioInput
          label="Status"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
        />

        {/* If Status not ok, then additional information should be shown */}
        <div className="mt-2">
          <label
            htmlFor="statusInfo"
            className="sm:mr-2 mb-1 sm:mb-0 text-sm font-medium"
          >
            Additional Information:
          </label>

          <input
            id="statusInfo"
            name="statusInfo"
            type="text"
            className="w-full p-2 border rounded-md mt-1"
            placeholder="Provide details"
          />
        </div>

        <RadioInput
          label="Condition"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
        />

        <RadioInput
          label="Rusting Condition"
          options={[
            { value: "notRusted", label: "Not Rusted" },
            { value: "minorRusted", label: "Minor Rusted" },
            { value: "heavyRusted", label: "Heavy Rusted" },
          ]}
        />

        <RadioInput
          label="Foundation Status"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
        />

        <RadioInput
          label="Type of Warning Board"
          options={[
            { value: "roadCrossing", label: "Road Crossing" },
            { value: "riverCrossing", label: "River Crossing" },
            { value: "railwayCrossing", label: "Railway Crossing" },
          ]}
        />

        <div className="mt-2">
          <label
            htmlFor="details"
            className="sm:mr-2 mb-1 sm:mb-0 text-sm font-medium"
          >
            Details:
          </label>

          <input
            id="details"
            name="details"
            type="text"
            className="w-full p-2 border rounded-md mt-1"
          />
        </div>

        <RadioInput
          label="Details Status"
          options={[
            { value: "shredded", label: "Shredded" },
            { value: "ok", label: "OK" },
            { value: "notAvailable", label: "Not Available" },
          ]}
        />

        {/* If Details Status not ok, then additional information should be shown */}
        <div className="mt-2">
          <label
            htmlFor="detailsInfo"
            className="sm:mr-2 mb-1 sm:mb-0 text-sm font-medium"
          >
            Additional Information:
          </label>

          <input
            id="detailsInfo"
            name="detailsInfo"
            type="text"
            className="w-full p-2 border rounded-md mt-1"
            placeholder="Provide details"
          />
        </div>

        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default WarningBoardForm;
