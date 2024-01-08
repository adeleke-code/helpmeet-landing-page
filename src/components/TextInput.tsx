import React, { ChangeEvent, FC, ReactElement } from "react";

type TextInputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  iconComponent: ReactElement;
  type: string;
};

const TextInput: FC<TextInputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  iconComponent,
  type,
}) => {
  return (
    <div className="bg-[#E5F4F2] flex items-center gap-2 p-2 rounded-xl">
      {React.cloneElement(iconComponent, { size: 20 })}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-[#E5F4F2] focus:outline-none text-black"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
