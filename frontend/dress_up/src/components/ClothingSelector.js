import { useState } from "react";

import ClothingSelectorType from "./ClothingSelectorType";
import classes from "./util/TabGroup.module.css";
import Tab from "./util/Tab";

const tabsList = [
  { category: "top", label: "Tops" },
  { category: "bottom", label: "Bottoms" },
  { category: "dress", label: "Dresses" },
  { category: "shoes", label: "Shoes" },
  { category: "accessory", label: "Accessories" },
];

const ClothingSelector = (props) => {
  const [active, setActive] = useState(tabsList[0].category);

  const onTabClick = (category) => {
    setActive(category);
  }

  const onSelectItem = (itemId) => {
    props.onSelectItem(itemId);
  };

  return (
    <div className={classes.tabPicker}>
      <div className={classes["button-group"]}>
        {tabsList.map((tab) => (
          <Tab
            key={tab.category}
            active={active === tab.category}
            onClick={onTabClick.bind(null, tab.category)}
          >
            {tab.label}
          </Tab>
        ))}
      </div>
      <div className={classes["tab-contents"]}>
        {tabsList.map((tab) => (
          <div
            key={tab.category}
            id={`${tab.category}_content_${props.name}`}
            className={`${classes.content} ${
              active === tab.category ? classes.active : ""
            }`}
          >
            <ClothingSelectorType
              type={tab.category}
              active={active === tab.category}
              onSelectItem={onSelectItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingSelector;
