"use server";


import { auth, signIn, signOut } from "@/auth";

export async function doCredentialLogin(formData: FormData) {
    try {
        console.log('in action');
        const response = await signIn("credentials", {
            redirect: false,
            username: formData.get("username"),
            password: formData.get("password"),
        });
        return response;
    } catch (error: any) {
        return ({error: error.message});
    }
}

export async function doLogout() {
    try {
        await signOut({redirectTo: "/"});
    } catch (error) {
        console.log(error);
    }
}


export async function doGetSession() {
    const session = await auth();
    if(!session) {
        return null;
    }
    const user = session.user;
    return user;
}