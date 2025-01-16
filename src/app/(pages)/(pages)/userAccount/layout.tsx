"use client";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Profile } from "@/types";

export default function UserAccountLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const signout = async () => {
        await signOut();
    };

    const router = useRouter();
    const { data: session, status } = useSession();

    const [user, setUser] = useState<null | Profile>(null);
    useEffect(() => {
        if (status === "loading") {
            // Loading state, you can show a loader here if needed
            return;
        }

        if (status === "unauthenticated") {
            router.push("/login");
            return;
        }

        if (status === "authenticated" && session?.user?.id) {
            axios.post("/api/users/getUser", { id: session?.user?.id }).then((response) => {
                setUser(response.data);
            }).catch((error) => {
                console.error("Error fetching user data", error);
                signOut({ redirectTo: "/login" });
            });
        }
    }, [status, session?.user?.id, router]);

    if (status === "loading") return <div>Loading...</div>;

    if (status === "unauthenticated") {
        return <div>unauthenticated</div>;
    }




    const handleNavigation = (path: string) => {
        if (window.location.pathname !== path) {
            router.push(path); // Navigate only if not already on the target route
        }
    };

    return (
        <div className="user-account-wrapper">
            <div className="user-account-left-side">
                <div className="welcome-header">
                    <h2>
                        Hi, {user?.name?.split(" ")[0]}
                    </h2>
                    <p>{user?.email}</p>
                </div>
                <p>
                    Manage your profile, rewards, and preferences for all our brands in one place.
                </p>
                <ul className="user-links-container">
                    <li
                        onClick={() => handleNavigation("/userAccount")}
                    >
                        <i className="fa-regular fa-user"></i>
                        Profile
                        <i className="fa-solid fa-angle-right link-caret"></i>
                    </li>
                    <li
                        onClick={() => handleNavigation("/userAccount/preferences")}
                    >
                        <i className="fa-solid fa-table-list"></i>
                        Preferences
                        <i className="fa-solid fa-angle-right link-caret"></i>
                    </li>
                    <li
                        onClick={() => handleNavigation("/userAccount/reservations")}
                    >
                        <i className="fa-solid fa-table-list"></i>
                        Reservations
                        <i className="fa-solid fa-angle-right link-caret"></i>
                    </li>
                    <li
                        onClick={() => handleNavigation("/userAccount/payments")}
                    >
                        <i className="fa-solid fa-credit-card"></i>
                        Payments
                        <i className="fa-solid fa-angle-right link-caret"></i>
                    </li>
                    <li
                        onClick={() => handleNavigation("/userAccount/settings")}
                    >
                        <i className="fa-solid fa-gear"></i>
                        Settings
                        <i className="fa-solid fa-angle-right link-caret"></i>
                    </li>
                    <li
                        onClick={signout}
                    >
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Logout
                        <i className="fa-solid fa-angle-right link-caret"></i>
                    </li>
                </ul>
            </div>
            <div className="user-account-right-side">
                {children}
            </div>
        </div>
    );
}
