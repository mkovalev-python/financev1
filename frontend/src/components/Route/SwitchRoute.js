import Error404 from "../Error/Error404";
import {Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";

function SwitchRoute({children}) {
    return(
        <Switch>
            {children}
            <Route render={() => <Error404/>}/>
        </Switch>
    );
}

SwitchRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SwitchRoute;