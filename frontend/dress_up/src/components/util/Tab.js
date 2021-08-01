import classes from "./Tab.module.css";

const Tab = (props) => {
  const classList = `${classes.tab} ${props.active ? classes.active : ""}`;

  return (
    <button onClick={props.onClick} className={classList}>
      {props.children}
    </button>
  );
};

export default Tab;
