import React from "react";
import DegreeSelect from "./components/DegreeSelect";
import RefreshButton from "./components/RefreshButton";

function Header() {
  return (
    <div className="w-full flex flex-wrap md:justify-between justify-center items-center md:p-5">
      <h1 className="text-2xl font-bold text-blue-500 p-5">The Weather App</h1>
      <DegreeSelect />
      <RefreshButton />
    </div>
  );
}

export default Header;
