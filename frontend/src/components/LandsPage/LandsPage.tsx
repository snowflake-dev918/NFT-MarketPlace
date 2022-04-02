import React from "react";

import { VendorName } from "../../modules/vendor/types";
import { View } from "../../modules/ui/types";
import { Section } from "../../modules/vendor/decentraland";
import { Navbar } from "../Navbar";
import { Props } from "./LandsPage.types";

const LandsPage = (props: Props) => {
  const { isFullscreen, isMap } = props;
  return (
    <>
      <Navbar isFullscreen={isFullscreen} />
    </>
  );
};

export default React.memo(LandsPage);
