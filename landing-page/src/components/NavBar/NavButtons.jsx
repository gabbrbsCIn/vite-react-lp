import Button from "../common/Button";

export default function NavButtons({ type = "row" }) {
  const space = type === "col" ? "space-y-3" : "";

  return (
    <nav className={`flex flex-${type} ${space}`}>
      <Button title="Home" />
      <Button title="About us" />
      <Button title="Services" />
      <Button title="Contact us" />
    </nav>
  );
}
