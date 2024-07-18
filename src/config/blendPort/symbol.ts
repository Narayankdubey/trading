const NIFTY = "NIFTY";
const BANKNIFTY = "BANKNIFTY";

export const portfolioOptions = {
  symbol: [
    {
      label: "BANKNIFTY - Bank Nifty",
      value: BANKNIFTY,
    },
    {
      label: "NIFTY",
      value: NIFTY,
    },
  ],
  exp: {
    [NIFTY]: [
      {
        label: "02 june",
        value: "02 june",
      },
      { label: "12 july", value: "12 july" },
    ],
    [BANKNIFTY]:[
        {
            label: "07 aug",
            value: "07 aug",
          },
          { label: "22 march", value: "22 march" },
    ]
  },
};
