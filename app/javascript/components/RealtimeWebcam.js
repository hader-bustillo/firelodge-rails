import React from "react";

import PerfectSection from "./PerfectSection";
import Calendar from "./Calendar";
import AnimateIn from "./ui/animate-in";
import MountainImages from "./MountainImages";


import { title, subtitle, perfectFeatures } from "./data/perfect-features";

export default function RealtimeWebcam() {
  return (
    <>
      <div className="relative w-screen pb-24  min-h-max">
        <div className="relative h-screen mx-auto max-w-7xl fart">
          <div class="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-4 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 class="text-4xl font-bold tracking-tight text-slate-900">Realtime Mountain Webcams - from Fire Lodge</h2>

          </div>
          <MountainImages />
        </div>
      </div>

      <div className="mx-auto bg-white max-w-7xl pt-20">
        <AnimateIn>
          <PerfectSection
            title={title}
            subtitle={subtitle()}
            features={perfectFeatures}
          />
        </AnimateIn>


        <AnimateIn className="pt-10 mx-8 pb-10">
          <Calendar />
        </AnimateIn>
      </div>
    </>
  );
}
