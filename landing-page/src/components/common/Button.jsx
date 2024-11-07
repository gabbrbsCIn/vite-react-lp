export default function Button({ title }) {
  return (
    <button className="bg-black text-white hover:bg-gray-900 text-gray-800 font-poppins py-2 px-4 rounded shadow">
      {title}
    </button>
  );
}
