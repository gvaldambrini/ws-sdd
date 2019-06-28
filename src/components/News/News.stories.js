import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import News from "./News";

storiesOf("News", module)
  .addDecorator(StoryRouter())
  .add("default", () => {
    return (
      <News
        data={{
          id: "4",
          title: "BACON IPSUM",
          text: `Chuck pig andouille, strip steak leberkas spare ribs.`
        }}
      />
    );
  });
