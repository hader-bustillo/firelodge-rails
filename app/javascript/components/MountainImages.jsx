import React from "react";

export default function MountainImages() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <article key='webcam' className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src='https://webcams.sunflower-vacations.com/images/latest'
                  width="1620"
                  height="970"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  alt="A warm get away to the Fire Lodge deep in the middle of winter."
              />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      Realtime Mountain Webcam
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Check out a realtime status of the neighborhood, this is pointing up the street toward Summit West. These images refresh every 15 minutes.
                  </p>
                </div>
              </div>
            </article>

            <article key='timelapse' className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <video
                  src='https://webcams.sunflower-vacations.com/uploads/timelapse.mp4'
                  controls
                  width="1620"
                  height="970"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  alt="A warm get away to the Fire Lodge deep in the middle of winter."
              />
                <div className="" />
              </div>
              <div className="max-w-xl">

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      2023 Season Timelapse
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Check out how the year evolves from shoulder season into winter at the pass! Updated daily so it always shows todays current conditions!
                  </p>
                </div>
              </div>
            </article>
        </div>
      </div>
    </div>
  )
}
