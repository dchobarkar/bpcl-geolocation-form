const RadioInput = ({
  label,
  labelValue,
  ariaDescribedBy,
  options,
  errors,
}: {
  label: string;
  labelValue: string;
  ariaDescribedBy: string;
  options: { value: string; label: string }[];
  errors: string[] | null;
}) => {
  return (
    <>
      <fieldset className="flex flex-col mb-4">
        <legend className="mb-2 font-medium">{label}:</legend>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:space-x-4">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                id={option.value}
                name={labelValue}
                value={option.value}
                aria-describedby={ariaDescribedBy}
                type="radio"
                className="mr-2"
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </div>
      </fieldset>

      <div id={ariaDescribedBy} aria-live="polite" aria-atomic="true">
        {errors?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>
    </>
  );
};

export default RadioInput;
