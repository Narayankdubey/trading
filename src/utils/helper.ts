import {
  REFRESH_KEY_CONSTANT,
  STORAGE_KEY_CONSTANT,
  USER_INFO,
  backtestingConstant,
} from "@/common/constants";
import moment from "moment";

export const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(STORAGE_KEY_CONSTANT) ?? "";
    return token;
  }
};

export const getRefreshToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(REFRESH_KEY_CONSTANT) ?? "";
    return token;
  }
};

export const getUserInfo = () => {
  if (typeof window !== "undefined") {
    const info = localStorage.getItem(USER_INFO) ?? "";
    return JSON.parse(info);
  }
};

export const deFormatData = (data: any) => {
  let tempArr = [];

  tempArr = data?.signals?.map((elem: any, i: number) => {
    let tempObj: any = { conditions: [] };
    if (elem?.transaction) tempObj.transaction = elem?.transaction;
    elem?.conditions?.map((condition: any, idx: number) => {
      let tempConObj: any = {};

      if (condition?.operator) tempConObj.operator = condition?.operator;
      for (let i = 1; i <= 2; i++) {
        backtestingConstant.formFields.forEach((item: any) => {
          if (condition?.[`param${i}`]?.[item]) {
            if (item === "start" || item === "end")
              tempConObj[`${item}_param${i}`] = moment(
                condition?.[`param${i}`]?.[item]
              );
            else
              tempConObj[`${item}_param${i}`] =
                condition?.[`param${i}`]?.[item];
          }
        });
      }

      tempObj.conditions.push(tempConObj);
    });
    return tempObj;
  });

  return { ...data, ["signals"]: tempArr };
};

export const formData = (raw: any) => {
  const signals = raw?.signals.map((signal: any) => {
    const conditions = signal.conditions.map((condition: any) => {
      return {
        param1: {
          symbol: condition?.symbol_param1,
          timeframe: condition?.timeframe_param1,
          type: condition?.type_param1,
          attribute: condition?.attribute_param1,
          indicator: condition?.indicator_param1,
          period: condition?.period_param1,
          value: condition?.value_param1,
        },
        operator: condition?.operator,
        param2: {
          symbol: condition?.symbol_param2,
          timeframe: condition?.timeframe_param2,
          type: condition?.type_param2,
          attribute: condition?.attribute_param2,
          indicator: condition?.indicator_param2,
          period: condition?.period_param2,
          value: condition?.value_param2,
        },
      };
    });
    return { ...signal, conditions };
  });

  return { ...raw, signals };
};

export const getColorByStatus = (status: string) => {
  switch (status.toLowerCase()) {
    case "created":
      return "warning";
    case "processing":
      return "processing";
    case "completed":
      return "success";
    default:
      break;
  }
};

export const createColumns = (data: any) => {
  let result: any = [];
  if (Array.isArray(data) && data.length) {
    let sortedArr = data.toSorted();
    sortedArr &&
      sortedArr.map((elem: any, i: number) => {
        if (elem === "Datetime") {
          result.push({
            title: elem,
            dataIndex: elem,
            key: elem,
            render: (date: any) => moment(date).format("DD/MM/YYYY"),
          });
        } else {
          result.push({
            title: elem,
            dataIndex: elem,
            key: elem,
            defaultSortOrder: "descend",
            // sorter: ()=>{}
          });
        }
      });
  }
  return result;
};
