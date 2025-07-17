import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import "./style/header.css";
import Content from "./components/Content";
import CardMovie from "./components/CardMovie";
import Watchlist from "./components/Watchlist";

function App() {
    return (
        <Router>
            <div className="myBg border">
                <NavigationBar />
                <Content />
            </div>

            <Routes>
                <Route path="/" element={
                    <div className="card">
                        <CardMovie />
                    </div>
                } />
                <Route path="/watchlist" element={<Watchlist />}/>
            </Routes>
        </Router>
    );
}

export default App;
