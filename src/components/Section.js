import "./Section.css";

const Section = (props) => {
  return <section className={props.classes}>{props.children}</section>;
};

export default Section;
