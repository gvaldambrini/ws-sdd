import img1 from "../images/img_1.jpg";
import img2 from "../images/img_2.jpg";
import img3 from "../images/img_3.jpg";
import img4 from "../images/img_4.jpg";
import img5 from "../images/img_5.jpg";
import img6 from "../images/img_6.jpg";
import banner from "../images/banner.jpg";

// ------------------------------------
// Constants

// ------------------------------------
// Action creators

// ------------------------------------
// Selectors

const pickRandomNews = news => {
  return news[Math.round(Math.random() * (news.length - 1))];
};

export const getTopNews = state => ({
  left: pickRandomNews(state.news.news),
  right1: { ...pickRandomNews(state.news.news), image: img1 },
  right2: { ...pickRandomNews(state.news.news), image: img2 }
});

export const getBanner = state => ({
  ...pickRandomNews(state.news.news),
  image: banner
});

export const getNews = (state, id) => {
  for (const n of state.news.news) {
    if (n.id === id) {
      return n;
    }
  }
};

export const getBottomNews = state => ({
  left1: { ...pickRandomNews(state.news.news), image: img3 },
  left2: { ...pickRandomNews(state.news.news), image: img4 },
  right: pickRandomNews(state.news.news),
  bottomright1: { ...pickRandomNews(state.news.news), image: img5 },
  bottomright2: { ...pickRandomNews(state.news.news), image: img6 }
});

// ------------------------------------
// Store & reducer

const initialState = {
  news: [
    {
      id: "1",
      title: "Spicy jalapeno bacon ipsum dolor amet",
      text: `Meatloaf meatball turducken pork belly t-bone, kevin
        beef doner porchetta prosciutto.`
    },
    {
      id: "2",
      title: "Bacon ipsum dolor amet picanha filet mignon",
      text: `Shankle beef ribs ball tip alcatra pork belly spare
        ribs capicola short loin salami shank.`
    },
    {
      id: "3",
      title: "Pancetta beef turducken tongue pork",
      text: `Porchetta bresaola alcatra t-bone beef ribs turkey salami.
        Burgdoggen sirloin pork doner swine ham.`
    },
    {
      id: "4",
      title: "Ham pastrami short ribs cupim",
      text: `Pancetta pastrami shoulder hamburger.`
    },
    {
      id: "5",
      title: "Ball tip frankfurter porchetta",
      text: `Bacon shoulder t-bone shankle tongue turkey cupim sausage.`
    },
    {
      id: "6",
      title: "Shank pastrami ham hock ball tip ham",
      text: `Bresaola shoulder tenderloin hamburger tail bacon filet mignon. `
    },
    {
      id: "7",
      title: "Burgdoggen beef ribs t-bone",
      text: `Tenderloin jerky andouille, burgdoggen chicken turducken
        tail boudin pastrami short ribs.`
    },
    {
      id: "8",
      title: "Bresaola turkey sausage",
      text: `Jerky rump pig, turkey fatback tenderloin corned beef flank
        turducken.`
    },
    {
      id: "9",
      title: "Kielbasa swine brisket ham sirloin",
      text: `Landjaeger boudin meatball sausage pork chop prosciutto
        bacon pork tail bresaola biltong.`
    },
    {
      id: "10",
      title: "Burgdoggen sirloin tenderloin",
      text: `Chuck capicola drumstick, jerky pork bresaola ribeye cow.`
    },
    {
      id: "11",
      title: "Beef tongue rump jerky",
      text: `Short ribs shankle ribeye andouille biltong meatball venison
        pork loin pastrami kielbasa picanha.`
    },
    {
      id: "12",
      title: "Bresaola shoulder pork loin",
      text: `Kielbasa sausage shoulder ball tip turkey turducken tongue,
        fatback beef landjaeger sirloin.`
    }
  ]
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
