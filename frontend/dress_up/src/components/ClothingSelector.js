import React from "react";
import TabGroup from "./util/TabGroup";

const ClothingSelector = (props) => {
  const tabsList = [
    { category: "top", label: "Tops" },
    { category: "bottom", label: "Bottoms" },
    { category: "dress", label: "Dresses" },
    { category: "shoes", label: "Shoes" },
    { category: "accessory", label: "Accessories" },
  ];

  return <TabGroup name={props.name} tabs={tabsList} id={props.id} />;
};

export default ClothingSelector;
