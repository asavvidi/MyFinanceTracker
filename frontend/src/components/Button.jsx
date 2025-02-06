export default function Button({ children, className, onClick, ...props }) {
  return (
    <button className={className} {...props} onClick={onClick}>
      {children}
    </button>
  );
}
