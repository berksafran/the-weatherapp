import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../../../../store/slices/weatherThunk";

function RefreshButton() {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(fetchWeatherData());
  };

  return (
    <div className="p-5">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  );
}

export default RefreshButton;
