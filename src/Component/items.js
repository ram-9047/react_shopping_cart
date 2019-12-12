import React from "react";

import Sizefilter from "../Component/Sizefilter";
import Showproducts from "../Component/Showproduct";

const items = () => {
  return (
    <div className="flex">
      <Sizefilter />

      <Showproducts />
    </div>
  );
};

export default items;
