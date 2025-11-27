import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login with email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "abhi@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        console.log("Username:", username);
        console.log("Password:", password);

        
        const user = {
          id: "1",
          name: "Abhi",
          email: "abhi@gmail.com",
          username: "abhi@gmail.com",
        };

        
        if (username === user.username && password === "123456") {
          
        }
        return user;

      
        return null;
      },
    }),

  
    GoogleProvider({
      clientId: "asd",
      clientSecret: "Asd",
    }),

    
    GitHubProvider({
      clientId: "asd",
      clientSecret: "Asd",
    }),
  ]
});

export { handler as GET, handler as POST };
