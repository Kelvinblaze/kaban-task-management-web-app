import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { TbLayoutBoard } from "react-icons/tb";
import { FiEyeOff } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";

import Logo from "../ui/Logo";

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const { isDark, toggle: toggleTheme } = useTheme();
  const [boards, setBoards] = useState([
    "Platform Launch",
    "Marketing Plan",
    "Roadmap",
  ]);
  const [activeBoard, setActiveBoard] = useState(boards[0]);

  return (
    isSideBarOpen && (
      <div className="lg:min-w-[300px] border-r py-5 h-screen bg-white dark:bg-dark-grey border-r-lines-light dark:border-r-lines-dark border-r  flex flex-col justify-between">
        <section className="space-y-10">
          <div className="px-5">
            <Logo mode={isDark ? "light" : "dark"} />
          </div>

          <div className="space-y-5 pr-5">
            <p className="px-5 text-medium-grey font-semibold text-capitalize text-sm tracking-widest">
              ALL BOARDS (3)
            </p>

            <div>
              <ul className="text-medium-grey">
                {boards.map((board, index) => (
                  <li
                    onClick={() => setActiveBoard(board)}
                    key={index}
                    className={`p-3 px-5 cursor-pointer hover:text-very-dark-grey dark:hover:text-white font-bold flex items-center space-x-3 ${
                      activeBoard === board
                        ? "bg-main-purple text-white hover:text-white rounded-r-full"
                        : ""
                    }`}
                  >
                    <TbLayoutBoard />
                    <span>{board}</span>
                  </li>
                ))}

                <li
                  onClick={toggleTheme}
                  className="p-3 px-5 cursor-pointer font-bold flex items-center space-x-3 text-main-purple"
                >
                  <TbLayoutBoard />
                  <span>+ Create New Board</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="p-5 space-y-5">
          <div className="flex items-center justify-center gap-6 bg-light-grey dark:bg-very-dark-grey rounded-lg py-4">
            {/* Sun Icon */}
            <FaSun
              className={`w-5 h-5 ${
                isDark ? "text-gray-400" : "text-yellow-500"
              } transition-colors`}
            />

            {/* Toggle Switch */}
            <button
              onClick={toggleTheme}
              className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 cursor-pointer  ${
                isDark ? "bg-purple-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`bg-white w-4 h-4 rounded-full transition-transform duration-300 ${
                  isDark ? "translate-x-6" : "translate-x-0"
                }`}
              ></span>
            </button>

            {/* Moon Icon */}
            <FaMoon
              className={`w-5 h-5 ${
                isDark ? "text-purple-500" : "text-gray-400"
              } transition-colors`}
            />
          </div>

          <div className="text-medium-grey font-bold flex items-center space-x-3">
            <FiEyeOff />
            <span>Hide Sidebar</span>
          </div>
        </section>
      </div>
    )
  );
};

export default SideBar;
