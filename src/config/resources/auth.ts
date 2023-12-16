import { TradeXConfig } from "../backend";
import { Methods, Resource, Versions } from "./enums";

export const auth: Resource = {
  BASE: `${TradeXConfig.HOST}/${Versions.V0}/auth`,
  ENDPOINTS: {
    SIGN_UP: {
      METHOD: Methods.POST,
      URI: "sign-in",
    },
    SIGN_IN: {
      METHOD: Methods.POST,
      URI: "sign-up",
    },
    SIGN_OUT: {
      METHOD: Methods.POST,
      URI: "sign-out",
    },
    REFRESH_TOKEN: {
      METHOD: Methods.POST,
      URI: "refresh-token",
    },
  },
};
