import Button from "../ui/Button";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-dark-grey border-b-lines-light dark:border-b-lines-dark border-b">
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h6 className="text-xl font-bold dark:text-white  text-black">
              Platform Launch
            </h6>
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
