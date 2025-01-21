'use client'

import { useRouter } from "next/navigation";
import TableComponent from "./components/tables/TableComponent";

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/new-order')
  }
  return (
    <div className="min-h-svh w-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl">Order Management</h1>
        <TableComponent />
        <button className="text-xl py-4 px-6" onClick={handleClick}>New Order</button>
    </div>
  );
}
