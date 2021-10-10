import SwitchRoute from "../../components/Route/SwitchRoute";
import {Route} from "react-router-dom";
import homeUrl from "./constants/homeUrl";
import Home from "./index";

export default function HomeRoute(){
    return (
        <SwitchRoute>
            <Route path={homeUrl.EVENTS} exact component={Home} />
        </SwitchRoute>
    )
}