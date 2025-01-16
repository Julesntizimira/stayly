"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Profile } from "@/types";
;


export default function UserAccountPage() {

    const { data: session, status } = useSession();
    const router = useRouter();
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
                console.log(response.data);
                setUser(response.data);
            }).catch((error) => {
                console.error("Error fetching user data", error);
                signOut( {redirectTo: "/login"} );
            });
        }
    }, [status, session?.user?.id, router]);
    return (
        <div className="profile-infos-container">
            <section className="info-section">
                <div className="info-section-heading">
                    <h2>Basic information</h2>
                    <p>Make sure this information matches your travel ID, like your passport or license.</p>
                </div>
                <div className="info-section-body">
                    <div className="info-container">
                        <h3>Full Name</h3>
                        <p>{user?.name}</p>
                    </div>
                    <div className="info-container">
                        <h3>Date of birth</h3>
                        <p>{user?.date_of_birth ? user.date_of_birth.toString() : "Not provided"}</p>
                    </div>
                    <div className="info-container">
                        <h3>Bio</h3>
                        <p>Not provided</p>
                    </div>
                    <div className="info-container">
                        <h3>Disability </h3>
                        <p>None</p>
                    </div>
                    <div className="info-container">
                        <h3>Accessibility needs</h3>
                        <p>Not provided</p>
                    </div>
                    <div className="info-container">
                        <h3>Gender</h3>
                        <p>Male</p>
                    </div>
                </div>
            </section>
            <section className="info-section">
                <div className="info-section-heading">
                    <h2>Contact</h2>
                    <p>Receive account activity alerts and trip updates by sharing this information.</p>
                </div>
                <div className="info-section-body">
                    <div className="info-container">
                        <h3>Mobile Number</h3>
                        <p>{user?.phone_number}</p>
                    </div>
                    <div className="info-container">
                        <h3>Email</h3>
                        <p>{user?.email}</p>
                    </div>
                    <div className="info-container">
                        <h3>Emergency contact </h3>
                        <p>Not provided</p>
                    </div>
                    <div className="info-container">
                        <h3>Address</h3>
                        <p>Not provided</p>
                    </div>
                </div>
            </section>
        </div>
    )
}