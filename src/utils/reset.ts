import Cookies from "js-cookie";
import { setScor } from "~/utils/cookies/score";

export function reset() {
  Cookies.remove("score");
  Cookies.remove("owned_cursor");
  Cookies.remove("owned_tree");
  Cookies.remove("owned_shed");
  Cookies.remove("owned_farm");
  Cookies.remove("owned_orchard");
  Cookies.remove("cursor_cost");
  Cookies.remove("tree_cost");
  Cookies.remove("shed_cost");
  Cookies.remove("farm_cost");
  Cookies.remove("orchard_cost");
  setScor(0);
}