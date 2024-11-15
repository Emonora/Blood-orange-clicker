import Cookie from "js-cookie";

export function getOwned(building: string) {
  const returnCookie = Cookie.get(`owned_${building}`);
  if (returnCookie === undefined) {
    setOwned(building, 0);
    return 0;
  } else {
    return parseInt(returnCookie);
  }
}

export function setOwned(building: string, owned: number) {
  Cookie.set(`owned_${building}`, owned.toString());
}
