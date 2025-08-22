import Button from "../ui/Button";

const EmptyBoard = () => {
  return (
    <div className="space-y-5 text-center">
      <p className="text-medium-grey">
        This board is empty. Create a new column to get started.
      </p>
      <Button variant="primary">+ Add New Column</Button>
    </div>
  );
};

export default EmptyBoard;
