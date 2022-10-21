import Table from "../../components/table";

export const List: () => JSX.Element = () => {
  console.log(1);
  return (
    <Table
      data={[
        {
          "User Id": 1,
          "Vehicle Id": 2,
          From: "New York",
          To: "Texas",
        },
        {
          "User Id": 1,
          "Vehicle Id": 2,
          From: "New York",
          To: "Texas",
        },
      ]}
    />
  );
};
