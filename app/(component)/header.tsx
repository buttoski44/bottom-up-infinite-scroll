"use client";

import { More } from "./more";
import { GroupPhoto } from "./grouphoto";
import IconBack from "./(svg)/Iconback";
import IconEdit from "./(svg)/Iconedit";
import { useQuery } from "react-query";
import axios from "axios";
export const retriveMessage = async () => {
  const response = await axios.get(
    "https://qa.corider.in/assignment/chat?page=0"
  );
  return response.data;
};
export const Header = () => {
  const { data, isLoading } = useQuery("postsData", retriveMessage);

  return (
    <header className="h-auto flex flex-col gap-4 pt-3 pb-4 px-4 lg:px-8 bg-pwaWhite border-b-pwaGray-boarder border-solid border-[1px] text-pwaGreen-text">
      <div className="flex items-center justify-between w-full h-8">
        <div className="w-full flex items-center gap-3">
          <button className="flex items-center justify-center w-6 h-6 transition rounded-full hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md">
            <IconBack />
          </button>
          {isLoading ? (
            <div className="h-10 w-1/3 bg-pwaGray-boarder rounded-full"></div>
          ) : (
            <p className="text-2xl font-bold">{data?.name}</p>
          )}
        </div>
        <button className="flex items-center justify-center w-8 h-8 transition rounded-full hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md">
          <IconEdit />
        </button>
      </div>
      <div className="flex items-center justify-between w-full h-12">
        <div className="flex items-center h-full w-full gap-4">
          <GroupPhoto />
          <div className="w-full h-full">
            {isLoading ? (
              <div className="h-full w-1/5 bg-pwaGray-boarder  rounded-full"></div>
            ) : (
              <>
                <p className="before:content-['From'] before:text-pwaGray-primary before:font-semibold font-bold">
                  {` ${data?.from}`}
                </p>
                <p className="before:content-['To'] before:text-pwaGray-primary font-bold before:font-semibold">
                  {` ${data?.to}`}
                </p>
              </>
            )}
          </div>
        </div>
        <More />
      </div>
    </header>
  );
};
