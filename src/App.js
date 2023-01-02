
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import UsersPage from "./pages/UsersPage.js";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/all-users" element={<UsersPage />} />
            </Routes>
        </Router>
    );
}

export default App;
