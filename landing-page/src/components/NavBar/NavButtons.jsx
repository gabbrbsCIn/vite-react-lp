import Button from "../common/Button";

export default function NavButtons({ type = "row" }) {
  return (
    <nav className={`flex flex-${type}`}>
      <Button title="Home" />
      <Button title="About us" />
      <Button title="Services" />
      <Button title="Portfolio" />
      <Button title="Pages" />
      <Button title="Contact us" />
    </nav>
  );
}
