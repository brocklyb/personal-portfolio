import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Home from './components/Home'
import SnakeGameHome from './components/SnakeGame/HomePage'
import SnakeGamePlay from './components/SnakeGame/GamePage'
import SnakeHighscores from './components/SnakeGame/Highscore'

import NonProfitHome from './components/NonProfit/Home'
import NonProfitProjects from './components/NonProfit/CurrentProjects'
import NonProfitAbout from './components/NonProfit/AboutUs'
import NonProfitContact from './components/NonProfit/Contact'
import NonProfitProjectInformation from './components/NonProfit/projectInformation'

import GameContextProvider from "./components/SnakeGame/contexts/UserContextProvider";
import ScoresContextProvider from "./components/SnakeGame/contexts/HighScoresProvider";


class App extends Component {

  render() {
      return (
        <GameContextProvider>
          <ScoresContextProvider>
              <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/snake/home"
                            element={<SnakeGameHome />}
                        ></Route>
                        <Route
                            path="/snake/playsnake"
                            element={<SnakeGamePlay />}
                        ></Route>
                        <Route
                            path="/snake/highscores"
                            element={<SnakeHighscores />}
                        ></Route>
                        <Route
                            path="/nonprofit/home"
                            element={<NonProfitHome />}
                        ></Route>
                        <Route
                            path="/nonprofit/about"
                            element={<NonProfitAbout />}
                        ></Route>
                        <Route
                            path="/nonprofit/contact"
                            element={<NonProfitContact />}
                        ></Route>
                        <Route
                            path="/nonprofit/currentprojects"
                            element={<NonProfitProjects />}
                        ></Route>
                        <Route
                            path="/nonprofit/projectInformation/:id"
                            element={<NonProfitProjectInformation />}
                        ></Route>
                      


                      
                    </Routes>
                </div>
              </Router>
          </ScoresContextProvider>
        </GameContextProvider>
      );
  }
}

export default App;


