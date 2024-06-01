import React from "react";
import MesBtn from "./MesBtn";

const Messes = () => {
  return (
    <div className="flex">
      <MesBtn n={-3} />
      <MesBtn n={-2} />
      <MesBtn n={-1} />
      <MesBtn n={0} />
    </div>
  );
};

export default Messes;
