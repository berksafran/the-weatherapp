import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../../store/slices/weatherSlice";

const Alert = () => {
  const { visibility, message, subMessage } = useSelector(
    (state) => state.weather.error
  );
  const dispatch = useDispatch();

  const closeCustomAlert = () => {
    dispatch(closeAlert());
  };

  // Please remove the comment if you want that alert to be closed automatically.
  // useEffect(() => {
  //   if (visibility) {
  //     setTimeout(() => dispatch(closeAlert()), 3000);
  //   }
  // }, [visibility, dispatch]);

  return (
    <div
      className={`fixed lg:w-1/2 z-50 left-1/4 opacity-0 transition duration-300 transform-gpu ${
        visibility ? "opacity-100 translate-y-0" : "-translate-y-10"
      }`}
    >
      <div
        className="w-full bg-gray-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div className="w-full flex flex-col">
            <p className="font-bold text-xl">{message}</p>
            <p className="text-md text-gray-500 font-mono">{subMessage}</p>
            <button className="text-right font-bold text-gray-500" onClick={closeCustomAlert}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
