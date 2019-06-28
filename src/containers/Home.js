import { connect } from "react-redux";
import { getTopNews, getBanner, getBottomNews } from "../modules/news";

import Home from "../components/Home";

const mapStateToProps = state => {
  return {
    top: getTopNews(state),
    banner: getBanner(state),
    bottom: getBottomNews(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
