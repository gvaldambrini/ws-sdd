import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import styles from "./VerticalBox.module.scss";

/**
 * A news displayed in a "vertical" box: the image on the top and the
 * title + text on the bottom.
 * */
const VerticalBox = props => {
  let footer;
  if (props.type === "default") {
    footer = (
      <div className={styles.footer}>
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
    );
  }

  const mainCls =
    props.type === "default" ? styles.verticalbox : styles.verticalboxLarge;

  return (
    <div className={mainCls}>
      <img src={props.image} alt={props.title} />
      <Link to={`/news/${props.id}`} className={styles.title}>
        {props.title}
      </Link>
      <div className={styles.text}>{props.text}</div>
      {footer}
    </div>
  );
};

VerticalBox.propTypes = {
  /** the news id */
  id: PropTypes.string.isRequired,
  /** the image associated with the news */
  image: PropTypes.string,
  /** the news title */
  title: PropTypes.string.isRequired,
  /** the news description */
  text: PropTypes.string.isRequired,
  /** the box type: default (184px) or large (236px) */
  type: PropTypes.oneOf(["default", "large"]).isRequired
};

VerticalBox.defaultProps = {
  type: "default"
};

export default VerticalBox;
