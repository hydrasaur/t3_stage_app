import { loggerLink } from "@trpc/client"
import Link from "next/link"

const CreateLogPage = () => {


    const handleCreateLog = (e: React.SyntheticEvent) => {
        console.log("function triggerd");
        
        e.preventDefault();
        const target = e.target as typeof e.target & {
          date: { value: string };
          dayInfo: { value: string };
        };
        const date = target.date.value; // typechecks!
        const info = target.dayInfo.value; // typechecks!

        console.log(date, info);
    }


    return (
        <div>
            <Link href="/logboek">
                <button className="border-red-600 bg-red-600  border-2 border-solid rounded p-1 m-2">cancel</button>
            </Link>
            <div className=" items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
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
                                        />
                                    </div>
                                    <textarea className="w-full  border border-neutral-500" rows={5} name="dayInfo"></textarea>
                                    <input className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" type="submit" value="Create"/>
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
