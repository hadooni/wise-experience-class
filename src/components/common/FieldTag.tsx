type FieldTagProps = {
  text: string;
  color: "blue" | "gray";
};

const FieldTag = ({ text, color }: FieldTagProps) => {
  const TagStyle = {
    blue: "bg-navy-light border-navy-custom text-navy-custom",
    gray: "bg-gray-light border-gray-custom text-gray-custom",
  };
  return (
    <div
      className={`absolute flex justify-center h-7 items-center px-2 rounded-lg border ${TagStyle[color]}`}
    >
      {text}
    </div>
  );
};

export default FieldTag;
