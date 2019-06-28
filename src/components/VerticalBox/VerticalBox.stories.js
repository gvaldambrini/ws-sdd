import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import { withInfo } from "@storybook/addon-info";
import VerticalBox from "./VerticalBox";

import img4 from "../../images/img_4.jpg";
import img5 from "../../images/img_5.jpg";

storiesOf("VerticalBox", module)
  .addDecorator(withInfo)
  .addDecorator(StoryRouter())
  .add("default", () => (
    <VerticalBox
      id={"3"}
      title={"Spicy jalapeno bacon ipsum dolor amet pancetta"}
      text={`Chicken prosciutto meatball salami tongue pork loin capicola pork
        chop kielbasa tenderloin spare ribs.`}
      image={img5}
    />
  ))
  .add("large", () => (
    <VerticalBox
      id={"4"}
      title={"Ground round strip steak chicken, t-bone sirloin chuck"}
      text={`Strip steak pork chop tail, meatloaf turducken short loin landjaeger bresaola
        pancetta bacon alcatra.`}
      type={"large"}
      image={img4}
    />
  ));
