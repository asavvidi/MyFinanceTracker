export default function Select({
  placeholder,
  value,
  options,
  children,
  onChange,
  ...props
}) {
  return (
    <select value={value} onChange={onChange} {...props}>
      <option value="">{placeholder}</option>
      {options
        ? options.map((option, index) => {
            return (
              <option value={option} key={index}>
                {option}
              </option>
            );
          })
        : children}
    </select>
  );
}
