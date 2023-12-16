export const ROUTES = {
  HOME: "/",
  ALGO: "/algo",
  TRADING: "/trading",
  LOGIN: "auth/login",
  SIGNUP: "auth/signup",
  SETTINGS: "settings",
  PROFILE: "profile",
};

export const STORAGE_KEY_CONSTANT = "access_token";
export const USER_INFO = "user_info";
export const TOKEN_EXPIRE = "token_expire";
export const REFRESH_KEY_CONSTANT = "refresh_token";

export const backtestingConstant = {
  filterElement: ["status"],
  form: {
    type: ["backtest"],
    transaction: ["BUY", "SELL"],
    parameterType: ["attribute", "indicator", "value"],
    timeframe: [
      "1sec",
      "1min",
      "3min",
      "5min",
      "7min",
      "10min",
      "15min",
      "20min",
      "30min",
    ],
    attribute: ["OPEN", "HIGH", "LOW,", "CLOSE"],
    symbol: ["SBIN", "ICICIBANK", "ABB", "ITC", "TCS", "ONGC", "WIPRO"],
    indicator: ["SMA", "EMA", "RSI", "BBANDS"],
    timePeriod: ["7days", "14days"],
    operator: ["GT", "LTE"],
  },
  filterElements: [
    { name: "STATUS", options: ["created", "processing", "completed"] },
  ],
};

export const profileConstant = {
  basicDetails: [
    { label: "Mobile No.", value: "mobile" },
    { label: "Date of Birth", value: "dob" },
    { label: "Something", value: "some" },
  ],
};
