import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";

import Banner from "../Banner";
import VerticalBox from "../VerticalBox";
import HorizontalBox from "../HorizontalBox";

import styles from "./Home.module.scss";

import greca from "./greca.jpg";
import points from "./points.jpg";

const Home = props => {
  return (
    <div className={styles.home}>
      <div className={styles.top}>
        <div className={styles.news}>
          <div className={styles.topleft}>
            <div className={styles.leftTitle}>2019</div>
            <div className={styles.leftSubtitle}>Bacon ipsum dolor amet</div>
            <img src={greca} alt="" />
            <Link to={`/news/${props.top.left.id}`} className={styles.title}>
              {props.top.left.title}
            </Link>
            <div className={styles.topnewsNewstext}>{props.top.left.text}</div>
            <Route
              render={({ history }) => (
                <div
                  className={styles.button}
                  onClick={() => history.push(`/news/${props.top.left.id}`)}
                >
                  read more
                </div>
              )}
            />
          </div>
          <div>
            <HorizontalBox {...props.top.right1} />
            <HorizontalBox {...props.top.right2} />
          </div>
        </div>
      </div>
      <Banner {...props.banner} />
      <div className={styles.bottom}>
        <div className={styles.bottomleft}>
          <VerticalBox {...props.bottom.left1} type={"large"} />
          <VerticalBox {...props.bottom.left2} type={"large"} />
        </div>
        <div>
          <HorizontalBox {...props.bottom.right} />
          <div className={styles.bottomright}>
            <VerticalBox {...props.bottom.bottomright1} />
            <VerticalBox {...props.bottom.bottomright2} />
          </div>
        </div>
      </div>
      <img src={points} alt="" />
    </div>
  );
};

Home.propTypes = {
  top: PropTypes.object.isRequired,
  banner: PropTypes.object.isRequired,
  bottom: PropTypes.object.isRequired
};

export default Home;
