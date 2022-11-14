import React, { Fragment, useState } from 'react'
import NextLink from "next/link"
import { any } from "zod";
import { trpc } from "../utils/trpc"
import { Dialog, Transition } from '@headlessui/react';

const PopOverButton = () => {
    let [isOpen, setIsOpen] = useState(true)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  
    return (
      <>
        <div className="flex justify-between">
          <button type="button" onClick={openModal} className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            create new
          </button>
        </div>
  
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      log created successfully
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        your new log has been created
                      </p>
                    </div>
  
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        thank you!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }
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
                                            {/* <input className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" type="submit" value="Create" /> */}
                                            <PopOverButton />
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