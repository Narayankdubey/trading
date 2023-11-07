export const strategiesListMock = {
  total: 3,
  page: 1,
  pageSize: 10,
  totalPages: 1,
  data: [
    // {
    //   id: 1,
    //   title: "test-strategy-2",
    //   author: null,
    //   orderList: [],
    //   signals: [],
    //   status: "CREATED",
    // },
    // {
    //   id: 2,
    //   title: "test-strategy-3",
    //   author: null,
    //   orderList: [
    //     {
    //       buy: 11,
    //       sell: 7,
    //       symbol: "TATA",
    //     },
    //     {
    //       buy: 8,
    //       sell: 3,
    //       symbol: "REL",
    //     },
    //   ],
    //   signals: [
    //     {
    //       conditions: [
    //         {
    //           param1: {
    //             end: "",
    //             type: "IND",
    //             start: "",
    //             period: 5,
    //             symbol: "SBIN",
    //             attribute: "close",
    //             indicator: "SMA",
    //             timeframe: "",
    //           },
    //           param2: {
    //             end: "",
    //             type: "IND",
    //             start: "",
    //             period: 10,
    //             symbol: "SBIN",
    //             attribute: "close",
    //             indicator: "SMA",
    //             timeframe: "",
    //           },
    //           operator: "GT",
    //         },
    //       ],
    //       transaction: "BUY",
    //     },
    //     {
    //       conditions: [
    //         {
    //           param1: {
    //             end: "",
    //             type: "ATT",
    //             start: "",
    //             period: 5,
    //             symbol: "SBIN",
    //             attribute: "close",
    //             indicator: "SMA",
    //             timeframe: "",
    //           },
    //           param2: {
    //             end: "",
    //             type: "VAL",
    //             start: "",
    //             value: 1.95,
    //             period: 10,
    //             symbol: "SBIN",
    //             attribute: "close",
    //             indicator: "SMA",
    //             timeframe: "",
    //           },
    //           operator: "LT",
    //         },
    //       ],
    //       transaction: "SELL",
    //     },
    //   ],
    //   status: "CREATED",
    // },
    {
      id: 3,
      title: "test-strategy-3",
      author: null,
      orderList: [
        {
          buy: 11,
          sell: 7,
          symbol: "TATA",
        },
        {
          buy: 8,
          sell: 3,
          symbol: "REL",
        },
      ],
      signals: [
        {
          conditions: [
            {
              param1: {
                end: "",
                type: "IND",
                start: "",
                period: 5,
                symbol: "SBIN",
                attribute: "close",
                indicator: "SMA",
                timeframe: "",
              },
              param2: {
                end: "",
                type: "IND",
                start: "",
                period: 10,
                symbol: "SBIN",
                attribute: "close",
                indicator: "SMA",
                timeframe: "",
              },
              operator: "GT",
            },
          ],
          transaction: "BUY",
        },
        {
          conditions: [
            {
              param1: {
                end: "",
                type: "ATT",
                start: "",
                period: 5,
                symbol: "SBIN",
                attribute: "close",
                indicator: "SMA",
                timeframe: "",
              },
              param2: {
                end: "",
                type: "VAL",
                start: "",
                value: 1.95,
                period: 10,
                symbol: "SBIN",
                attribute: "close",
                indicator: "SMA",
                timeframe: "",
              },
              operator: "LT",
            },
          ],
          transaction: "SELL",
        },
      ],
      status: "CREATED",
    },
    {
      id: 4,
      title: "test-strategy-4",
      author: null,
      orderList: [],
      signals: [],
      status: "Processing",
    },
    {
      id: 5,
      title: "test-strategy-5",
      author: null,
      orderList: [],
      signals: [],
      status: "completed",
    },
  ],
};

export const strategiesMock = {
  title: "test-strategy-3",
  type: "BACKTEST",
  orderList: [
    {
      symbol: "TATA",
      buy: 11,
      sell: 7,
    },
    {
      symbol: "REL",
      buy: 8,
      sell: 3,
    },
  ],
  signals: [
    {
      transaction: "BUY",
      conditions: [
        {
          param1: {
            symbol: "SBIN",
            start: "",
            end: "",
            timeframe: "",
            type: "IND",
            attribute: "close",
            indicator: "SMA",
            period: 5,
          },
          operator: "GT",
          param2: {
            symbol: "SBIN",
            start: "",
            end: "",
            timeframe: "",
            type: "IND",
            attribute: "close",
            indicator: "SMA",
            period: 10,
          },
        },
      ],
    },
    {
      transaction: "SELL",
      conditions: [
        {
          param1: {
            symbol: "SBIN",
            start: "",
            end: "",
            timeframe: "",
            type: "ATT",
            attribute: "close",
            indicator: "SMA",
            period: 5,
          },
          operator: "LT",
          param2: {
            symbol: "SBIN",
            start: "",
            end: "",
            timeframe: "",
            type: "VAL",
            attribute: "close",
            indicator: "SMA",
            period: 10,
            value: 1.95,
          },
        },
      ],
    },
  ],
};
