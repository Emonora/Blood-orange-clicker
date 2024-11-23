import { conCat } from "~/utils/conCat";
import { getCPS } from "~/utils/cookies/getCps";
import { getOwned } from "~/utils/cookies/getOwned";

export default function Owned() {
    return (
        <main className="text-sm overflow-auto max-h-full top-12 gap-4 pt-2 pb-2 absolute left-0">
            <h1 className="pb-2 text-base">Owned Buildings:</h1>
            <p>
                Owned Cursor(s): {conCat(getOwned("cursor"))}
            </p>
            <p>
                Owned Tree(s): {conCat(getOwned("tree"))}
            </p>
            <p>
                Owned Shed(s): {conCat(getOwned("shed"))}
            </p>
            <p>
                Owned Farm(s): {conCat(getOwned("farm"))}
            </p>
            <p>
                Owned Orchard(s): {conCat(getOwned("orchard"))}
            </p>
            <p>
                Owned Greenhouse(s): {conCat(getOwned("greenhouse"))}
            </p>
            <p>
                Owned Mine(s): {conCat(getOwned("mine"))}
            </p>
            <p>
                Owned Bank(s): {conCat(getOwned("bank"))}
            </p>
            <p>
                Owned Tower(s): {conCat(getOwned("tower"))}
            </p>

            <h1>CPS: {conCat(getCPS())}</h1>
        </main>
    );
}