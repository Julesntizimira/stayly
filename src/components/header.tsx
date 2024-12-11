"use client";
import { useRouter } from "next/navigation";

export default function Header() {

    const router = useRouter();

    const handleNavigation = (path: string) => {
        if (window.location.pathname !== path) {
            router.push(path); // Navigate only if not already on the target route
        }
    };
    return (
        <header>
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
                    <li>Explore</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    
                </ul>
                <div className="header-personalised">
                    <button className="header-btn">Become A Host</button>
                    <div className="current-user-container">
                        <div className="current-user-avatar">
                            <img src="https://s3-alpha-sig.figma.com/img/1bae/9062/fab563b9f48b2e9d455a1060afcbfd6b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUOBqhWGkItTwBTlPo7LRJFyYVL-uRvPuzJkSc0lLQF0pGxZ1fV5Vr0Mw7otLF1rel5E4uZ2QoREyovs09R3piiaPfob4jbh2W6yxN6rKJcrJNgOJksM8UhXCPSXJH6uA8PI1GMF2kiJbvYLfrixlBzfNrZpaUkWLp-RWQiZN2b6P8CGzEIuhcGvelP7ikKz~cekUBD-MRs0FL9b1iwwzF8kl8Bu8neBRoZ-QjGhkBleiEfsNx9cgTr8mKeRgO-n81mPMUgm-xvAAoqoWBO15eRduVJaxtwVaLAkHnYRClKVK17PsY0CXIWBhen7OabdbPAodMfR3Ihsi0gNCTARvg__" alt="avatar-img" />
                            <span>Account</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <p className="user-rep-alphabet">
                            A
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}