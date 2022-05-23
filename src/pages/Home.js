import Section from "../components/Section";
import Container from "../ui/Container";
import Button from "../ui/Button";
const Home = () => {
  const buttons = [
    { name: "three-layers", text: "Cover" },
    { name: "three-layers-part2", text: "Appear" },
    { name: "border-growing", text: "Bigger borders?" },
    { name: "skewed", text: "Skewed" },
    { name: "ripple", text: "Ripple" },
    { name: "diamond-fill", text: "Close" },
    { name: "futuristic", text: "Open up" },
    { name: "border-swap", text: "Swap 'em" },
    { name: "border-swap-part2", text: "Swap again" },
    { name: "circles-x3", text: "Circles" },
    { name: "firstletter-expanding", text: "Button" },
    { name: "flash", text: "Flash" },
    { name: "diagonal-replace", text: "Replace me" },
    { name: "split", text: "Four sides" },
    { name: "split-updown", text: "Up / down" },
    { name: "rotate-in", text: "Rotate in" },
    { name: "tomato", text: "Tomato" },
    { name: "two-cuts", text: "2 cuts" },
    { name: "slash", text: "Slash" },
    { name: "waves", text: "Waves" },
  ];

  return (
    <>
      <Section classes="curved-section purple dark-text">
        <h1>Simple animations</h1>
        <p>Hover over the buttons</p>
        <Container>
          {buttons.map((button) => (
            <Button className={button.name} cssImport={button.name}>
              <span></span>
              {button.text}
              <div></div>
            </Button>
          ))}
        </Container>
        <div className="curve"></div>
      </Section>
      <Section classes="dark light-text">
        <h1>Fancy curves</h1>
        <p>Nice curves you got there website</p>
      </Section>
      <Section classes="orange-gradient-tb light-text">
        <h1>Fancy curves</h1>
        <p>Nice curves you got there website</p>
      </Section>
      <Section classes="dark light-text center wavy-section">
        <h1>Fancy curves</h1>
        <p>Nice curves you got there website</p>
      </Section>
      <Section classes="orange-gradient-bt light-text">
        <h1>Fancy curves</h1>
        <p>Nice curves you got there website</p>
      </Section>
      <Section classes="dark light-text wave-center center">
        <h1>Contact me</h1>
        <p>Some contact information</p>
      </Section>
    </>
  );
};

export default Home;
