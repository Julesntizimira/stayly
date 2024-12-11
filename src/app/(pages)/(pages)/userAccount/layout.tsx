"use client";
import { useRouter } from "next/navigation";

export default function UserAccountLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const router = useRouter();

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
                        Hi, Benjamin
                    </h2>
                    <p>Joelbenjamin@gmail.com</p>
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
                    <li>
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
