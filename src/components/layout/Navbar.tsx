import { useTheme } from "../../hooks/useTheme";

import Button from "../ui/Button";
import Logo from "../ui/Logo";

type NavbarPropType = {
  isSideBarOpen: boolean;
};

const Navbar = ({ isSideBarOpen }: NavbarPropType) => {
  const { isDark } = useTheme();
  return (
    <nav className="bg-white dark:bg-dark-grey border-b-lines-light dark:border-b-lines-dark border-b">
      <div className="mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center space-x-8 divide-x dark:divide-lines-dark divide-lines-light">
              {!isSideBarOpen && (
                <div className="pr-8">
                  <Logo mode={isDark ? "light" : "dark"} />
                </div>
              )}
              <h6 className="text-xl font-bold dark:text-white  text-black">
                Platform Launch
              </h6>
            </div>
          </div>
          <div className="">
            <Button variant="primary">+ Add New Task</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
