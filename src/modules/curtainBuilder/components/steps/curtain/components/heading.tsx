import style from "../../../../styles/builder.module.scss";

const Heading = ({ children, value, chosenTab }) => {
  return (
    <>
      {value === chosenTab && (
        <h2 className={style.sidebar__heading}>{children}</h2>
      )}
    </>
  );
};

export default Heading;
