export default function Button({ title }) {
  return (
    <button className="bg-white font-medium text-blue-900 text-sm font-poppins py-1 px-2 rounded-md transform hover:scale-110 transition-transform duration-200 ease-out ">
      {title}
    </button>
  );
}
