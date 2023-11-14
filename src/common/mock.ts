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

export const runDataMock = {
  columns: [
    "Datetime",
    "param1_sig.1/cond.1",
    "param1_sig.2/cond.1",
    "param2_sig.1/cond.1",
    "param2_sig.2/cond.1",
    "output_sig.1/cond.1",
    "output_sig.2/cond.1",
    "signal.2",
    "signal.1",
    "trade",
    "inventory",
    "org/SBIN.1/close",
    "calc/SBIN.1/11B:S11",
    "org/ABB.2/close",
    "calc/ABB.2/19B:S19",
  ],
  records: [
    {
      Datetime: 790300799999,
      "param1_sig.1/cond.1": 1.898,
      "param1_sig.2/cond.1": 1.8,
      "param2_sig.1/cond.1": 1.899,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 790387199999,
      "param1_sig.1/cond.1": 1.876,
      "param1_sig.2/cond.1": 1.84,
      "param2_sig.1/cond.1": 1.889,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 790473599999,
      "param1_sig.1/cond.1": 1.864,
      "param1_sig.2/cond.1": 1.9,
      "param2_sig.1/cond.1": 1.89,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 790559999999,
      "param1_sig.1/cond.1": 1.864,
      "param1_sig.2/cond.1": 1.89,
      "param2_sig.1/cond.1": 1.888,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 790646399999,
      "param1_sig.1/cond.1": 1.88,
      "param1_sig.2/cond.1": 1.97,
      "param2_sig.1/cond.1": 1.899,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 790905599999,
      "param1_sig.1/cond.1": 1.904,
      "param1_sig.2/cond.1": 1.92,
      "param2_sig.1/cond.1": 1.901,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": null,
      "signal.1": "BUY",
      trade: "BUY",
      inventory: 1.0,
      "org/SBIN.1/close": 1.92,
      "calc/SBIN.1/11B:S11": 21.12,
      "org/ABB.2/close": 1.92,
      "calc/ABB.2/19B:S19": 36.48,
    },
    {
      Datetime: 790905599999,
      "param1_sig.1/cond.1": 1.904,
      "param1_sig.2/cond.1": 1.92,
      "param2_sig.1/cond.1": 1.901,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: "SELL",
      inventory: 0.0,
      "org/SBIN.1/close": 1.92,
      "calc/SBIN.1/11B:S11": 21.12,
      "org/ABB.2/close": 1.92,
      "calc/ABB.2/19B:S19": 36.48,
    },
    {
      Datetime: 790991999999,
      "param1_sig.1/cond.1": 1.914,
      "param1_sig.2/cond.1": 1.89,
      "param2_sig.1/cond.1": 1.895,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": null,
      "signal.1": "BUY",
      trade: "BUY",
      inventory: 1.0,
      "org/SBIN.1/close": 1.89,
      "calc/SBIN.1/11B:S11": 20.79,
      "org/ABB.2/close": 1.89,
      "calc/ABB.2/19B:S19": 35.91,
    },
    {
      Datetime: 790991999999,
      "param1_sig.1/cond.1": 1.914,
      "param1_sig.2/cond.1": 1.89,
      "param2_sig.1/cond.1": 1.895,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: "SELL",
      inventory: 0.0,
      "org/SBIN.1/close": 1.89,
      "calc/SBIN.1/11B:S11": 20.79,
      "org/ABB.2/close": 1.89,
      "calc/ABB.2/19B:S19": 35.91,
    },
    {
      Datetime: 791078399999,
      "param1_sig.1/cond.1": 1.908,
      "param1_sig.2/cond.1": 1.87,
      "param2_sig.1/cond.1": 1.886,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": null,
      "signal.1": "BUY",
      trade: "BUY",
      inventory: 1.0,
      "org/SBIN.1/close": 1.87,
      "calc/SBIN.1/11B:S11": 20.57,
      "org/ABB.2/close": 1.87,
      "calc/ABB.2/19B:S19": 35.53,
    },
    {
      Datetime: 791078399999,
      "param1_sig.1/cond.1": 1.908,
      "param1_sig.2/cond.1": 1.87,
      "param2_sig.1/cond.1": 1.886,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: "SELL",
      inventory: 0.0,
      "org/SBIN.1/close": 1.87,
      "calc/SBIN.1/11B:S11": 20.57,
      "org/ABB.2/close": 1.87,
      "calc/ABB.2/19B:S19": 35.53,
    },
    {
      Datetime: 791164799999,
      "param1_sig.1/cond.1": 1.914,
      "param1_sig.2/cond.1": 1.92,
      "param2_sig.1/cond.1": 1.889,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": null,
      "signal.1": "BUY",
      trade: "BUY",
      inventory: 1.0,
      "org/SBIN.1/close": 1.92,
      "calc/SBIN.1/11B:S11": 21.12,
      "org/ABB.2/close": 1.92,
      "calc/ABB.2/19B:S19": 36.48,
    },
    {
      Datetime: 791164799999,
      "param1_sig.1/cond.1": 1.914,
      "param1_sig.2/cond.1": 1.92,
      "param2_sig.1/cond.1": 1.889,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: "SELL",
      inventory: 0.0,
      "org/SBIN.1/close": 1.92,
      "calc/SBIN.1/11B:S11": 21.12,
      "org/ABB.2/close": 1.92,
      "calc/ABB.2/19B:S19": 36.48,
    },
    {
      Datetime: 791251199999,
      "param1_sig.1/cond.1": 1.898,
      "param1_sig.2/cond.1": 1.89,
      "param2_sig.1/cond.1": 1.889,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": null,
      "signal.1": "BUY",
      trade: "BUY",
      inventory: 1.0,
      "org/SBIN.1/close": 1.89,
      "calc/SBIN.1/11B:S11": 20.79,
      "org/ABB.2/close": 1.89,
      "calc/ABB.2/19B:S19": 35.91,
    },
    {
      Datetime: 791251199999,
      "param1_sig.1/cond.1": 1.898,
      "param1_sig.2/cond.1": 1.89,
      "param2_sig.1/cond.1": 1.889,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: "SELL",
      inventory: 0.0,
      "org/SBIN.1/close": 1.89,
      "calc/SBIN.1/11B:S11": 20.79,
      "org/ABB.2/close": 1.89,
      "calc/ABB.2/19B:S19": 35.91,
    },
    {
      Datetime: 791510399999,
      "param1_sig.1/cond.1": 1.89,
      "param1_sig.2/cond.1": 1.88,
      "param2_sig.1/cond.1": 1.897,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 791596799999,
      "param1_sig.1/cond.1": 1.88,
      "param1_sig.2/cond.1": 1.84,
      "param2_sig.1/cond.1": 1.897,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 791683199999,
      "param1_sig.1/cond.1": 1.884,
      "param1_sig.2/cond.1": 1.89,
      "param2_sig.1/cond.1": 1.896,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 791769599999,
      "param1_sig.1/cond.1": 1.872,
      "param1_sig.2/cond.1": 1.86,
      "param2_sig.1/cond.1": 1.893,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 791855999999,
      "param1_sig.1/cond.1": 1.874,
      "param1_sig.2/cond.1": 1.9,
      "param2_sig.1/cond.1": 1.886,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 792115199999,
      "param1_sig.1/cond.1": 1.884,
      "param1_sig.2/cond.1": 1.93,
      "param2_sig.1/cond.1": 1.887,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": false,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 792201599999,
      "param1_sig.1/cond.1": 1.906,
      "param1_sig.2/cond.1": 1.95,
      "param2_sig.1/cond.1": 1.893,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: "BUY",
      inventory: 1.0,
      "org/SBIN.1/close": 1.95,
      "calc/SBIN.1/11B:S11": 21.45,
      "org/ABB.2/close": 1.95,
      "calc/ABB.2/19B:S19": 37.05,
    },
    {
      Datetime: 792287999999,
      "param1_sig.1/cond.1": 1.918,
      "param1_sig.2/cond.1": 1.95,
      "param2_sig.1/cond.1": 1.901,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 792374399999,
      "param1_sig.1/cond.1": 1.934,
      "param1_sig.2/cond.1": 1.94,
      "param2_sig.1/cond.1": 1.903,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 792374399999,
      "param1_sig.1/cond.1": 1.934,
      "param1_sig.2/cond.1": 1.94,
      "param2_sig.1/cond.1": 1.903,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: "SELL",
      inventory: 0.0,
      "org/SBIN.1/close": 1.94,
      "calc/SBIN.1/11B:S11": 21.34,
      "org/ABB.2/close": 1.94,
      "calc/ABB.2/19B:S19": 36.86,
    },
    {
      Datetime: 792460799999,
      "param1_sig.1/cond.1": 1.938,
      "param1_sig.2/cond.1": 1.92,
      "param2_sig.1/cond.1": 1.906,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": null,
      "signal.1": "BUY",
      trade: "BUY",
      inventory: 1.0,
      "org/SBIN.1/close": 1.92,
      "calc/SBIN.1/11B:S11": 21.12,
      "org/ABB.2/close": 1.92,
      "calc/ABB.2/19B:S19": 36.48,
    },
    {
      Datetime: 792460799999,
      "param1_sig.1/cond.1": 1.938,
      "param1_sig.2/cond.1": 1.92,
      "param2_sig.1/cond.1": 1.906,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: "SELL",
      inventory: 0.0,
      "org/SBIN.1/close": 1.92,
      "calc/SBIN.1/11B:S11": 21.12,
      "org/ABB.2/close": 1.92,
      "calc/ABB.2/19B:S19": 36.48,
    },
    {
      Datetime: 792719999999,
      "param1_sig.1/cond.1": 1.942,
      "param1_sig.2/cond.1": 1.95,
      "param2_sig.1/cond.1": 1.913,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: "BUY",
      inventory: 1.0,
      "org/SBIN.1/close": 1.95,
      "calc/SBIN.1/11B:S11": 21.45,
      "org/ABB.2/close": 1.95,
      "calc/ABB.2/19B:S19": 37.05,
    },
    {
      Datetime: 792806399999,
      "param1_sig.1/cond.1": 1.946,
      "param1_sig.2/cond.1": 1.97,
      "param2_sig.1/cond.1": 1.926,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 792892799999,
      "param1_sig.1/cond.1": 1.944,
      "param1_sig.2/cond.1": 1.94,
      "param2_sig.1/cond.1": 1.931,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 792892799999,
      "param1_sig.1/cond.1": 1.944,
      "param1_sig.2/cond.1": 1.94,
      "param2_sig.1/cond.1": 1.931,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": true,
      "signal.2": "SELL",
      "signal.1": null,
      trade: "SELL",
      inventory: 0.0,
      "org/SBIN.1/close": 1.94,
      "calc/SBIN.1/11B:S11": 21.34,
      "org/ABB.2/close": 1.94,
      "calc/ABB.2/19B:S19": 36.86,
    },
    {
      Datetime: 792979199999,
      "param1_sig.1/cond.1": 1.958,
      "param1_sig.2/cond.1": 2.01,
      "param2_sig.1/cond.1": 1.946,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: "BUY",
      inventory: 1.0,
      "org/SBIN.1/close": 2.01,
      "calc/SBIN.1/11B:S11": 22.11,
      "org/ABB.2/close": 2.01,
      "calc/ABB.2/19B:S19": 38.19,
    },
    {
      Datetime: 793065599999,
      "param1_sig.1/cond.1": 1.978,
      "param1_sig.2/cond.1": 2.02,
      "param2_sig.1/cond.1": 1.958,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 793411199999,
      "param1_sig.1/cond.1": 1.992,
      "param1_sig.2/cond.1": 2.02,
      "param2_sig.1/cond.1": 1.967,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 793497599999,
      "param1_sig.1/cond.1": 2.002,
      "param1_sig.2/cond.1": 2.02,
      "param2_sig.1/cond.1": 1.974,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 793583999999,
      "param1_sig.1/cond.1": 2.032,
      "param1_sig.2/cond.1": 2.09,
      "param2_sig.1/cond.1": 1.988,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 793670399999,
      "param1_sig.1/cond.1": 2.044,
      "param1_sig.2/cond.1": 2.07,
      "param2_sig.1/cond.1": 2.001,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 793929599999,
      "param1_sig.1/cond.1": 2.044,
      "param1_sig.2/cond.1": 2.02,
      "param2_sig.1/cond.1": 2.011,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 794015999999,
      "param1_sig.1/cond.1": 2.046,
      "param1_sig.2/cond.1": 2.03,
      "param2_sig.1/cond.1": 2.019,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 794102399999,
      "param1_sig.1/cond.1": 2.058,
      "param1_sig.2/cond.1": 2.08,
      "param2_sig.1/cond.1": 2.03,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 794188799999,
      "param1_sig.1/cond.1": 2.056,
      "param1_sig.2/cond.1": 2.08,
      "param2_sig.1/cond.1": 2.044,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 794275199999,
      "param1_sig.1/cond.1": 2.058,
      "param1_sig.2/cond.1": 2.08,
      "param2_sig.1/cond.1": 2.051,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 794534399999,
      "param1_sig.1/cond.1": 2.084,
      "param1_sig.2/cond.1": 2.15,
      "param2_sig.1/cond.1": 2.064,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 794620799999,
      "param1_sig.1/cond.1": 2.104,
      "param1_sig.2/cond.1": 2.13,
      "param2_sig.1/cond.1": 2.075,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 794707199999,
      "param1_sig.1/cond.1": 2.112,
      "param1_sig.2/cond.1": 2.12,
      "param2_sig.1/cond.1": 2.085,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 794793599999,
      "param1_sig.1/cond.1": 2.126,
      "param1_sig.2/cond.1": 2.15,
      "param2_sig.1/cond.1": 2.091,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 794879999999,
      "param1_sig.1/cond.1": 2.14,
      "param1_sig.2/cond.1": 2.15,
      "param2_sig.1/cond.1": 2.099,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 795139199999,
      "param1_sig.1/cond.1": 2.146,
      "param1_sig.2/cond.1": 2.18,
      "param2_sig.1/cond.1": 2.115,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 795225599999,
      "param1_sig.1/cond.1": 2.164,
      "param1_sig.2/cond.1": 2.22,
      "param2_sig.1/cond.1": 2.134,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 795311999999,
      "param1_sig.1/cond.1": 2.182,
      "param1_sig.2/cond.1": 2.21,
      "param2_sig.1/cond.1": 2.147,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
    {
      Datetime: 795398399999,
      "param1_sig.1/cond.1": 2.184,
      "param1_sig.2/cond.1": 2.16,
      "param2_sig.1/cond.1": 2.155,
      "param2_sig.2/cond.1": 1.95,
      "output_sig.1/cond.1": true,
      "output_sig.2/cond.1": false,
      "signal.2": null,
      "signal.1": "BUY",
      trade: null,
      inventory: null,
      "org/SBIN.1/close": null,
      "calc/SBIN.1/11B:S11": null,
      "org/ABB.2/close": null,
      "calc/ABB.2/19B:S19": null,
    },
  ],
};
