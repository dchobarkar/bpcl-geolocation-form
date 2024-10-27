const RadioInput = ({
  label,
  options,
}: {
  label: string;
  options: { value: string; label: string }[];
}) => {
  return (
    <fieldset className="flex flex-col mb-4">
      <legend className="mb-2 font-medium">{label}:</legend>

      <div className="grid grid-cols-2 gap-2 sm:flex sm:space-x-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={option.value}
              type="radio"
              name={label}
              value={option.value}
              className="mr-2"
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioInput;
