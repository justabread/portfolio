import {
  Children,
  type ComponentProps,
  type Dispatch,
  type ReactElement,
  type SetStateAction,
} from "react";
import type Tab from "./Tab";

interface TabsProps {
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number>>;
  children:
    | ReactElement<ComponentProps<typeof Tab>>
    | ReactElement<ComponentProps<typeof Tab>>[];
}

const Tabs = ({ currentTab, setCurrentTab, children }: TabsProps) => {
  const childArray = Children.toArray(children) as ReactElement<
    React.ComponentProps<typeof Tab>
  >[];

  return (
    <section className="flex flex-col min-h-screen h-screen">
      <div className="flex ml-15 h-10">
        {childArray.map((e, i) => (
          <div
            onClick={() => {
              setCurrentTab(i);
            }}
            className={`flex  w-70 p-2 items-center gap-x-1 ${currentTab !== i ? `hover:bg-dominant-light hover:cursor-pointer bg-secondary` : `bg-dominant`} rounded-t-xl`}
          >
            {e.props.TabIcon}
            <p>{e.props.title}</p>
          </div>
        ))}
      </div>

      {childArray[currentTab]}
    </section>
  );
};

export default Tabs;
