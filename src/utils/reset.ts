import Cookies from "js-cookie";
import { setScor } from "~/utils/cookies/score";
import { resetAchievements } from "./achievements";

export function reset() {
  Cookies.remove("score");
  Cookies.remove("owned_cursor");
  Cookies.remove("owned_tree");
  Cookies.remove("owned_shed");
  Cookies.remove("owned_farm");
  Cookies.remove("owned_orchard");
  Cookies.remove("owned_greenhouse");
  Cookies.remove("owned_mine");
  Cookies.remove("owned_bank");
  Cookies.remove("owned_tower");
  Cookies.remove("cursor_cost");
  Cookies.remove("tree_cost");
  Cookies.remove("shed_cost");
  Cookies.remove("farm_cost");
  Cookies.remove("orchard_cost");
  Cookies.remove("greenhouse_cost");
  Cookies.remove("mine_cost");
  Cookies.remove("bank_cost");
  Cookies.remove("tower_cost");
  Cookies.remove("cps");
  resetAchievements();
  setScor(0);
}