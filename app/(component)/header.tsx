import Image from "next/image";
import { More } from "./more";
import { GroupPhoto } from "./grouphoto";
import IconBack from "./(svg)/Iconback";
import IconEdit from "./(svg)/Iconedit";
import IconMember from "./(svg)/Iconmember";
import { useQuery } from "react-query";
import { retriveMessage } from "../page";
export const Header = () => {
  const { data, error, isLoading } = useQuery("postsData", retriveMessage);
  const { from, name, to } = data;
  return (
    <header className="h-32 flex flex-col gap-4 pt-5 pb-4 px-4 bg-pwaWhite border-b-pwaGray-boarder border-solid border-[1px] text-pwaGreen-text">
      <div className="h-8 w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <button className="hover:bg-white transition hover:shadow-md h-6 w-6 rounded-full flex items-center justify-center focus:bg-white focus:shadow-md">
            <IconBack />
          </button>
          <p className="text-2xl font-bold">{name}</p>
        </div>
        <button className="hover:bg-white transition hover:shadow-md h-8 w-8 rounded-full flex items-center justify-center focus:bg-white focus:shadow-md">
          <IconEdit />
        </button>
      </div>
      <div className="h-12 w-full flex justify-between items-center">
        <div className="flex items-center gap-4 h-full">
          <GroupPhoto />
          <div>
            <p className="before:content-['From'] before:text-pwaGray-primary before:font-semibold font-bold">
              {` ${from}`}
            </p>
            <p className="before:content-['To'] before:text-pwaGray-primary font-bold before:font-semibold">
              {` ${to}`}
            </p>
          </div>
        </div>
        <More />
      </div>
    </header>
  );
};
