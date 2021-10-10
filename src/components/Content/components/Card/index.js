import { useSelector, useDispatch } from "react-redux";
import { convertCelsiusToFahreneit } from "../../../../helpers/temperature";
import { setSelectedDate } from "../../../../store/slices/weatherSlice";

function Card({ data }) {
  const dispatch = useDispatch();
  const { degree } = useSelector(
    (state) => state.weather,
    (prev, curr) => {
      if (prev.degree !== curr.degree) return false;
      return true;
    }
  );

  const handleCardClick = () => dispatch(setSelectedDate(data));

  return (
    <div
      className="max-w-xs bg-white rounded overflow-hidden shadow-lg m-10 py-5 pt-7 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex justify-center items-center flex-row">
        <div className="font-bold text-4xl">
          {degree === "celsius"
            ? data.aveTemp.toFixed(2) + " °C"
            : convertCelsiusToFahreneit(data.aveTemp) + " °F"}
        </div>
      </div>
      <div className="flex flex-row justify-center px-6 pt-6">
        <span className="bg-gray-200 rounded p-1 font-semibold text-gray-700 m-2 text-center text-lg">
          {data.altText}
        </span>
      </div>
    </div>
  );
}

export default Card;
