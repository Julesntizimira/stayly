import HorizontalDivider from "./horizontalDivider";

export default function Footer() {
    return (
        <footer>
            <div className="footer-upper-part">
                <div className="footer-column">
                    <h3>Opening hours</h3>
                    <ul>
                        <li>Mon-Fri 08:00AM - 08:00PM</li>
                        <li>Sat-Sun 08:00AM - 08:00PM</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Find Us</h3>
                    <ul>
                        <li>Norrsken Kigali House
                            1 KN 78 St., Kigali, Rwanda</li>
                        <li>Phone: 123-456-7890</li>
                        <li>Julesestate@hotmail.com</li>

                    </ul>
                </div>
                <div className="footer-column quick-links">
                    <h3>Properties</h3>
                    <ul>
                        <li>Hotels</li>
                        <li>Apartments</li>
                        <li>Resorts</li>
                        <li>Villas</li>
                        <li>Guest Houses</li>
                        <li>Bed & Breakfasts</li>
                    </ul>
                </div>
                <div className="footer-column quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>Explore</li>
                        <li>Become A Host</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter to get the latest news and offers.</p>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>

            </div>
            <HorizontalDivider />
            <div className="footer-bottom-part">
                <p>©Copyright Jules Estate 2024. Design by bloomingpixels.co.uk</p>
                <div className="footer-social-media-logo-conts">
                    <div className="social-logo-cont">
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="social-logo-cont">
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="social-logo-cont">
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                    <div className="social-logo-cont">
                        <i className="fa-brands fa-telegram"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}