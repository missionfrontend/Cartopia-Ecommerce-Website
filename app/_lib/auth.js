import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  createUser,
  getAvatar,
  getUser,
  getUserWithEmail,
} from "./apiProducts";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      // name: "Credentials",
      // credentials: {
      //   email: {
      //     label: "Email",
      //     type: "email",
      //     placeholder: "Enter Email Address",
      //   },
      //   password: { label: "Password", type: "password" },
      // },

      async authorize(credentials, req) {
        try {
          const verifyUser = await getUserWithEmail({
            email: credentials.email,
            password: credentials.password,
          });

          // const user = {id:"3",fullName:"Ritik Yadav",email:"ritikyadavaks@gmail.com"}

          if (verifyUser) {
            
            return verifyUser;
            // console.log(user)
          }

          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      async session({ token, user, session }) {
        session.accessToken = token.accessToken;
        session.user.id = user.id;
        session.user.name = user.fullName;

        return session;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile, credentials }) {
      try {
        const existingUser = await getUser(user.email);
        if (!existingUser)
          await createUser({ email: user.email, fullName: user.name });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({ session }) {
      const user = await getUser(session.user.email);
      const [first,last] = user?.fullName?.split(" ");
      const avatar = `https://avatar.iran.liara.run/username?username=${first}+${last}`;

      session.avatar = avatar;
      session.user.userId = user.id;
      session.name = user.fullName;
      return session;
    },
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },

  clientSecret: process.env.NEXTAUTH_SECRET,
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
