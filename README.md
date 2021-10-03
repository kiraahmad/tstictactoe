# Tic-Tac-Toe Using React and Node.js

## Install Dependencies (frontend & backend)
npm install  
cd frontend  
npm install

## Run frontend (:3000) & backend (:5000)
npm run dev

## Run backend only
npm run server


### Project Structure
- This Project is based on React.js for the Front-end and Node.js for the Back-end  
- Technologies used in this project are React, React Hooks, Axios, Node.Js and Express 
- Hooks is used for the Front-end to store state of the game while the game handler which will make the calculations of who is the winner is in the Back-end  
- useEffect is used to send the state of the game to the Back-end using axios, once a player makes a move it will automatically send the current move to the Backend to do the calculations
- The game will keep running until there is a winner or draw is set
- Once there is a winner a text below the squares will state who the winner is and squares will no longer be clickable
- If there is no winner and no left squares to play it will show "Game is Draw"


### Compromises Taken and possible undone improvements due to the sake of time 
- not using envirnoment variables
- using function at the same route in the request API instead of having a different file for it (since the project is small and one API only is used this was made as well)
- As an improvement there could be a place where users add their names
- Major improvement is making this game as an online game where users could play with their friends online

### unhandled erros
None
