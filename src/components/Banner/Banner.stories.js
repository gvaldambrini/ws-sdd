import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import Banner from "./Banner";

import banner from "../../images/banner.jpg";

storiesOf("Banner", module)
  .addDecorator(StoryRouter())
  .add("default", () => (
    <Banner
      id={"5"}
      title={"BACON IPSUM"}
      text={`Chuck pig andouille, strip steak leberkas spare ribs.`}
      image={banner}
    />
  ))
  .add("long title", () => (
    <Banner
      id={"6"}
      title={"BACON IPSUM DOLOR AMET TURKEY KIELBASA"}
      text={`Strip steak pork chop tail.`}
      image={banner}
    />
  ));
