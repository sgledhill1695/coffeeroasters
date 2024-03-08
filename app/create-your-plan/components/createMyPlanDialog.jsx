import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';


export default function CreateMyPlanDialog({openDialog, setOpenDialog, questions}) {

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={openDialog} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenDialog}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed items-center inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex justify-center p-4  sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-sm bg-white shadow-xl transition-all sm:my-8  sm:max-w-[600px] lg:max-w-[540px] pb-[30px]">
                                <div>
                                    <div>
                                        <Dialog.Title as="h3" className=" text-white fraunces-bold text-[28px] py-[30px] bg-[#333D4B] text-center sm:text-start sm:px-[50px]">
                                            Order Summary
                                        </Dialog.Title>
                                        <div className="px-[25px] mt-[50px] sm:px-[50px]">
                                            <p className="text-[#83888F] fraunces-bold text-[24px] leading-[40px] mt-[25px] sm:mt-[15px]">
                                                "I drink my coffee as <span className="text-[#0E8784]">
                                                    {questions[0].answers.map(a => {
                                                        if (a.active) {
                                                            return (
                                                                <>
                                                                    {a.answer}
                                                                </>
                                                            )
                                                        }
                                                    })}
                                                </span> with a <span className="text-[#0E8784]">
                                                    {questions[1].answers.map(a => {
                                                        if (a.active) {
                                                            return (
                                                                <>
                                                                    {a.answer}
                                                                </>
                                                            )
                                                        }
                                                    })}</span> type of bean. <span className="text-[#0E8784]">
                                                    {questions[2].answers.map(a => {
                                                        if (a.active) {
                                                            return (
                                                                <>
                                                                    {a.answer}
                                                                </>
                                                            )
                                                        }
                                                    })}</span> ground ala <span className="text-[#0E8784]">
                                                    {questions[3].answers.map(a => {
                                                        if (a.active) {
                                                            return (
                                                                <>
                                                                    {a.answer}
                                                                </>
                                                            )
                                                        }
                                                    })}</span> sent to me <span className="text-[#0E8784]">
                                                    {questions[4].answers.map(a => {
                                                        if (a.active) {
                                                            return (
                                                                <>
                                                                    {a.answer}
                                                                </>
                                                            )
                                                        }
                                                    })}</span>."
                                            </p>

                                            <p className='text-[#333D4B] text-[15px] sm:text-[16px] mt-[10px]'>
                                                Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
                                            </p>

                                            <button className='sm:hidden primary-button w-full mt-[25px]'>
                                                Checkout - £14.00 / mo
                                            </button>

                                            <div className='hidden sm:flex justify-between items-center mt-[50px]'>
                                                <p className='text-[32px] text-[#333D4B] fraunces-bold items-center'>
                                                    £14.00 / mo
                                                </p>
                                                <button className='primary-button max-w-[220px]'>
                                                    Checkout
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
