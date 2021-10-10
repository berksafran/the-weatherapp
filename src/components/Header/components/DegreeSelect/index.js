import { useDispatch, useSelector } from "react-redux";
import { setDegree } from "../../../../store/slices/weatherSlice";

function DegreeSelect() {
  const dispatch = useDispatch();
  const { degree } = useSelector((state) => state.weather);

  const onChangeValue = (event) => dispatch(setDegree(event.target.value));

  return (
    <form>
      <div className="mx-auto max-w-sm text-center flex flex-wrap justify-center items-center p-5">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio rounded-full w-4 h-4 bg-blue-200 border-transparent focus:border-transparent focus:bg-blue-200
              text-blue-700 focus:ring-0 focus:ring-offset-2 focus:ring-blue-500"
            onChange={onChangeValue}
            checked={degree === "celsius"}
            value="celsius"
          />
          <span className="ml-2 md:text-xl">Celsius</span>
        </label>
        <label className="inline-flex items-center mx-5 cursor-pointer">
          <input
            type="radio"
            className="form-radio rounded-full bg-blue-200 border-transparent focus:border-transparent focus:bg-blue-200
              text-blue-700 focus:ring-0 focus:ring-offset-2 focus:ring-blue-500"
            onChange={onChangeValue}
            checked={degree === "fahrenheit"}
            value="fahrenheit"
          />
          <span className="ml-2 md:text-xl">Fahrenheit</span>
        </label>
      </div>
    </form>
  );
}

export default DegreeSelect;
