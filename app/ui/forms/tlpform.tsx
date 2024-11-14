"use client";

import { typeOfTlps } from "@/app/lib/constant-data";
import RadioInput from "../inputs/radio";
import { createInputTLP } from "@/app/lib/actions";

const TLPForm = () => {
  return (
    <form
      action={createInputTLP}
      className="max-w-lg mx-2 md:mx-auto mt-4 p-6 font-medium bg-white rounded-lg shadow-md text-sm"
    >
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

        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="typeOfTlp"
            className="sm:mr-2 mb-1 sm:mb-0 text-sm font-medium"
          >
            Type of TLP
          </label>

          <select
            required
            id="typeOfTlp"
            name="typeOfTlp"
            className="w-full p-2 border rounded-md"
            defaultValue=""
          >
            <option className="text-gray-500" value="" disabled>
              Please Choose
            </option>
            {typeOfTlps.map((tlp) => (
              <option key={tlp.value} value={tlp.value}>
                {tlp.name}
              </option>
            ))}
          </select>
        </div>

        <RadioInput
          label="Door Condition"
          labelValue="doorCondition"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
        />

        <RadioInput
          label="Rusting Condition"
          labelValue="rustingCondition"
          options={[
            { value: "notRusted", label: "Not Rusted" },
            { value: "minorRusted", label: "Minor Rusted" },
            { value: "heavyRusted", label: "Heavy Rusted" },
          ]}
        />

        <RadioInput
          label="Foundation Status"
          labelValue="foundationStatus"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
        />

        <RadioInput
          label="Details Status"
          labelValue="detailsStatus"
          options={[
            { value: "available", label: "Available" },
            { value: "notAvailable", label: "Not Available" },
          ]}
        />

        <RadioInput
          label="Circuit Diagram"
          labelValue="circuitDiagram"
          options={[
            { value: "available", label: "Available" },
            { value: "notAvailable", label: "Not Available" },
          ]}
        />

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

export default TLPForm;
