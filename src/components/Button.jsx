export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="text-stone-400 px-4 py-2 bg-stone-700 rounded-md"
    >
      {children}
    </button>
  );
}
