import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import Home from "./Home";

import img1 from "../../images/img_1.jpg";
import img2 from "../../images/img_2.jpg";
import img3 from "../../images/img_3.jpg";
import img4 from "../../images/img_4.jpg";
import img5 from "../../images/img_5.jpg";
import img6 from "../../images/img_6.jpg";
import banner from "../../images/banner.jpg";

export const homeData = {
  top: {
    left: {
      id: "1",
      title: "Spicy jalapeno bacon",
      text: `Spare ribs strip steak salami venison tail cupim
        pork fatback ham hock pork loin bacon beef, biltong pig rump.`
    },
    right1: {
      id: "2",
      title: "Bacon ipsum dolor amet picanha filet mignon",
      text: `Brisket kielbasa ground round burgdoggen. Jerky ham cow pig.
        Leberkas bacon frankfurter pancetta ham beef rump venison fatback jerky
        chuck pork chop.`,
      image: img1
    },
    right2: {
      id: "3",
      title: "Bacon ipsum dolor amet picanha filet mignon",
      text: `Brisket kielbasa ground round burgdoggen. Jerky ham cow pig.
        Leberkas bacon frankfurter pancetta ham beef rump venison fatback jerky
        chuck pork chop.`,
      image: img2
    }
  },
  banner: {
    id: "4",
    title: "BACON IPSUM",
    text: `Chuck pig andouille, strip steak leberkas spare ribs.`,
    image: banner
  },
  bottom: {
    left1: {
      id: "5",
      title: "Ground round strip steak chicken, t-bone sirloin chuck",
      text: `Strip steak pork chop tail, meatloaf turducken short loin landjaeger bresaola
        pancetta bacon alcatra.`,
      image: img3
    },
    left2: {
      id: "6",
      title: "Ground round strip steak chicken, t-bone sirloin chuck",
      text: `Strip steak pork chop tail, meatloaf turducken short loin landjaeger bresaola
        pancetta bacon alcatra.`,
      image: img4
    },
    right: {
      id: "7",
      title: "Bacon ipsum dolor amet porchetta ribeye chicken flank pork",
      text: `Jowl sirloin ground round, frankfurter fatback spare ribs tenderloin
        venison leberkas strip steak. Porchetta burgdoggen sirloin alcatra sausage
        short ribs kielbasa, ribeye flank corned beef fatback turkey swine picanha.`
    },
    bottomright1: {
      id: "8",
      title: "Spicy jalapeno bacon ipsum dolor amet pancetta",
      text: `Chicken prosciutto meatball salami tongue pork loin capicola pork
        chop kielbasa tenderloin spare ribs.`,
      image: img5
    },
    bottomright2: {
      id: "9",
      title: "Spicy jalapeno bacon ipsum dolor amet pancetta",
      text: `Chicken prosciutto meatball salami tongue pork loin capicola pork
        chop kielbasa tenderloin spare ribs.`,
      image: img6
    }
  }
};

storiesOf("Home", module)
  .addDecorator(StoryRouter())
  .add("default", () => {
    return (
      <Home
        top={homeData.top}
        banner={homeData.banner}
        bottom={homeData.bottom}
      />
    );
  });
