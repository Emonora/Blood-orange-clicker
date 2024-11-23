import { getOwned } from "~/utils/cookies/getOwned";

export default function Owned() {
    return (
        <main className="text-sm overflow-auto max-h-full top-12 absolute left-0">
            <h1 className="pb-2 text-base">Owned Buildings:</h1>
            <p>
                Owned Cursor(s): {getOwned("cursor")}
            </p>
            <p>
                Owned Tree(s): {getOwned("tree")}
            </p>
            <p>
                Owned Shed(s): {getOwned("shed")}
            </p>
            <p>
                Owned Farm(s): {getOwned("farm")}
            </p>
            <p>
                Owned Orchard(s): {getOwned("orchard")}
            </p>
            <p>
                Owned Greenhouse(s): {getOwned("greenhouse")}
            </p>
            <p>
                Owned Mine(s): {getOwned("mine")}
            </p>
            <p>
                Owned Bank(s): {getOwned("bank")}
            </p>
            <p>
                Owned Tower(s): {getOwned("tower")}
            </p>
        </main>
    );
}