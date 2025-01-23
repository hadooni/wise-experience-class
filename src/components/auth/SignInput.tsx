import { SignInTypes, SignUpTypes } from "@/types/auth";
import { Path, UseFormRegister } from "react-hook-form";

type SignInputProps<FormType extends SignUpTypes | SignInTypes> = {
  label?: string;
  type: string;
  register: UseFormRegister<FormType>;
  name: Path<FormType>;
  error?: string;
  placeholder: string;
};

const SignInput = <FormType extends SignUpTypes | SignInTypes>({
  label,
  type,
  register,
  name,
  error,
  placeholder,
}: SignInputProps<FormType>) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="ml-7 font-extrabold text-[#8A8A8A]">{label}</label>
      )}
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="border-[1.5px] border-navy-custom rounded-3xl bg-white text-base px-6 py-3 mx-6"
      />
      {error && <span className="ml-9 text-navy-custom">{error}</span>}
    </div>
  );
};
export default SignInput;
