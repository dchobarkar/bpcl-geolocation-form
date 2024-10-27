import RadioInput from "../inputs/radio";

const WarningBoardForm = () => {
  return (
    <form className="max-w-lg mx-2 md:mx-auto mt-4 p-6 bg-white rounded-lg shadow-md text-sm font-medium">
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

        <div className="mt-2">
          <label>Additional Information:</label>

          <input
            type="text"
            name="additionalInfo"
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
          label="Details Status"
          options={[
            { value: "shredded", label: "Shredded" },
            { value: "ok", label: "OK" },
            { value: "notAvailable", label: "Not Available" },
          ]}
        />

        <div className="mt-2">
          <label>Details:</label>

          <input
            type="text"
            name="detailsAdditionalInfo"
            className="w-full p-2 border rounded-md mt-1"
            placeholder="Provide details"
          />
        </div>
      </div>
    </form>
  );
};

export default WarningBoardForm;
