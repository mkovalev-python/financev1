import './App.css';
import 'antd/dist/antd.css'
import './resources/css/HomeBlock.css'
import './resources/css/PossibilitiesBlock.css'
import './resources/css/SubscribesBlock.css'
import './resources/css/LoginBlock.css'
import {Route} from "react-router-dom";
import SwitchRoute from "./components/Route/SwitchRoute";
import HomeRoute from "./view/Home/HomeRoute";
import Menu from "./components/Menu";


function App() {
    return (
        <div>
            <Menu />
            <SwitchRoute>
                <Route path="/" exact component={HomeRoute}/>
            </SwitchRoute>
        </div>
    );
}

export default App;
