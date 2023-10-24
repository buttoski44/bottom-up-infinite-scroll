import { ReactNode } from "react";

export const Option = ({
  children,
  label,
}: {
  children: ReactNode;
  label: String;
}) => {
  return (
    <button className="flex items-center gap-3 py-3 px-3 border-pwaGray-boarder border-b-[1px] border-solid hover:bg-pwaGray-hov transition">
      <span>{children}</span>
      <p className="text-sm font-semibold">{label}</p>
    </button>
  );
};
