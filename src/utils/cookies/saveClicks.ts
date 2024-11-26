import Cookies from "js-cookie";

export function setClicks(clicks: number) {
    Cookies.set("clicks", clicks.toString());
}

export function getClicks() {
    return Number(Cookies.get("clicks"));
}