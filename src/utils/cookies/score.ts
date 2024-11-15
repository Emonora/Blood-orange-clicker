import Cookie from "js-cookie";

const COOKIE_NAME = "score";

export const getScore = () => {
  const cookie = Cookie.get(COOKIE_NAME);
  if (cookie) {
    return parseInt(cookie);
  }
  return 0;
};

export const setScor = (score: number) => {
  Cookie.set(COOKIE_NAME, score.toString());
};
