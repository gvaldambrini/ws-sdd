import reducer, { getTopNews, getBanner, getBottomNews } from "./news";

test("handle an unknown action", () => {
  const newState = reducer();
  expect(newState).toHaveProperty("news");
});

test("get the top news", () => {
  const state = reducer();
  const topNews = getTopNews({ news: state });

  for (const k of ["left", "right1", "right2"]) {
    expect(topNews).toHaveProperty(k);
    expect(topNews[k]).toHaveProperty("id");
    expect(topNews[k]).toHaveProperty("title");
    expect(topNews[k]).toHaveProperty("text");
  }
});

test("get the banner", () => {
  const state = reducer();
  const data = getBanner({ news: state });
  expect(data).toHaveProperty("id");
  expect(data).toHaveProperty("title");
  expect(data).toHaveProperty("text");
  expect(data).toHaveProperty("image");
});

test("get the bottom news", () => {
  const state = reducer();
  const topNews = getBottomNews({ news: state });

  for (const k of ["left1", "left2", "right", "bottomright1", "bottomright2"]) {
    expect(topNews).toHaveProperty(k);
    expect(topNews[k]).toHaveProperty("id");
    expect(topNews[k]).toHaveProperty("title");
    expect(topNews[k]).toHaveProperty("text");
    if (k !== "right") expect(topNews[k]).toHaveProperty("image");
  }
});
