"use client";
import { Profile } from "@/types";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Header() {


    const { data: session, status } = useSession();
    const router = useRouter();
    const [user, setUser] = useState<null | Profile>(null);

    useEffect(() => {
        // if (status === "loading") {
        //     // Loading state, you can show a loader here if needed
        //     return;
        // }

        // if (status === "unauthenticated") {
        //     router.push("/login");
        //     return;
        // }

        if (status === "authenticated" && session?.user?.id) {
            axios.post("/api/users/getUser", { id: session?.user?.id }).then((response) => {
                setUser(response.data);
            }).catch((error) => {
                console.error("Error fetching user data", error);
                signOut({ redirectTo: "/login" });
            });
        }
    }, [status, session?.user?.id, router]);



    const handleNavigation = (path: string) => {
        if (window.location.pathname !== path) {
            router.push(path); // Navigate only if not already on the target route
        }
    };
    return (
        <header>
            <div className="header-upper">
                <div className="social-media-logo-conts">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <div className="vertical-divider"></div>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        123-456-7890
                    </p>

                </div>
            </div>
            <div className="header-content-wrapper">
                <div className="main-logo">
                    <span>
                        LOGO
                    </span>
                </div>
                <ul className="header-nav">
                    <li
                        onClick={() => handleNavigation("/")}
                    >Home</li>
                    <li
                        onClick={() => handleNavigation("/explore")}
                    >Explore</li>
                    <li>About Us</li>
                    <li
                        onClick={() => handleNavigation("/hostDashboard")}
                    >List Property</li>
                    <li
                        onClick={() => handleNavigation("/contact")}
                    >Contact Us</li>
                    {
                        status === "authenticated" && (<li>
                            <div className="profile-avatar"
                                onClick={() => handleNavigation("/userAccount")}>
                                <img src="/images/profile-avatar.jpg" alt="" />
                            </div>
                        </li>)
                    }
                    {
                        status === "unauthenticated" && (<li
                            onClick={() => handleNavigation("/login")}
                        >
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_164_7392)">
                                    <path d="M20 23.3232V21.3232C20 20.2624 19.5786 19.245 18.8284 18.4948C18.0783 17.7447 17.0609 17.3232 16 17.3232H8C6.93913 17.3232 5.92172 17.7447 5.17157 18.4948C4.42143 19.245 4 20.2624 4 21.3232V23.3232" stroke="#2C3A61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 13.75C14.2091 13.75 16 11.9591 16 9.75C16 7.54086 14.2091 5.75 12 5.75C9.79086 5.75 8 7.54086 8 9.75C8 11.9591 9.79086 13.75 12 13.75Z" stroke="#2C3A61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <rect x="1" y="1.75" width="22" height="22" rx="11" stroke="#2C3A61" strokeWidth="2" />
                                <defs>
                                    <clipPath id="clip0_164_7392">
                                        <rect y="0.75" width="24" height="24" rx="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Login
                        </li>)
                    }
                </ul>
            </div>
        </header>
    )
}