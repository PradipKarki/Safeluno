// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!
//     }),
//     AppleProvider({
//       clientId: process.env.APPLE_CLIENT_ID!,
//       clientSecret: process.env.APPLE_CLIENT_SECRET!
//     })
//   ],
//   callbacks: {
//     async jwt({ token, account }) {
//       if (account) token.accessToken = account.access_token;
//       return token;
//     },
//     async session({ session, token }) {
//       session.accessToken = token.accessToken;
//       return session;
//     }
//   }
// });

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Test Login",
      credentials: {
        username: { label: "Username", type: "text" }
      },
      async authorize(credentials) {
        // Always return a fake user for testing
        return { id: "1", name: credentials?.username || "Test User" };
      }
    })
  ],

  session: { strategy: "jwt" },

  callbacks: {
    // Attach user to JWT
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },

    // Expose user in session
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },

    // This makes middleware actually protect routes
    authorized({ token }) {
      return !!token;
    }
  },

  pages: {
    signIn: "/signin",
    signOut: "/", // redirect after logout
  }
});

export { handler as GET, handler as POST };

