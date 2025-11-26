import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login with email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "abhi@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;

        // TODO: check in DB instead of hard-coding
        if (username === "abhi@gmail.com" && password === "123456") {
          // user found → return user object
          return {
            id: "1",
            name: "Abhi",
            email: "abhi@gmail.com",
          };
        }

        // login failed
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
