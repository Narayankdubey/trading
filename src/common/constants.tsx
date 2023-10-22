export const ROUTES = {
    HOME: "/",
    ALGO: "/algo",
    TRADING: "/trading",
    LOGIN: "auth/login",
    SIGNUP: "auth/signup",
    SETTINGS: "settings",
};

export const STORAGE_KEY_CONSTANT = "access_token";
export const USER_INFO = "user_info";
export const TOKEN_EXPIRE = "token_expire"
export const REFRESH_KEY_CONSTANT = "refresh_token";

export const tempStrategyData = {
    type: "HISTORICAL",
    title: "abb test-2",
    signals: [
      {
        transaction: "sell",
        models: [
          {
            param1: {
              type: "ATT",
              symbol: "SBIN",
              start: "2021-06-22 09:45:00",
              end: "2021-06-22 09:55:00",
              timeframe: "1s",
              attribute: "close",
            },
            operator: "GT",
            param2: {
              type: "ATT",
              symbol: "SBIN",
              start: "2021-06-22 09:45:00",
              end: "2021-06-22 09:55:00",
              timeframe: "1s",
              attribute: "ltp",
            },
          },
        ],
      },
      {
        transaction: "buy",
        models: [
          {
            param1: {
              type: "value",
              value: "23",
            },
            operator: "GT",
            param2: {
              type: "ATT",
              symbol: "SBIN",
              start: "2021-06-22 09:45:00",
              end: "2021-06-22 09:55:00",
              timeframe: "1s",
              attribute: "ltp",
            },
          },
        ],
      },
      {
        transaction: "buy",
        models: [
          {
            param1: {
              type: "ATT",
              symbol: "SBIN",
              start: "2021-06-22 09:45:00",
              end: "2021-06-22 09:55:00",
              timeframe: "1s",
              attribute: "close",
            },
            operator: "GT",
            param2: {
              type: "ATT",
              symbol: "SBIN",
              start: "2021-06-22 09:45:00",
              end: "2021-06-22 09:55:00",
              timeframe: "1s",
              attribute: "ltp",
            },
          },
        ],
      },
    ],
    orderList: [
      {
        symbol: "TATA",
        start: "2021-06-22 09:45:00",
        end: "2021-06-22 09:55:00",
        timeframe: "1s",
      },
      {
        symbol: "ABB",
        start: "2021-06-20 09:45:00",
        end: "2021-06-20 09:55:00",
        timeframe: "1s",
      },
    ],
  };

export const tempStrategyFormData = {
    title: "something",
    maintype: "type1",
    signals: [
      {
        type_param1: "indicator",
        symbol_param1: "sbin",
        attribute_param1: "open",
        start_param1: "2023-10-08T10:08:09.159Z",
        end_param1: "2023-10-26T10:08:11.364Z",
        timeperiod_param1: "14days",
        operator: "LTE",
        type_param2: "value",
        value_param2: "344",
        buySell: "BUY",
      },
    ],
  };
