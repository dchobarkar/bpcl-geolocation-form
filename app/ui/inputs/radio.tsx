const RadioInput = ({
  label,
  options,
}: {
  label: string;
  options: { value: string; label: string }[];
}) => {
  return (
    <div className="flex mb-4">
      <legend className="mr-2">{label}:</legend>

      <div className="flex items-center space-x-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={option.value}
              type="radio"
              name={label}
              value={option.value}
              className="mr-1"
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
