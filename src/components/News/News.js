import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import styles from "./News.module.scss";

const News = ({ data }) => {
  return (
    <div className={styles.news}>
      <div className={styles.title}>{data.title}</div>
      <div>{data.text}</div>
      <Route
        render={({ history }) => (
          <div className={styles.button} onClick={() => history.push("/")}>
            back
          </div>
        )}
      />
    </div>
  );
};

News.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default News;
