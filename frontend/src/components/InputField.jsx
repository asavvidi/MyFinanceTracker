export default function InputField({ placeholder, value, ...props }) {
  return <input placeholder={placeholder} value={value} {...props} />;
}
