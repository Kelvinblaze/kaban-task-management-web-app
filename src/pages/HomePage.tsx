import EmptyBoard from "../components/core/EmptyBoard";
import Dashboard from "../layouts/Dashboard";

const HomePage = () => {
  return (
    <Dashboard>
      {/* Empty Board Container */}
      <div className="h-screen grid place-content-center">
        <EmptyBoard />
      </div>
    </Dashboard>
  );
};

export default HomePage;
