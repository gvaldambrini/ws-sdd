import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";

import styles from "./Banner.module.scss";

import top from "./stripe_top.jpg";
import bottom from "./stripe_bottom.jpg";
import left from "./stripe_left.jpg";

const Banner = props => {
  return (
    <div className={styles.banner}>
      <img src={top} alt="" />
      <div className={styles.main}>
        <img src={left} alt="" />
        <div className={styles.content}>
          <div className={styles.textContent}>
            <Link to={`/news/${props.id}`} className={styles.title}>
              {props.title}
            </Link>
            <div className={styles.text}>{props.text}</div>
          </div>
          <img src={props.image} alt={props.title} />
          <Route
            render={({ history }) => (
              <div
                className={styles.button}
                onClick={() => history.push(`/news/${props.id}`)}
              >
                <div className={styles.buttonText}>read more</div>
              </div>
            )}
          />
        </div>
      </div>
      <img src={bottom} alt="" />
    </div>
  );
};

Banner.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Banner;
