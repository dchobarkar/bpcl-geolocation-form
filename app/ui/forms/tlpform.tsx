"use client";

import { useFormState } from "react-dom";
import { notFound, useSearchParams } from "next/navigation";

import { typeOfTlps } from "@/app/lib/constant-data";
import { createTLPInput } from "@/app/lib/actions";
import RadioInput from "../inputs/radio";

const TLPForm = () => {
  const initialState: any = { message: null, errors: {} };

  const searchParams = useSearchParams();
  const officerName = searchParams.get("officer") || "";
  const latitude = searchParams.get("latitude") || "";
  const logitude = searchParams.get("logitude") || "";

  const createTLPInputWithOfficer = createTLPInput.bind(null, officerName);
  const [state, formAction] = useFormState(
    createTLPInputWithOfficer,
    initialState
  );

  if (officerName === "" || latitude === "" || logitude === "")
    return notFound();

  return (
    <form
      action={formAction}
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
            aria-describedby="ch-error"
          />
        </div>
        <div id="ch-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.ch?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
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
            aria-describedby="typeOfTlp-error"
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
        <div id="typeOfTlp-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.typeOfTlp?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        <RadioInput
          label="Door Condition"
          labelValue="doorCondition"
          ariaDescribedBy="doorCondition-error"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
          errors={state?.errors && state.errors?.doorCondition}
        />

        <RadioInput
          label="Rusting Condition"
          labelValue="rustingCondition"
          ariaDescribedBy="rustingCondition-error"
          options={[
            { value: "notRusted", label: "Not Rusted" },
            { value: "minorRusted", label: "Minor Rusted" },
            { value: "heavyRusted", label: "Heavy Rusted" },
          ]}
          errors={state?.errors && state.errors?.rustingCondition}
        />

        <RadioInput
          label="Foundation Status"
          labelValue="foundationStatus"
          ariaDescribedBy="foundationStatus-error"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
          errors={state?.errors && state.errors?.foundationStatus}
        />

        <RadioInput
          label="Details Status"
          labelValue="detailsStatus"
          ariaDescribedBy="detailsStatus-error"
          options={[
            { value: "available", label: "Available" },
            { value: "notAvailable", label: "Not Available" },
          ]}
          errors={state?.errors && state.errors?.detailsStatus}
        />

        <RadioInput
          label="Circuit Diagram"
          labelValue="circuitDiagram"
          ariaDescribedBy="circuitDiagram-error"
          options={[
            { value: "available", label: "Available" },
            { value: "notAvailable", label: "Not Available" },
          ]}
          errors={state?.errors && state.errors?.circuitDiagram}
        />

        {/* Hidden Inputs for Geolocation */}
        <input type="hidden" name="latitude" value={latitude} />
        <input type="hidden" name="logitude" value={logitude} />

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
