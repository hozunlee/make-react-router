import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Router from "./router/Router";
import Route from "./router/Route";
import Root from "./page/Root";
import About from "./page/About";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Router>
                <Route path="/" component={<Root />} />
                <Route path="/about" component={<About />} />
            </Router>
        </div>
    );
}

export default App;
