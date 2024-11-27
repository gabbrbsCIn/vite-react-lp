export default function Button({ title }) {
  return (
    <button className="bg-black text-white hover:bg-gray-900 text-sm text-gray-800 font-poppins py-1 px-2 rounded shadow">
      {title}
    </button>
  );
}
