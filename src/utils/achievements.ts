import { get } from "http";
import { getClicks } from "./cookies/saveClicks";
import { getScore } from "./cookies/score";
import Cookies from "js-cookie";

const achievements = [
    { name: "Clicker", description: "Click 10 times", clicks: 10, earned: false, id: 0 },
    { name: "Clicker 2", description: "Click 20 times", clicks: 20, earned: false, id: 1  },
    { name: "Clicker 3", description: "Click 30 times", clicks: 30, earned: false, id: 2  },
    { name: "Clicker 4", description: "Click 40 times", clicks: 40, earned: false, id: 3  },
    { name: "Clicker 5", description: "Click 50 times", clicks: 50, earned: false, id: 4  },
    { name: "Clicker 6", description: "Click 60 times", clicks: 60, earned: false, id: 5  },
    { name: "Clicker 7", description: "Click 70 times", clicks: 70, earned: false, id: 6  },
    { name: "Clicker 8", description: "Click 80 times", clicks: 80, earned: false, id: 7  },
    { name: "Clicker 9", description: "Click 90 times", clicks: 90, earned: false, id: 8  },
    { name: "Clicker 10", description: "Click 100 times", clicks: 100, earned: false, id: 9  },
];

export function achievementCheck() {
    const clicks = getClicks();
    const score = getScore();
    for (const achievement of achievements) {  
        if (clicks >= achievement.clicks && !achievement.earned) {
            return achievement;
        }
    }
}

export function markAsEarned(name: string) {
    achievements.forEach(achievement => {
        if (achievement.name === name) {
            achievement.earned = true;
        }
    });
}