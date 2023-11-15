import classes from "./nav.module.scss";

export const NavBlock = () => {
  return (
    <div className={classes.NavBlock}>
      <div className={`${classes.content} content`}>
        <h1>Code decode</h1>
        <span>Наслаждайтесь кодированием и декодированием!</span>
      </div>
    </div>
  );
};
