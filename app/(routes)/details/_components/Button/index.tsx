// Button.tsx
const Button = ({ type, children }: { type: "button" | "submit" | "reset", children: React.ReactNode }) => {
    return (
      <button
        type={type}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  