import React, { useState } from 'react'
import NextLink from "next/link"
import { any } from "zod";
import { trpc } from "../utils/trpc"

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
        }
    }

    return (
        <div>
            <div className=" items-center justify-center p-12">
                <div className="mx-auto w-full min-w-[250px] max-w-[550px]">
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 ">
                            <div className="border border-zinc-600 p-3 rounded-lg">
                                <form onSubmit={handleCreateLog}>
                                    <div className="mb-5">
                                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                                            date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            className="w-full rounded-md border border-[#5e5e5e]"
                                            required
                                        />
                                    </div>
                                    <textarea className="w-full  border border-neutral-500" rows={5} name="info" required></textarea>
                                    {success
                                        ? <div>
                                            <NextLink href="/logboek" className="border border-zinc-600 py-1 px-6 my-2 ">Go Back</NextLink>
                                            <p className="text-emerald-700">Succesfully created!</p>
                                        </div>
                                        : <div className='flex justify-between'>
                                            <input className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" type="submit" value="Create" />
                                            <NextLink href="/logboek">
                                                <button className="hover:shadow-form rounded-md border-red-600 bg-red-600  border-2 border-solid   py-3 px-8 ">cancel</button>
                                            </NextLink>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CreateLogPage
