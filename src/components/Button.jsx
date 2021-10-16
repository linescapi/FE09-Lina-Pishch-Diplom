export const Button = ({ color, text, onClick, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};
