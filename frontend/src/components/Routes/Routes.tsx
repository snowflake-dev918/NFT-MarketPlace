import { Switch, Route, Redirect } from "react-router-dom";
import { locations } from "../../modules/routing/locations";
import { LandsPage } from "../LandsPage";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={locations.lands()} component={LandsPage} />
      </Switch>
    </>
  );
};

export default Routes;
