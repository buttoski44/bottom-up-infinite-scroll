import { ReactNode } from "react";
import { Option } from "./option";
import IconMore from "./(svg)/Iconmore";
import IconMember from "./(svg)/Iconmember";
import IconCall from "./(svg)/Iconcall";
import IconReport from "./(svg)/Iconreport";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const options = [
  {
    component: () => <IconMember />,
    label: "Members",
  },
  {
    component: () => <IconCall />,
    label: "Share Number",
  },
  {
    component: () => <IconReport />,
    label: "Report",
  },
];

export const More = () => {
  return (
    <div className="">
      <Popover>
        <PopoverTrigger className="hover:bg-white transition hover:shadow-md h-8 w-8 rounded-full flex items-center justify-center focus:bg-white focus:shadow-md">
          <IconMore />
        </PopoverTrigger>
        <PopoverContent className="w-40 mr-4 bg-white flex flex-col rounded-lg overflow-hidden">
          {options.map(({ component, label }, i) => (
            <Option key={i} label={label}>
              {component()}
            </Option>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};
