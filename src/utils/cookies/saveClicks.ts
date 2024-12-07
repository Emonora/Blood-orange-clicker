import Cookies from "js-cookie";

export function setClicks(clicks: number) {
    Cookies.set("clicks", clicks.toString());
}

export function getClicks() {
    if (!Cookies.get("clicks")) {
        Cookies.set("clicks", "0");
    } else if (isNaN(Number(Cookies.get("clicks")))) {
        Cookies.set("clicks", "0");
    }
    return Number(Cookies.get("clicks"));
}