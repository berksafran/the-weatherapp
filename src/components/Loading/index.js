import { useSelector } from "react-redux";

export default function Loading() {
  const { loading } = useSelector(
    (state) => state.weather,
    // Prevent unnecessary rerendering with this equality function
    (prev, curr) => {
      if (prev.loading !== curr.loading) return false;
      return true;
    }
  );
  return (
    <div
      className={`absolute h-screen w-screen 
    bg-gray-200 flex justify-center 
    items-center transition-all duration-200 ${
      !loading ? "animate-fade-out z-0" : "z-40"
    }`}
    >
      <div className="flex items-center justify-center space-x-2 animate-pulse">
        <div className="w-8 h-8 bg-red-300 rounded-full"></div>
        <div className="w-8 h-8 bg-red-300 rounded-full"></div>
        <div className="w-8 h-8 bg-red-300 rounded-full"></div>
      </div>
    </div>
  );
}
