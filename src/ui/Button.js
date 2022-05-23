import { useEffect } from "react";
import "./Button.css";

const Button = (props) => {
  useEffect(() => {
    props.cssImport && import(`./buttons/${props.cssImport}.css`);
  });

  return <button className={props.className}>{props.children}</button>;
};

export default Button;
