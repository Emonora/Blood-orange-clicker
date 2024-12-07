import { getClicks } from "./cookies/saveClicks";

const defaultAchievements = [
    { name: "Clicker", description: "Click 10 times", clicks: 10, earned: false, id: 0 },
    { name: "Clicker 2", description: "Click 20 times", clicks: 20, earned: false, id: 1 },
    { name: "Clicker 3", description: "Click 30 times", clicks: 30, earned: false, id: 2 },
    { name: "Clicker 4", description: "Click 40 times", clicks: 40, earned: false, id: 3 },
    { name: "Clicker 5", description: "Click 50 times", clicks: 50, earned: false, id: 4 },
    { name: "Clicker 6", description: "Click 60 times", clicks: 60, earned: false, id: 5 },
    { name: "Clicker 7", description: "Click 70 times", clicks: 70, earned: false, id: 6 },
    { name: "Clicker 8", description: "Click 80 times", clicks: 80, earned: false, id: 7 },
    { name: "Clicker 9", description: "Click 90 times", clicks: 90, earned: false, id: 8 },
    { name: "Clicker 10", description: "Click 100 times", clicks: 100, earned: false, id: 9 },
    { name: "Clicker 11", description: "Click 1000 times", clicks: 1000, earned: false, id: 10 },
    { name: "Clicker 12", description: "Click 10000 times", clicks: 10000, earned: false, id: 11 },
    { name: "Clicker 13", description: "Click 100000 times", clicks: 100000, earned: false, id: 12 },
    { name: "Clicker 14", description: "Click 1000000 times", clicks: 1000000, earned: false, id: 13 },
    { name: "Clicker 15", description: "Click 10000000 times", clicks: 10000000, earned: false, id: 14 },
];

function saveAchievements(achievements: any[]) {
    localStorage.setItem("achievements", JSON.stringify(achievements));
}

function loadAchievements(): any[] {
    const storedAchievements = localStorage.getItem("achievements");
    return storedAchievements ? JSON.parse(storedAchievements) : defaultAchievements;
}

export function achievementCheck() {
    const clicks = getClicks();
    let achievements = loadAchievements(); 

    for (const achievement of achievements) {
        if (clicks >= achievement.clicks && !achievement.earned) {
            achievement.earned = true;
            saveAchievements(achievements); 
            return achievement;
        }
    }

    return {
        name: "[No achievement]",
        description: "You haven't earned any achievements yet.",
        earned: true,
    };
}

export function markAsEarned(name: string) {
    let achievements = loadAchievements(); 
    achievements.forEach(achievement => {
        if (achievement.name === name) {
            achievement.earned = true; 
        }
    });
    saveAchievements(achievements); 
}
