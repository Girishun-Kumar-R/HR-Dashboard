"use client";

import { ReactNode, useState } from "react";

interface TabConfig {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabConfig[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-1 rounded text-sm font-medium transition-all duration-300 ${
              index === active
                ? "bg-blue-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            }`}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        {tabs[active].content}
      </div>
    </div>
  );
};
