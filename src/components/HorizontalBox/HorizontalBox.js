import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import styles from "./HorizontalBox.module.scss";
import points from "./points_h.jpg";

/**
 * A box which display a news as an image (optional) on the left and the
 * title + text on the right.
 */
const HorizontalBox = props => {
  let image;
  if (props.image) {
    image = <img src={props.image} alt={props.title} />;
  }

  return (
    <div className={styles.horizontalbox}>
      <div className={styles.content}>
        {image}
        <div>
          <Link to={`/news/${props.id}`} className={styles.title}>
            {props.title}
          </Link>
          <div className={styles.text}>{props.text}</div>
        </div>
      </div>
      <div className={styles.footer}>
        <img src={points} alt="" />
        <Route
          render={({ history }) => (
            <div
              className={styles.button}
              onClick={() => history.push(`/news/${props.id}`)}
            >
              read more
            </div>
          )}
        />
      </div>
    </div>
  );
};

HorizontalBox.propTypes = {
  /** the news id */
  id: PropTypes.string.isRequired,
  /** the image associated with the news */
  image: PropTypes.string,
  /** the news title */
  title: PropTypes.string.isRequired,
  /** the news description */
  text: PropTypes.string.isRequired
};

export default HorizontalBox;
