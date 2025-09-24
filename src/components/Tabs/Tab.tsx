import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import type { JSX, PropsWithChildren } from "react";

interface TabProps extends PropsWithChildren {
  title: string;
  description: string;
  TabIcon: JSX.Element;
}

const Tab = ({ description, children }: TabProps) => {
  return (
    <>
      <div className="h-full bg-dominant">
        <div className="flex h-[7%] w-full justify-start items-center p-2">
          <div className="flex gap-x-2">
            <ArrowLeft />
            <ArrowRight />
          </div>
          <div className="flex flex-1 rounded-4xl border-2 border-text bg-accent-alt h-full w-full ml-5 mr-5 items-center pl-5 pr-5 gap-x-5">
            <Search className="stroke-gray-800" />
            <p className="text-xl text-gray-800">{description}</p>
          </div>
        </div>
        <div className="flex flex-1 h-[93%] border-3 ">{children}</div>
      </div>
    </>
  );
};

export default Tab;
