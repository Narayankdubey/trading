import { iciciIcon } from "../../public/images";

export const appListData = [
  {
    id: 1,
    provider: "ICICI",
    label: "ICICI Direct",
    logo: iciciIcon,
    website: "http://icicidirect.com",
    authorization: {
      type: "OAUTH",
      fields: [
        {
          key: "api_key",
          label: "API Key",
          description:
            "Provide the API key available at the ICICI setting panel",
          required: true,
          type: "text"
        },
        {
          key: "api_secret",
          label: "API Secret",
          description:
            "Provide the API secret available at the ICICI setting panel",
          required: true,
          type: "text"
        }
      ],
      info: [
        {
          label: "Redirect URI",
          message:
            "Please set the redirect uri in ICICI setting panel as http://tradeX.com/"
        }
      ]
    }
  }
];

export const getProviderLogo = (account: any) =>
  appListData.filter((provider) => provider.provider == account?.provider)?.[0]
    ?.logo;
