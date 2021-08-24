import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

export default function App() {
    return (
        <div className="min-h-screen w-full bg-blue-900 text-white">
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/search">
                        <Search/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}