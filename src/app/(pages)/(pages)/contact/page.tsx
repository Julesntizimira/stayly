import FaqQuestion from "@/components/faqQuestion";
import { bookingPlatformFAQ } from "@/utils";

export default function ContactPage() {
    return (
        <div className="contact-page-wrapper">
            <div className="contact-page-heading">
                <div className="contact-page-title">
                    <h1>Customer Service</h1>
                    <p>How can we help? We're available 24 hours a day.</p>
                </div>
                <div className="contact-options">
                    <div className="contact-option">
                        <img src="images/Phone.png" alt="" />
                        <div className="contact-content">
                            <h3>Call Us</h3>
                            <p>For anything urgent, you can call us 24/7 at a local or international phone number.</p>
                        </div>
                    </div>
                    <div className="contact-option">
                        <img src="images/Message.png" alt="" />
                        <div className="contact-content">
                            <h3>Send us a message</h3>
                            <p>Contact our agents about your booking, and we'll reply as soon as possible.</p>
                        </div>
                    </div>
                    <div className="contact-option">
                        <img src="images/Property.png" alt="" />
                        <div className="contact-content">
                            <h3>Contact the property</h3>
                            <p>For details about your stay, they usually know best.</p>
                        </div>
                    </div>
                </div>
                <button>Go To The Help Center</button>
            </div>
            <div className="contact-page-middle-part">
                <h3>Our Help Center</h3>
                <div className="helps-wrapper">
                    <div className="help-container">
                        <h4>Tailor-made Customer Service</h4>
                        <p>Tell us what's happening and we'll guide you through what to do next.</p>
                    </div>
                    <div className="help-container">
                        <h4>Contact us anytime</h4>
                        <p>Send us a message or pick up the phone – our agents are always available</p>
                    </div>
                    <div className="help-container">
                        <h4>All the important things in one place</h4>
                        <p>Call or message the property, and see all the essential information about your stay.</p>
                    </div>
                </div>
            </div>
            <div className="faq-section">
                <h3>Frequently asked questions</h3>
                <div className="faq-container">
                    {
                        bookingPlatformFAQ.map((faq, index) => {
                            return <FaqQuestion key={index} container={faq} />
                        })
                    }      
                </div>
            </div>
        </div>
    )
}