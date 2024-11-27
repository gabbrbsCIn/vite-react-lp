import logo from "../../assets/LOGO.svg"

export default function Logo() {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer max-sm:size-32">
      <img src={logo} width={180} height={200} alt="" />
    </div>
      
  );
}
