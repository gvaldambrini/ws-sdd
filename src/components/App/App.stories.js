import React from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import StoryRouter from "storybook-react-router";

import App from "./App";
import News from "../News";
import Home from "../Home";

import { homeData } from "../Home/Home.stories";

storiesOf("App", module)
  .addDecorator(StoryRouter({ "/news/*": linkTo("App", "news") }))
  .add("home", () => (
    <App>
      <Home
        top={homeData.top}
        banner={homeData.banner}
        bottom={homeData.bottom}
      />
    </App>
  ));

storiesOf("App", module)
  .addDecorator(StoryRouter({ "/": linkTo("App", "home") }))
  .add("news", () => (
    <App>
      <News data={homeData.banner} />
    </App>
  ));
