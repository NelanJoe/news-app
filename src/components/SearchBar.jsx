import PropTypes from "prop-types";

export default function SearchBar({ keyword, onChangeHandler }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search news..."
        className="px-4 py-1.5 border border-purple-500 border-dashed focus:outline-purple-500 rounded-md w-full text-slate-700"
        value={keyword}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
