import React, { Fragment, useState } from 'react'
import NextLink from "next/link"
import { trpc } from "../utils/trpc"
import DialogButton from "../components/common/DialogButton"
import { type } from 'os'
import Swal from 'sweetalert2'
import AnimatedLayout from '../components/AnimatedLayout'

const CreateLogPage = () => {
    // const mutation = trpc.log.

    const [success, setSuccess] = useState(false)

    const mutation = trpc.log.create.useMutation();

    const handleCreateLog = async (e: React.SyntheticEvent) => {
        console.log("function triggerd");

        e.preventDefault();

        const target = e.target as typeof e.target & {
            date: { value: string };
            info: { value: string };
        };
        const date = target.date.value; // typechecks!
        const info = target.info.value; // typechecks!

        console.log(date, info);

        //  check if values are null or empty
        if (info === '' || date === '') {
            console.log("date or info is empty");
            return
        }


        const res = await mutation.mutateAsync({
            date: date,
            info: info,
        })

        console.log("result", res);

        if (res.id) {
            console.log("create succes");
            setSuccess(true)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Log created succesfully!',
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <div className=" flex justify-center items-center h-screen bg-[#161b22] text-white">
            <form
                className="flex-col w-2/5 border border-zinc-600 p-3 max-w-xl rounded-lg space-y-3 scale-125"
                onSubmit={handleCreateLog}>

                <label>
                    Date
                </label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full px-2 py-1 rounded-md border border-[#5e5e5e] text-zinc-700"
                    required
                />
                <textarea
                    className="w-full px-2 py-1 rounded-md border border-[#5e5e5e] text-zinc-700"
                    rows={5}
                    name="info"
                    required>

                </textarea>
                {success
                    ? <div>
                        <NextLink href="/logboek" className="border border-zinc-600 py-1 text-white px-6 my-2 ">Go Back</NextLink>
                        <p className="text-emerald-700"></p>
                    </div>
                    : <div className='flex justify-between'>
                        <input className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" type="submit" value="Create" />

                        <NextLink href="/logboek">
                            <button className="hover:shadow-form rounded-md border-red-600 bg-red-600  border-2 border-solid   py-3 px-8 ">Cancel</button>
                        </NextLink>
                    </div>
                }
            </form>
        </div>
    )
}


export default CreateLogPage