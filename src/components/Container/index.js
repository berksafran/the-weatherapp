export default function Container({children}) {
  return (
    <div className="relative w-screen xl:w-4/5 h-screen mx-auto bg-gray-100 flex flex-col justify-start items-center md:p-5 py-10">
      {children}
    </div>
  );
}
