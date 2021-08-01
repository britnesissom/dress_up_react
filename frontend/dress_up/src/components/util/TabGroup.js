import { useState } from "react";

import ClothingSelectorType from "../ClothingSelectorType";
import classes from "./TabGroup.module.css";
import Tab from "./Tab";

const TabGroup = (props) => {
  const [active, setActive] = useState(props.tabs[0].category);

  return (
    <>
      <div className={classes["button-group"]}>
        {props.tabs.map((tab) => (
          <Tab
            key={tab.category}
            active={active === tab.category}
            onClick={() => setActive(tab.category)}
          >
            {tab.label}
          </Tab>
        ))}
      </div>
      <div className={classes["tab-contents"]}>
        {props.tabs.map((tab) => (
          <div
            key={tab.category}
            id={`${tab.category}_content_${props.name}`}
            className={`${classes.content} ${
              active === tab.category ? classes.active : ""
            }`}
          >
            <ClothingSelectorType type={tab.category} id={props.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TabGroup;
