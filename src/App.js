import WatchedList from './pages/Home';
import { WatchedProvider } from './context/WatchedContext';
import NavigationBar from "./components/NavigationBar";
import "./style/header.css"
import Content from "./components/Content";
import CardMovie from "./components/CardMovie";

function App() {
  return (
    <div>
        <div className="myBg border">
            <NavigationBar />
            <Content />
        </div>

        <div className="card">
            <CardMovie />
        </div>


    </div>
  )}

export default App;