import {
  REFRESH_KEY_CONSTANT,
  STORAGE_KEY_CONSTANT,
  USER_INFO,
  tempStrategyData,
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
    let tempObj: any = {};
    if (elem?.transaction) tempObj.transaction = elem?.transaction;
    if (elem?.models[0]?.operator) tempObj.operator = elem?.models[0]?.operator;

    for (let i = 1; i <= 2; i++) {
      ["type", "symbol", "attribute", "start", "end", "value"].forEach(
        (item: any) => {
          if (elem?.models[0]?.param1?.[item]) {
            if (item === "start" || item === "end")
              tempObj[`${item}_param${i}`] = moment(
                elem?.models[0]?.param1?.[item]
              );
            else tempObj[`${item}_param${i}`] = elem?.models[0]?.param1?.[item];
          }
        }
      );
    }

    return tempObj;
  });

  return { ...data, ["signals"]: tempArr };
};

export const getStrategyData = (id:string) =>{
  return tempStrategyData;
}