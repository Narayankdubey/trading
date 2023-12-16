import { TradeXConfig } from "../backend";
import { Methods, Resource, Versions } from "./enums";

export const algoClient: Resource = {
  BASE: `${TradeXConfig.HOST}/${Versions.V0}/trading-client`,
  ENDPOINTS: {
    GET_ALL: {
      METHOD: Methods.GET,
      URI: "",
    },
    GET_ONE: {
      METHOD: Methods.GET,
      URI: "{id}",
    },
    ADD_ONE: {
      METHOD: Methods.POST,
      URI: "",
    },
    UPDATE_ONE: {
      METHOD: Methods.PATCH,
      URI: "{id}",
    },
    DELETE_ONE: {
      METHOD: Methods.DELETE,
      URI: "{id}",
    },
    START: {
      METHOD: Methods.POST,
      URI: "{id}/start",
    },
    STOP: {
      METHOD: Methods.POST,
      URI: "{id}/stop",
    },
  },
};
