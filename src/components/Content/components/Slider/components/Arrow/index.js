const Arrow = ({ onClick, isNext, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer m-5 my-8 lg:my-0 absolute top-0 left-0 hover:text-indigo-500 ${
        isNext ? "left-20" : "left-0"
      }`}
    >
      {isNext ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 m-0 p-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      )}
    </button>
  );
};

export default Arrow;
