export enum Resources {
  AUTH = "AUTH",
  TRADING_STRATEGY = "TRADING_STRATEGY",
  TRADING_CLIENT = "TRADING_CLIENT",
  USER = "USER"
}

export enum Versions {
  V0 = "v0",
  V1 = "v1",
  V2 = "v2"
}

export enum Methods {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

interface Endpoint {
  METHOD: string;
  URI: string;
}

export interface Resource {
  BASE: string;
  ENDPOINTS: Record<string, Endpoint>;
}
