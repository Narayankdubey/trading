import { Suspense, lazy } from "react";
import Head from "next/head";
// import LayoutContainer from "@/components/layout";
import { HomeContainer } from "@/components/screens";

const LayoutContainer = lazy(() => import("@/components/layout"));

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>TRADINGX</title>
        <meta name="description" content="Check your stocks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Suspense fallback={<p>Loading......</p>}>
        <LayoutContainer>
          <HomeContainer />
        </LayoutContainer>
      </Suspense>
    </>
  );
}
