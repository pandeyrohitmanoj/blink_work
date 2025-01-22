
import TableComponent from "./components/tables/TableComponent";
import { Metadata } from "next";
import ButtonComponent from "./components/Home/ButtonComponent";

export const metadata: Metadata = {
  title: "orders",
  description: "Orders screen showcases all the orders in the db",
};
export default function Home() {
  return (
    <div className="min-h-svh w-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl">Order Management</h1>
        <TableComponent />
        <ButtonComponent />
    </div>
  );
}
