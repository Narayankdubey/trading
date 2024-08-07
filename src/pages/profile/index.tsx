import { Suspense, lazy } from "react";
import Head from "next/head";
import LayoutContainer from "@/components/layout";
import { ProfileContainer } from "@/components/screens";

// const ProfileContainer = lazy(() => import("@/components/screens/profile"));

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <LayoutContainer>
        <Suspense fallback={<p>Loading......</p>}>
          <ProfileContainer />
        </Suspense>
      </LayoutContainer>
    </>
  );
}
