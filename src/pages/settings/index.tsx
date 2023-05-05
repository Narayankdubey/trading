import LayoutContainer from "@/components/layout";
import { SettingsContainer } from "@/components/screens";
import React, { FC } from "react";

interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <LayoutContainer>
      <SettingsContainer />
    </LayoutContainer>
  );
};

export default Settings;
