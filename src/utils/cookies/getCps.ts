import Cookies from "js-cookie";

export function getCPS() {
  const cps = Cookies.get("cps");
  if (cps == null) {
    return 0;
  }
  return Number(cps);
}

export function setCPS(cps: number) {
  const curCPS = getCPS();
  Cookies.set("cps", JSON.stringify(cps + curCPS));
}