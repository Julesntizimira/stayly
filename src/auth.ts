import NextAuth, { CredentialsSignin } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'




export const { handlers, signIn, signOut, auth } =
    NextAuth({
        secret: process.env.JWT_SECRET,
        providers: [
            CredentialsProvider({
                name: 'Credentials',
                credentials: {
                    email: { label: "Username", type: "username" },
                    password: { label: "Password", type: "password" }
                },
                async authorize(credentials) {

                    console.log('credentials', credentials)
                    const res = await fetch("http://127.0.0.1:8000/profiles/login/", {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" }
                    })
                    const user = await res.json()

                    // If no error and we have user data, return it
                    if (res.ok && user) {
                        if (res.ok && user) {
                            console.log('user', user)   
                            return {
                                id: user.id,
                                email: user.email,
                                name: user.name,
                                username: user.username,
                                image_url: user.image_url,
                                token: user.token,
                            };
                        }
                    }
                    // Return null if user data could not be retrieved
                    throw new CredentialsSignin('Invalid username or password')
                }
            }),
        ],
        pages: {
            signIn: "/login",
        },
        session: {
            strategy: 'jwt',
        },
        callbacks: {
            async session({ session, token }) {
                session.user.id = token.sub;
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.username = token.username;
                session.user.image_url = token.image_url;
                session.user.token = token.token;
                return session;
            },
            
            async jwt({ token, user }) {
                if (user) {
                    token.sub = user.id;
                    token.email = user.email;
                    token.name = user.name;
                    token.username = user.username;
                    token.image_url = user.image_url;
                    token.token = user.token;
                }
                return token;
            },
            
            async signIn({ user, account }) {
                if (account?.provider === 'credentials') {
                    console.log('Credentials sign-in successful'); // Debug sign-in
                    return true;
                } else {
                    return false;
                }
            }
        }
    });
