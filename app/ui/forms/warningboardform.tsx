"use client";

import { useFormState } from "react-dom";
import { notFound, useSearchParams } from "next/navigation";

import { createWarningBoardInput } from "@/app/lib/actions";
import RadioInput from "../inputs/radio";

const WarningBoardForm = () => {
  const initialState: any = { message: null, errors: {} };

  const searchParams = useSearchParams();
  const officerName = searchParams.get("officer") || "";
  const latitude = searchParams.get("latitude") || "";
  const logitude = searchParams.get("logitude") || "";

  const createWarningBoardInputWithOfficer = createWarningBoardInput.bind(
    null,
    officerName
  );
  const [state, formAction] = useFormState(
    createWarningBoardInputWithOfficer,
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

        <RadioInput
          label="Status"
          labelValue="status"
          ariaDescribedBy="status-error"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
          errors={state?.errors?.status}
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
            aria-describedby="statusInfo-error"
          />
        </div>
        <div id="statusInfo-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.statusInfo?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        <RadioInput
          label="Condition"
          labelValue="condition"
          ariaDescribedBy="condition-error"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
          errors={state?.errors?.condition}
        />

        <RadioInput
          label="Rusting Condition"
          labelValue="rustingCondition"
          ariaDescribedBy="condition-error"
          options={[
            { value: "notRusted", label: "Not Rusted" },
            { value: "minorRusted", label: "Minor Rusted" },
            { value: "heavyRusted", label: "Heavy Rusted" },
          ]}
          errors={state?.errors?.rustingCondition}
        />

        <RadioInput
          label="Foundation Status"
          labelValue="foundationStatus"
          ariaDescribedBy="foundationStatus-error"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
          errors={state?.errors?.foundationStatus}
        />

        <RadioInput
          label="Type of Warning Board"
          labelValue="typeOfWarningBoard"
          ariaDescribedBy="typeOfWarningBoard-error"
          options={[
            { value: "roadCrossing", label: "Road Crossing" },
            { value: "riverCrossing", label: "River Crossing" },
            { value: "railwayCrossing", label: "Railway Crossing" },
          ]}
          errors={state?.errors?.typeOfWarningBoard}
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
            aria-describedby="details-error"
          />
        </div>
        <div id="details-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.details?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        <RadioInput
          label="Details Status"
          labelValue="detailsStatus"
          ariaDescribedBy="detailsStatus-error"
          options={[
            { value: "shredded", label: "Shredded" },
            { value: "ok", label: "OK" },
            { value: "notAvailable", label: "Not Available" },
          ]}
          errors={state?.errors?.detailsStatus}
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
            aria-describedby="detailsInfo-error"
          />
        </div>
        <div id="detailsInfo-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.detailsInfo?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

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

export default WarningBoardForm;
