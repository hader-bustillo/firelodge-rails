import React from "react";
import classNames from "../../utils/classnames";

export default function ModalBackground({ className }) {
  return (
    <div
      className={classNames(
        "fixed inset-0 bg-opacity-25 bg-slate-400 backdrop-blur-2xl",
        className
      )}
    />
  );
}
