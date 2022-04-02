import { RootState } from "../../modules/reducer";
import { getIsFullscreen, getIsMap } from "../../modules/routing/selectors";
import { MapStateProps } from "./LandsPage.types";
import LandsPage from "./LandsPage";

const mapState = (state: RootState): MapStateProps => ({
  isFullscreen: getIsFullscreen(state) ?? true,
  isMap: getIsMap(state) ?? true,
});

export default LandsPage;
