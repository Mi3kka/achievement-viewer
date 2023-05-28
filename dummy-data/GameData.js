// Dummy data for testing purposes and seeing how the UI looks

export const games = [
  {
    id: 1,
    name: "Half-Life 2",
    image: "/pictures/hl2.png",
    achievements: {
      completed: 20,
      total: 33,
    },
    lastPlayed: new Date('2023-05-03'),
    achievementsList: [
      {
        id: 1,
        name: "City Escape",
        description: "Successfully escape City 17",
        locked: false,
        unlockDate: new Date('2023-05-02'),
        hidden: false,
        image: "/achievement_images/hl2-city-escape.png",
        unlockPercentage: 34,
      },
      {
        id: 2,
        name: "Trusty Hardware",
        description: "Find the crowbar",
        locked: false,
        unlockDate: new Date('2023-05-03'),
        hidden: false,
        image: "/achievement_images/hl2-trusty-hardware.png",
        unlockPercentage: 70,
      },
      {
        id: 3,
        name: "Follow Freeman",
        description: "Join the resistance",
        locked: true,
        unlockDate: null,
        hidden: false,
        image: "/achievement_images/hl2-follow-freeman.png",
        unlockPercentage: 60,
      },
    ],
  },
  {
    id: 2,
    name: "Portal",
    image: "/pictures/portal.png",
    achievements: {
      completed: 10,
      total: 15,
    },
    lastPlayed: new Date('2023-05-11'),
    achievementsList: [
      {
        id: 1,
        name: "Welcome to Aperture",
        description: "Enter the Aperture Science Enrichment Center",
        locked: false,
        unlockDate: new Date('2023-05-10'),
        hidden: false,
        image: "/achievement_images/portal-welcome-to-aperture.png",
        unlockPercentage: 90,
      },
      {
        id: 2,
        name: "Portal Master",
        description: "Master the use of portals",
        locked: false,
        unlockDate: new Date('2023-05-11'),
        hidden: true,
        image: "/achievement_images/portal-portal-master.png",
        unlockPercentage: 37,
      },
      {
        id: 3,
        name: "Cake Is a Lie",
        description: "Discover the truth about the cake",
        locked: true,
        unlockDate: new Date('2023-05-11'),
        hidden: false,
        image: "/achievement_images/portal-cake-is-a-lie.png",
        unlockPercentage: 24,
      },
    ],
  },
  {
    id: 3,
    name: "Team Fortress 2",
    image: "/pictures/tf2.png",
    achievements: {
      completed: 100,
      total: 520,
    },
    lastPlayed: new Date('2023-05-05'),
    achievementsList: [
      {
        id: 1,
        name: "Have a plan",
        description: "Capture the enemy flag as the Sniper",
        locked: false,
        unlockDate: new Date('2023-04-25'),
        hidden: false,
        image: "/achievement_images/tf2-capture-the-flag.png",
        unlockPercentage: 73,
      },
      {
        id: 2,
        name: "King of the Hill",
        description: "Dominate the control point",
        locked: true,
        unlockDate: null,
        hidden: true,
        image: "/achievement_images/tf2-king-of-the-hill.png",
        unlockPercentage: 51,
      },
      {
        id: 3,
        name: "Payload",
        description: "Successfully push the payload",
        locked: false,
        unlockDate: new Date('2023-05-06'),
        hidden: false,
        image: "/achievement_images/tf2-payload.png",
        unlockPercentage: 85,
      },
    ],
  },
  {
    id: 4,
    name: "DOTA 2",
    image: "/pictures/dota2.png",
    achievements: {
      completed: 5,
      total: 167,
    },
    lastPlayed: new Date('2023-04-30'),
    achievementsList: [
      {
        id: 1,
        name: "First Blood",
        description: "Get the first kill in a match",
        locked: false,
        unlockDate: new Date('2023-04-01'),
        hidden: false,
        image: "/achievement_images/dota2-first-blood.png",
        unlockPercentage: 66,
      },
      {
        id: 2,
        name: "Addicted",
        description: "Participate in 100 matches",
        locked: true,
        unlockDate: null,
        hidden: false,
        image: "/achievement_images/dota2-addicted.png",
        unlockPercentage: 23,
      },
      {
        id: 3,
        name: "Party Time",
        description: "Complete a game while in a matchmaking party",
        locked: false,
        unlockDate: new Date('2023-04-13'),
        hidden: true,
        image: "/achievement_images/dota2-party.png",
        unlockPercentage: 41,
      },
    ],
  },
  {
    id: 5,
    name: "Counter-Strike: Global Offensive",
    image: "/pictures/csgo.png",
    achievements: {
      completed: 150,
      total: 167,
    },
    lastPlayed: new Date('2023-04-02'),
    achievementsList: [
      {
        id: 1,
        name: "Rite of First Defusal",
        description: "Successfully defuse the bomb",
        locked: false,
        unlockDate: new Date('2023-03-03'),
        hidden: false,
        image: "/achievement_images/csgo-bomb-defuser.png",
        unlockPercentage: 92,
      },
      {
        id: 2,
        name: "Headshot Master",
        description: "Get 250 headshot kills",
        locked: false,
        unlockDate: new Date('2023-03-15'),
        hidden: true,
        image: "/achievement_images/csgo-headshot-master.png",
        unlockPercentage: 89,
      },
      {
        id: 3,
        name: "Expert Marksman",
        description: "Get a kill with every weapon",
        locked: false,
        unlockDate: new Date('2023-04-02'),
        hidden: false,
        image: "/achievement_images/csgo-marksman.png",
        unlockPercentage: 12,
      },
      {
        id: 4,
        name: "Mercy Rule",
        description: "Kill the entire opposing team without any members of your team dying",
        locked: false,
        unlockDate: new Date('2023-04-10'),
        hidden: false,
        image: "/achievement_images/csgo-mercy.png",
        unlockPercentage: 33,
      },
      {
        id: 5,
        name: "War Bonds",
        description: "Earn $50,000 total cash",
        locked: true,
        unlockDate: null,
        hidden: false,
        image: "/achievement_images/csgo-war-bonds.png",
        unlockPercentage: 77,
      },
      {
        id: 6,
        name: "Hat Trick",
        description: "Dominate three enemies simultaneously",
        locked: false,
        unlockDate: new Date('2023-04-20'),
        hidden: true,
        image: "/achievement_images/csgo-hat-trick.png",
        unlockPercentage: 64,
      },
    ],
  },
  {
    id: 6,
    name: "The Elder Scrolls V: Skyrim",
    image: "/pictures/skyrim.png",
    achievements: {
      completed: 40,
      total: 75,
    },
    lastPlayed: new Date('2023-05-18'),
    achievementsList: [
      {
        id: 1,
        name: "Unbound",
        description: "Complete 'Unbound', the first main story quest",
        locked: false,
        unlockDate: new Date('2023-04-19'),
        hidden: false,
        image: "/achievement_images/skyrim-unbound.png",
        unlockPercentage: 60,
      },
      {
        id: 2,
        name: "Thieves Guild Master",
        description: "Become the leader of the Thieves Guild",
        locked: false,
        unlockDate: new Date('2023-05-15'),
        hidden: true,
        image: "/achievement_images/skyrim-thieves-guild-master.png",
        unlockPercentage: 23,
      },
      {
        id: 3,
        name: "With Friends Like These...",
        description: "Join the Dark Brotherhood",
        locked: true,
        unlockDate: null,
        hidden: false,
        image: "/achievement_images/skyrim-dark-brotherhood.png",
        unlockPercentage: 34,
      },
    ],
  },
  {
    id: 7,
    name: "Stardew Valley",
    image: "/pictures/stardew_valley.png",
    achievements: {
      completed: 20,
      total: 40,
    },
    lastPlayed: new Date('2023-05-15'),
    achievementsList: [
      {
        id: 1,
        name: "Greenhorn",
        description: "Earn 15,000g",
        locked: false,
        unlockDate: new Date('2023-04-16'),
        hidden: false,
        image: "/achievement_images/stardew-valley-greenhorn.png",
        unlockPercentage: 44,
      },
      {
        id: 2,
        name: "Master Angler",
        description: "Catch all types of fish",
        locked: false,
        unlockDate: new Date('2023-04-18'),
        hidden: true,
        image: "/achievement_images/stardew-valley-master-angler.png",
        unlockPercentage: 12,
      },
      {
        id: 3,
        name: "Local Legend",
        description: "Restore the Pelican Town Community Center.",
        locked: true,
        unlockDate: null,
        hidden: false,
        image: "/achievement_images/stardew-legend.png",
        unlockPercentage: 44,
      },
    ],
  },
  // Add more game entries with their respective achievements
];