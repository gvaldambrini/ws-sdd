import { connect } from "react-redux";
import { getNews } from "../modules/news";

import News from "../components/News";

const mapStateToProps = (state, ownProps) => {
  return {
    data: getNews(state, ownProps.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  null
)(News);
