import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import TwitterProvider from "next-auth/providers/twitter";
import TwitchProvider from "next-auth/providers/twitch";
import GoogleProvider from "next-auth/providers/google";
import RedditProvider from "next-auth/providers/reddit";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

const myUserId = "clchpwd1l0000uqw8ubb3i7ep";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn", user, account, profile, email, credentials);

      if (user.id === myUserId) {
        return true;
      }
      return true;
    },
  },

  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: "process.env.GOOGLE_CLIENT_ID",
      clientSecret: " process.env.GOOGLE_CLIENT_SECRET",
    }),
    RedditProvider({
      clientId: "process.env.REDDIT_CLIENT_ID",
      clientSecret: " process.env.REDDIT_CLIENT_SECRET",
    }),
    TwitchProvider({
      clientId: "process.env.TWITCH_CLIENT_ID",
      clientSecret: " process.env.TWITCH_CLIENT_SECRET",
    }),
    TwitterProvider({
      clientId: "process.env.TWITTER_CLIENT_ID",
      clientSecret: " process.env.TWITTER_CLIENT_SECRET",
      version: "2.0",
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
