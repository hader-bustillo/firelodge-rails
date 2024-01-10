import React, { useState, useEffect } from "react";
import { table, minifyItems } from "../utils/airtable.js";

import Modal from "./Modal.jsx";
import classNames from "../utils/classnames.js";

export default function Amenities() {
  const [isOpen, setIsOpen] = useState(false);
  const [amenitiesList, setAmenitiesList] = useState([]);

  const baseStyles = {
    solid:
      "group inline-flex items-center justify-center rounded-md py-3 px-6 text-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  };
  const variantStyles = {
    solid: {
      emerald:
        "text-white hover:text-slate-100 hover:bg-emerald-500 active:bg-emerald-800 active:text-yellow-100 focus-visible:outline-emerald-600",
    },
  };

  let currentCategory = null;

  const amenitiesListItems = amenitiesList.map((item) => {
    let { category } = item;
    let categoryHeading = null;

    if (currentCategory !== category) {
      categoryHeading = (
        <h3 className="mt-6 text-xl font-semibold leading-6 text-slate-900">
          {category}
        </h3>
      );

      currentCategory = category;
    }

    return (
      <div key={item.id} className="mt-4">
        {categoryHeading}
        <p className="mt-2 text-base text-slate-800">{item.label}</p>
        {item.note && (
          <p className="mt-0 text-sm text-slate-500">{item.note}</p>
        )}
      </div>
    );
  });

  useEffect(() => {
    (async () => {
      try {
        const records = await table.select({ view: "category" }).firstPage();
        const amenitiesList = minifyItems(records);
        setAmenitiesList(amenitiesList);
      } catch (error) {
        console.log(error);
        setAmenitiesList([]);
      }
    })();
  }, []);

  return (
    <>
      <button
        // className={`${baseStyles.solid} ${variantStyles.solid.emerald} mt-6 bg-[#DB4327] hover:bg-yellow-500 active:bg-yellow-600 transition-colors duration-150`}
        className={classNames(
          baseStyles.solid,
          variantStyles.solid.emerald,
          "mt-6 bg-[#DB4327] transition-colors duration-150"
        )}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        View All Amenities
      </button>

      <Modal isOpen={isOpen} setOpen={setIsOpen} title="Fire Lodge Amenities">
        <div className="">
          {amenitiesListItems.length > 0 &&
            amenitiesListItems.map((amenity) => amenity)}
        </div>
      </Modal>
    </>
  );
}
