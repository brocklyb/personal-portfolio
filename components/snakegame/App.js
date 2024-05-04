import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import GameContextProvider from "./contexts/UserContextProvider";
import ScoresContextProvider from "./contexts/HighScoresProvider";

import Home from "./HomePage";
import Game from "./GamePage";
import TestGame from "./testGame";
import HighScores from "./Highscore";
import Customize from "./CustomizePage";



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
                                    path="/game"
                                    element={<Game />}
                                ></Route>
                                <Route
                                    path="/testgame"
                                    element={<TestGame />}
                                ></Route>
                                <Route
                                    path="/highscores"
                                    element={<HighScores />}
                                ></Route>
                                <Route
                                    path="/customize"
                                    element={<Customize />}
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

