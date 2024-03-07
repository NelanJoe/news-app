import PropTypes from "prop-types";
import News from "./News";

export default function NewsList({ dataNews }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 auto-rows-fit">
      {dataNews?.map((news, index) => (
        <News key={index} news={news} index={index} />
      ))}
    </div>
  );
}

NewsList.propTypes = {
  dataNews: PropTypes.array,
};
