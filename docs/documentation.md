# Achievement Viewer - Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Components](#components)
3. [Routing & State Management](#routing--state-management)
4. [Data Flow Across Components](#data-flow-across-components)
5. [Tools & Libraries](#tools--libraries)

---

## Project Overview

Achievement Viewer is a front-end web application that provides an interface for users to view their game achievements. The application features a main view that displays an overview of the user's achievements and provides detailed views of individual game achievements when a specific game is selected. The application also provides filters and sorting mechanisms to facilitate the search for specific achievements.

This project is a showcase to demonstrate a front-end achievement environment. It is not intended to be a fully functional full-stack application as it is missing a back-end database and user authentication. However, it does simulate a full environment by storing data in a dummy-data.js file, fetching data and populating elements within React components. The data works as the backbone of the application and is used to populate the main view, as well as the filters and sorting mechanisms.

### Idea and motivation

The initial goal of this project was to create a prototype focused on interaction and UI design using tools suchs as Figma, Adobe XD or Sketch. We however decided to take it a step further and create a functional front end web application that would allow us to showcase the prototype with full functionality instead of just static images and mockups. This would allow us to demonstrate the application's UI and interaction far more effectively and across multiple devices (desktop and mobile).

### UI & UX Design

The UI and UX design of this application was mocked and prototyped by Anniina Talja. The mockup was then implemented by Julius Virtanen. Design was tweaked and adjusted during the implementation process to ensure the designer's vision. The logic of the application was also implemented by Julius and Anniina guided the implementation process to ensure the application works as intended. Anniina will be using this application to demonstrate her vision for a achievement environment in her thesis.

The design was inspired by Steam application by Valve, utilizing similar colors and UI elements. The application was designed to be intuitive and easy to use. Special directive was given to the mobile scaling of the application, which should scale well depending on the device view port size.

CSS styles were implemented using Bootstrap and global CSS stylesheets, which handle the majority of the styling. Some inline styling was also used to tweak the UI to match the designer's mockups. Media queries were used to ensure the application scales well on different devices. Query testing was done on multiple device sizes to ensure the application scales well and single components do not break the layout.

---

## Components

When using React/Next.js to build a web application, the application is broken down into smaller components. These components are reusable and can be used to build more complex systems (i.e component-based architecture). The following sections describe the main components used in this application:

- **App**: This is the root component of the application. It now only renders the login page and routes to the main view once the user is logged in. User authentication is not implemented in this project, so the login page is skipped by just pressing Login. User authentication was not a direct requirement for this demo project, but can be implemented in the future by leveraging our own backend (such as MongoDB) or a third-party authentication service.

- **MainView**: This is the main component of the application. It has the core layout of the UI and the header. It also conditionally renders the GameCardContainer and AchievementContainer components based on the state of the application.

- **GameCardContainer**: This component handles the rendering of all GameCard components. Each GameCard represents an individual game and shows a brief summary of the user's achievements for that game. This container also has buttons integrated to sort the list of GameCard elements. This will dynamically become scrollable if the list of games is too long to fit on the screen.

- **GameCard**: This component displays information about a specific game, including the game's name, a game icon, the number of achievements completed, and the last played date. A GameCard is rendered for each game in the user's library (the dummy data) and also displays the completion percentage for each game in the form of changing color and percentage text. Clicking on a GameCard triggers the rendering of the AchievementContainer for that game, without reloading the page.

- **AchievementContainer**: This component displays detailed information about the achievements. Depending on user selection, it can display all achievements, game specific achievements or achievements filtered by the user. The filters are locked/unlocked, visibility, global unlocks, unlock date (ascending/descending) and achievement name. This container handles all search functions as this is not separated into its own component.

- **AchievementCard**: This component represents an individual achievement within a game and displays relevant information about the achievement, including its name, description, whether it's locked or unlocked, and an associated image icon for the achievement. Depending on the locked or visible status, the card's will blur or become opaque to indicate clearly for the user which achievements are locked or hidden.

---

## Routing & State Management

The application currently operates with a single-page architecture, meaning there is no traditional page-to-page routing involved, aside from the login screen routing to the main view. Instead, dynamic rendering is used based on application state. The MainView component maintains the state of the application and conditionally renders either the overview of all games (via GameCardContainer) or the detailed view of a selected game (via AchievementContainer) based on user interactions (clicking on a GameCard, or clicking on the 'View All' button in MainView).

The state management is implemented primarily using the built-in `useState` hook provided by React. There are numerous states to manage, so here is a brief overview of the most important ones:

### MainView States

- `selectedGame`: This state is used to track the currently clicked game in the main view. The user can click the game cards, which takes them to that game's achievement view. Initially, it is set to `null`. However, when a user clicks on a game card, this state updates to the name of the selected game and therefore triggers the rendering of the `AchievementContainer` component and automatically applies a filter sort to display only achievements for the clicked game. If the user clicks the "View All Achievements" button, this state doesn't change and the `AchievementContainer` component is rendered with no filters applied (all achievements are viewable, albeit sorted by unlocked status as the designer wanted it to be so).

### AchievementContainer States

- `gameSearchTerm`: This state is used to search for a game. The additional function of this state is the automatic filtering when a user clicks a card as was outlied above. When viewed from the 'View all achievements' button it has value of an empty string, and updates whenever the user types into the game search field on top of the container. The search is case-insensitive (we use `toLowerCase()` function when formatting the search field input) and matches any game name that contains the search term, which is why it was especially useful with the GameCard clicking function.

- `achievementSearchTerm`: This state is used to search for specific achievements. It is initially an empty string, and updates whenever the user types into the achievement search field. The search is case-insensitive and matches any achievement name that contains the search term as was the case with the game name. This however does not autofill the search field when a user clicks on a gamecard.

- `lockedFilter`: This state is used to filter achievements based on their completion status. It can take three possible values: 'all', 'unlocked', and 'locked' ('null', 'true', 'false') The state is initialized with the value passed as a prop to the component, which is `null` by default, showing all achievements.

- `visibilityFilter`: This state is used to filter achievements based on their visibility. It is initially `null`, meaning that all achievements, regardless of visibility, are displayed.

- `sortMethod`: This state is used to control the order in which achievements are displayed. It is initially `null`, and can be updated to sort achievements based on different criteria.

- `achievements`: This state holds the list of all achievements. It's initially an empty array and is updated whenever the achievements data changes. Using this state, we don't have to loop through the entire list every update, but only when the data changes. I initially got a lot of errors of `Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.` This was because I was looping through the entire list of achievements every time the component updated, which caused an infinite loop. By storing the list of achievements in a state, we can avoid this issue and also the performance is improved.

- `filteredAchievements`: This state holds the list of achievements that meet the current filter criteria. It's initially an empty array and is updated whenever the filter criteria or the achievements data changes.

### GameCardContainer States

- `gameList`: This state is used to store the list of all games. It is initially set to the games imported from the `GameData` file.

- `sortType`: This state is used to sort the games displayed in the GameCardContainer. It can take any property name of a game object as a value. It is initially set to `'lastPlayed'`, meaning that games will be sorted by the date they were last played.

- `viewAll`: A boolean state indicating whether all games should be viewed. It is initialized as `false`, and when set to `true`, the application displays

- `selectedGame`: This state is utilized to track the currently selected game. Initially, it is set to `null`. However, when a user clicks on a game card, this state updates to the name of the selected game and therefore triggers the rendering of the `AchievementContainer` component and automatically applies a filter sort to display only achievements for the selected game.

- `initialLockedFilter`: This state is used to initialize the 'lockedFilter' state in the `AchievementContainer` component. It is initially set to `null`, meaning that achievements of all statuses ('all', 'completed', 'locked') are displayed.

### Static Data

The application currently uses static data stored in the `dummy-data.js` file. This data is used to populate the main view, as well as the filters and sorting mechanisms. By changing the data in this file, the application can be tested with different parameters and data.

The user info is simply stored in a variable in the MainView component. This data is used to populate the header. This data is not used anywhere else in the application, so it only serves as a placeholder.

---

## Data Flow Across Components

Data is primarily passed across different components using React's "props" system. Props are passed from parent components to child components, and can be used to pass data as well as callback functions. The following sections describe the data flow between the different components:

### From MainView to Child Components

The `MainView` component is the primary component that manages state and passes data down to child components.

For example, the `MainView` component passes the list of games and the `onGameCardClick` function to the `GameCardContainer` component as props:

```jsx
<GameCardContainer games={games} onGameCardClick={handleGameCardClick} />
```

Similarly, if a specific game is pressed by the user, the MainView component passes the selected game to the AchievementContainer component:

```jsx
<AchievementContainer handleViewAll={handleViewAll} selectedGame={selectedGame} initialLockedFilter={null} />
```

### From GameCardContainer to Child Components

The GameCardContainer component maps over the games data passed from MainView and passes individual game data to GameCard components:

```jsx
games.map((game) => (
  <GameCard game={game} onClick={() => onGameCardClick(game)} key={game.id} />
))
```

The onClick prop is a function that calls the onGameCardClick function with the game as an argument.

### From AchievementContainer to Child Components

The AchievementContainer component also maps over achievement data and passes individual achievement data to AchievementCard components:

```jsx
filteredAchievements.map((achievement) => (
  <AchievementCard achievement={achievement} key={achievement.id} />
))
```

---

## Tools & Libraries

We utilize several tools and libraries to streamline development:

- **React**: The core library powering the application, providing reusable UI components.

- **Next.js**: A powerful framework for building server-side rendered React applications. It provides a simple and intuitive routing system, as well as a built-in development server.

- **Bootstrap**: A CSS framework used to style the application. We primarily use Bootstrap for inline styling of elements.

- **Node.js & npm**: The runtime environment and package manager used to manage dependencies and scripts for the application. Currently this project uses Node.js version 18.16.0.

- **ESLint**: A linter tool used to enforce code style and formatting.

- **Prettier**: A code formatter used to format code.

---

## Credits

- **Anniina Talja**: UI & UX design, mockup, data modeling, and testing. Uses this application in her thesis.
- **Julius Virtanen**: Implementation of the front end application, routing, state management, data flow and testing. Also wrote documentation.
- **Valve**: Inspiration for the UI design.