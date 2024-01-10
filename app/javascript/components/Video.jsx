import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import fireLodgeVideo from "../image/fire-lodge-video.jpg";

import ModalBackground from "./ModalBackground";

export default function VideoSection() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex justify-center w-screen pt-16 mx-auto bg-white ">
        <div className="w-full overflow-hidden align-middle">
          <div
            className="relative object-center overflow-hidden aspect-w-16 aspect-h-9"
            onClick={openModal}
            role="button"
          >
            <img
              src={fireLodgeVideo}
              alt="House Front"
              className="object-cover object-center w-full h-full grayscale-75 "
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="flex items-center justify-center w-16 h-16 text-white rounded-full md:w-32 md:h-32 lg:w-48 lg:h-48 bg-slate-200/70">
                <span className="sr-only">Play video</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-2xl"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
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
            <div>
              <ModalBackground />
            </div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-6xl p-6 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      onClick={() => closeModal(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                  <iframe
                    width="100%"
                    height="620"
                    src="https://www.youtube.com/embed/tMK-V0YBc8A?autoplay=1"
                    title="Fire Lodge feature video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                  ></iframe>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
