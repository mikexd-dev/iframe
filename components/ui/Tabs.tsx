interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  tabs: string[];
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const Tabs = ({ tabs, currentTab, onTabChange, ...props }: Props) => {
  return (
    <ul className="flex items-center justify-start space-x-4 border-b-[1px]" {...props}>
      {tabs.map((tab) => {
        return (
          <li
            className={`text-grey list-none pb-1 text-base font-medium hover:cursor-pointer ${
              currentTab === tab ? "border-b-2 border-black text-black" : "text-slate-500"
            }`}
            key={tab}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </li>
        );
      })}
    </ul>
  );
};
