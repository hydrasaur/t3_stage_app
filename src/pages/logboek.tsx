import { signIn } from "next-auth/react";
import Link from "next/link";
import { NextPage } from "next/types";
import React from "react";
import { NavLink } from "../components/Nav";
import { trpc } from "../utils/trpc";


const Logboek: NextPage = () => {
  
const today = new Date()

const {data, isLoading} = trpc.log.getAll.useQuery();

if (isLoading) {
  return (
    <div>
      <h1>Loading....</h1>
    </div>
  )
}


  return (
    <div>
      <Link href="/createLog" >
        <button className="rounded bg-emerald-100 hover:divide-emerald-500" >
          create new
        </button>
      </Link>

      {data?.map((log)=> {
        return <LogCard date={log.date} dayInfo={log.info} />
      })}
      {/* <LogCard date={today.toLocaleDateString().padStart(10, '0')} day="woensdag" dayInfo="lorem ipsum" /> */}

    </div>
  );
};

export default Logboek;

interface LogCardProps {
  date: string;
  dayInfo: string;
}

const LogCard: React.FC<LogCardProps> = ({ date, dayInfo }) => {
  return (
    <div className="my-4 max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600">{date}</span>
        <a className="rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 ">
          <button onClick={}>delete</button>
        </a>
      </div>
      <div className="mt-2">
        <p className="mt-2 text-gray-600">{dayInfo}</p>
      </div>
    </div>
  );
};


// function dateFormatter(date: Date) {
//   const yyyy = date.getFullYear();
// let mm = date.getMonth() + 1; // Months start at 0!
// let dd = date.getDate();

// if (dd < 10) dd = '0' + dd;
// if (mm < 10) mm = '0' + mm;

// const formattedToday = dd + '/' + mm + '/' + yyyy;

  
// }