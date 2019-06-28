import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import { withInfo } from "@storybook/addon-info";
import HorizontalBox from "./HorizontalBox";

import img1 from "../../images/img_1.jpg";

storiesOf("HorizontalBox", module)
  .addDecorator(withInfo)
  .addDecorator(StoryRouter())
  .add("with image", () => (
    <HorizontalBox
      id={"1"}
      title={"Bacon ipsum dolor amet picanha filet mignon"}
      text={`Brisket kielbasa ground round burgdoggen. Jerky ham cow pig.
       Leberkas bacon frankfurter pancetta ham beef rump venison fatback jerky
       chuck pork chop.`}
      image={img1}
    />
  ))
  .add("without image", () => (
    <HorizontalBox
      id={"2"}
      title={"Bacon ipsum dolor amet porchetta ribeye chicken flank pork"}
      text={`Jowl sirloin ground round, frankfurter fatback spare ribs tenderloin
       venison leberkas strip steak. Porchetta burgdoggen sirloin alcatra sausage
       short ribs kielbasa, ribeye flank corned beef fatback turkey swine picanha.`}
    />
  ));
