type AuthButtonTypes = {
  text: string;
  onClick?: () => void;
  color: "navy" | "navyLight";
  type: "submit" | "button";
};

const AuthButton = ({ text, onClick, color, type }: AuthButtonTypes) => {
  const ButtonStyle = {
    navy: "bg-navy-custom text-white",
    navyLight: "bg-[#DDECFA] text-[#2B2B2B]",
  };
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-xl font-bold px-2 py-3 mx-6 rounded-3xl ${ButtonStyle[color]}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default AuthButton;
