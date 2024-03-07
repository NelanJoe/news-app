import PropTypes from "prop-types";

export default function Skeleton({ number }) {
  return Array(number)
    .fill(0)
    .map((el, index) => (
      <div key={index}>
        <div className="flex flex-col shadow-lg bg-white w-[300px] h-fit items-center gap-2 p-2 rounded">
          <div className="bg-gray-300 rounded-lg w-full h-[120px] animate-pulse"></div>
          <div className="flex flex-col w-full gap-2">
            <span className="w-full h-3 bg-gray-300 rounded-full animate-pulse"></span>
            <span className="w-9/12 h-3 bg-gray-300 rounded-full animate-pulse"></span>
            <span className="w-8/12 h-3 bg-gray-300 rounded-full animate-pulse"></span>
            <span className="w-full h-6 bg-gray-300 rounded-md animate-pulse"></span>
          </div>
        </div>
      </div>
    ));
}

Skeleton.propTypes = {
  number: PropTypes.number,
};
