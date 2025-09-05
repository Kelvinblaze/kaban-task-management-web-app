import { useState } from "react";

import EmptyBoard from "../components/core/EmptyBoard";
import TaskCard from "../components/core/TaskCard";

// Layout
import Dashboard from "../layouts/Dashboard";

const HomePage = () => {
  const columns = [
    {
      label: "Todo",
      value: "todo",
      color: "#49C4E5",
    },
    {
      label: "Doing",
      value: "doing",
      color: "#8471F2",
    },
    {
      label: "Done",
      value: "done",
      color: "#67E2AE",
    },
  ];

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "",
      description: "",
      subtasks: [],
      status: "",
    },
  ]);

  return (
    <Dashboard>
      {/* Empty Board Container */}
      {/* <div className="h-screen grid place-content-center">
        <EmptyBoard />
      </div> */}

      <section className="flex gap-5 w-full overflow-y-scroll overflow-x-scroll h-screen p-5">
        {columns.map((column) => {
          return (
            <section className="space-y-5">
              <div className="flex items-center space-x-2">
                <div
                  style={{
                    backgroundColor: column.color,
                  }}
                  className="size-[12px] rounded-full"
                ></div>
                <p className="uppercase text-medium-grey text-sm font-bold">
                  {column.label} (4)
                </p>
              </div>

              {/* Tasks Based by Column */}
              <div className="space-y-5">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
              </div>
            </section>
          );
        })}
      </section>
    </Dashboard>
  );
};

export default HomePage;
