import { log } from "console";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { NextPage } from "next/types";
import React, { useState } from "react";
import { text } from "stream/consumers";
import { string } from "zod";
import AnimatedLayout from "../components/AnimatedLayout";
import DialogButton from "../components/common/DialogButton";
import { NavLink } from "../components/Nav";
import { trpc } from "../utils/trpc";

const Logboek: NextPage = () => {

  const today = new Date()

  const { data, isLoading, refetch } = trpc.log.getAll.useQuery();

  const mutation = trpc.log.delete.useMutation()

  const handleDelete = async (id: string) => {
    await mutation.mutateAsync({
      id: id
    }).then((_) => {
      refetch()
    })
  }
  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    )
  }

  return (
    <AnimatedLayout>
      <Link href="/createLog" >
        <button className="rounded bg-emerald-100 hover:divide-emerald-500" >
          Create New
        </button>
      </Link>

      {data?.map((log) => {
        return <LogCard id={log.id} handleDelete={handleDelete} date={log.date} dayInfo={log.info} />
      })}
    </AnimatedLayout>
  );
};

export default Logboek;

interface LogCardProps {
  id: string;
  handleDelete: (id: string) => void;
  date: string;
  dayInfo: string;
}

const LogCard: React.FC<LogCardProps> = ({ id, handleDelete, date, dayInfo }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="my-4 max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600">{date}</span>
        {/* <a className="rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 "> */}
        {/* <button onClick={()=> handleDelete(id)}>d</button> */}
        <DialogButton title='Confirmation to delete' description='Are you sure that you want to delete this log?' buttonTitle='Yes!' dialogButtonText="delete" onDelete={() => handleDelete(id)} />
        {/* </a> */}
      </div>
      <div className="mt-2">
        <p className="mt-2 text-gray-600">{dayInfo}</p>
      </div>
    </div>

  );
};
