import { log } from "console";
import { unstable_getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { GetServerSideProps, NextPage } from "next/types";
import React, { useState } from "react";
import { text } from "stream/consumers";
import { string } from "zod";
import AnimatedLayout from "../components/AnimatedLayout";
import DialogButton from "../components/common/DialogButton";
import { NavLink } from "../components/Nav";
import { trpc } from "../utils/trpc";
import { authOptions } from "./api/auth/[...nextauth]";

const Logboek: NextPage = () => {

  const today = new Date()

  const { data: logs, isLoading, refetch } = trpc.log.getAll.useQuery();

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
        <button className="rounded bg-emerald-100 text-black" >
          Create New
        </button>
      </Link>

      {logs?.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      })
        .map((log) => {
          return <LogCard key={log.id} id={log.id} handleDelete={handleDelete} date={log.date} dayInfo={log.info} />
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
    <div className="my-4 max-w-4xl rounded-lg text-xl text-white bg-[#161b22] border border-zinc-700 px-10 py-6 shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-light ">{date}</span>
        <DialogButton title='Confirmation to delete' description='Are you sure that you want to delete this log?' buttonTitle='Yes!' dialogButtonText="delete" onDelete={() => handleDelete(id)} />
      </div>
      <p className="mt-2">{dayInfo}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: {},
  }
}
