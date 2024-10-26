import { typeOfTlp } from "@/app/lib/constant-data";
import RadioInput from "../inputs/radio";

const TLPForm = () => {
  return (
    <form>
      <div className="max-w-lg mx-auto mt-2 p-4 bg-white rounded-lg shadow-md text-sm font-medium">
        <div className="flex items-center mb-4">
          <label htmlFor="ch" className="mr-2 text-sm font-medium">
            CH
          </label>

          <input
            required
            id="ch"
            name="ch"
            type="number"
            step="0.001"
            className="w-full p-1 border rounded-md"
          />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="typeOfTlp" className="mr-2 text-sm font-medium">
            Type of TLP:
          </label>

          <select
            required
            id="typeOfTlp"
            name="typeOfTlp"
            className="w-full p-1 border rounded-md"
          >
            {typeOfTlp.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <RadioInput
          label="Door Condition"
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
            { value: "available", label: "Available" },
            { value: "notAvailable", label: "Not Available" },
          ]}
        />

        <RadioInput
          label="Circuit Diagram"
          options={[
            { value: "available", label: "Available" },
            { value: "notAvailable", label: "Not Available" },
          ]}
        />
      </div>
    </form>
  );
};

export default TLPForm;
