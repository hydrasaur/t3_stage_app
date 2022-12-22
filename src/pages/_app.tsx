import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Layout from "../components/Layout";

import { AnimatePresence } from 'framer-motion'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </SessionProvider >
  );
};

export default trpc.withTRPC(MyApp);
