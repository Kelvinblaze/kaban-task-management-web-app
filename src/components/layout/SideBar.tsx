import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { TbLayoutBoard } from "react-icons/tb";
import { FiEyeOff, FiSun, FiMoon, FiEye } from "react-icons/fi";
import Logo from "../ui/Logo";

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { isDark, toggle: toggleTheme } = useTheme();

  const boards = ["Platform Launch", "Marketing Plan", "Roadmap"];
  const [activeBoard, setActiveBoard] = useState(boards[0]);

  return isSideBarOpen ? (
    <aside className="lg:min-w-[300px] border-r py-5 h-screen bg-white dark:bg-dark-grey border-r-lines-light dark:border-r-lines-dark flex flex-col justify-between">
      <section className="space-y-10">
        <div className="px-5">
          {/* Light logo on dark bg, dark logo on light bg */}
          <Logo mode={isDark ? "light" : "dark"} />
        </div>

        <div className="space-y-5 pr-5">
          <p className="px-5 text-medium-grey font-semibold text-capitalize text-sm tracking-widest">
            ALL BOARDS ({boards.length})
          </p>

          <ul className="text-medium-grey">
            {boards.map((board) => {
              const isActive = activeBoard === board;
              return (
                <li key={board}>
                  <button
                    type="button"
                    onClick={() => setActiveBoard(board)}
                    className={[
                      "w-full text-left p-3 px-5 font-bold flex items-center space-x-3 rounded-r-full transition",
                      "hover:text-black dark:hover:text-white",
                      isActive
                        ? "bg-main-purple text-white hover:text-white"
                        : "",
                    ].join(" ")}
                  >
                    <TbLayoutBoard />
                    <span>{board}</span>
                  </button>
                </li>
              );
            })}

            <li>
              <button
                type="button"
                // TODO: replace with your create-board handler
                onClick={() => console.log("Create new board")}
                className="w-full text-left p-3 px-5 font-bold flex items-center space-x-3 text-main-purple hover:bg-main-purple/10 rounded-r-full transition"
              >
                <TbLayoutBoard />
                <span>+ Create New Board</span>
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="p-5 space-y-5">
        {/* Theme switcher */}
        <div className="flex items-center justify-center gap-6 bg-light-grey dark:bg-very-dark-grey rounded-lg py-4">
          <FiSun
            className={`w-5 h-5 ${
              isDark ? "text-gray-400" : "text-yellow-500"
            } transition-colors`}
          />

          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label="Toggle theme"
            className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-main-purple ${
              isDark ? "bg-main-purple" : "bg-gray-300"
            }`}
          >
            <span
              className={`bg-white w-4 h-4 rounded-full transition-transform duration-300 ${
                isDark ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>

          <FiMoon
            className={`w-5 h-5 ${
              isDark ? "text-main-purple" : "text-gray-400"
            } transition-colors`}
          />
        </div>

        <button
          type="button"
          className="text-medium-grey font-bold flex items-center space-x-3 hover:text-black dark:hover:text-white transition"
          onClick={() => setIsSideBarOpen(false)}
        >
          <FiEyeOff />
          <span>Hide Sidebar</span>
        </button>
      </section>
    </aside>
  ) : (
    <button
      type="button"
      className="bg-main-purple text-white rounded-r-full p-5 absolute bottom-10 font-bold"
      onClick={() => setIsSideBarOpen(true)}
      aria-label="Show sidebar"
    >
      <FiEye />
    </button>
  );
};

export default SideBar;
