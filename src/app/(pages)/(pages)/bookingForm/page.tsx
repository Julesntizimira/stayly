"use client";
import { useState } from "react";
import CreditCardOption from "@/components/creditCardOption";
import FormField from "@/components/formField";
import PhoneNumberField from "@/components/phoneNumberField";
import RadioFields from "@/components/radiofields";
import SelectField from "@/components/selectField";
import TextareaField from "@/components/textareaField";
import Calendar from "@/components/calendar";



export default function BookingFormPage() {
    const [contactHeight, setContactHeight] = useState("100vh");
    const [paymentHeight, setPaymentHeight] = useState("100vh");
    const [cancellationHeight, setCancellationHeight] = useState("100vh");

    return (
        <div className="booking-form-wrapper">
            <div className="booking-form-left-side">
                <form
                    style={{
                        maxHeight: contactHeight,
                    }}
                >
                    <h3>
                        Contact Information
                        <i className="fa-solid fa-angle-up form-caret"
                            onClick={() => {
                                setContactHeight((prev) => {
                                    return prev === "100vh" ? "53px" : "100vh";
                                })
                            }}
                        ></i>
                    </h3>

                    <fieldset className="combined-fields">
                        <FormField container={{
                            type: "text",
                            label: "Name",
                            placeholder: "Benjamin"
                        }} />
                        <FormField container={{
                            type: "text",
                            label: "Surname",
                            placeholder: "Joel"
                        }} />
                    </fieldset>
                    <FormField container={{
                        type: "email",
                        label: "Email",
                        placeholder: "benjamin@example.com"
                    }} />
                    <PhoneNumberField />
                    <h3>Room Application Form</h3>
                    <RadioFields container={{
                        name: "howmany", fields: [
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" }
                        ],
                        legend: "Are you coming alone?"
                    }} />
                    <RadioFields container={{
                        name: "proffession", fields: [
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" }
                        ],
                        legend: "Do you study or work?"
                    }} />
                    <SelectField
                        container={{
                            label: "At which university do you study",
                            options: [
                                { value: "1", label: "University of Rwanda" },
                                { value: "2", label: "University of Nairobi" },
                                { value: "3", label: "University of Ghana" }
                            ]
                        }}
                    />
                    <TextareaField
                        container={{
                            label: "Tell us about yourself",
                            placeholder: "Enter a description..."
                        }}
                    />
                </form>
                <form
                    style={{
                        maxHeight: paymentHeight,
                    }}
                >
                    <h3>
                        Payment
                        <i className="fa-solid fa-angle-up form-caret"
                            onClick={() => {
                                setPaymentHeight((prev) => {
                                    return prev === "100vh" ? "53px" : "100vh";
                                })
                            }}
                        ></i>
                    </h3>
                    <div className="payment-options">
                        <div className="payment-option">
                            <svg width="32" height="11" viewBox="0 0 32 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.93367 10.6316H5.18735L3.12794 2.54373C3.03019 2.17169 2.82264 1.84279 2.51735 1.68777C1.75545 1.29821 0.915887 0.988172 0 0.831807V0.520426H4.42411C5.0347 0.520426 5.49264 0.988172 5.56897 1.5314L6.6375 7.36543L9.38248 0.520426H12.0525L7.93367 10.6316ZM13.579 10.6316H10.9853L13.121 0.520426H15.7147L13.579 10.6316ZM19.0703 3.32152C19.1466 2.77694 19.6045 2.46555 20.1388 2.46555C20.9784 2.38737 21.8929 2.54374 22.6562 2.93195L23.1141 0.754978C22.3509 0.443596 21.5113 0.287231 20.7494 0.287231C18.232 0.287231 16.4003 1.68777 16.4003 3.63155C16.4003 5.11028 17.6978 5.88671 18.6137 6.35445C19.6045 6.82085 19.9862 7.13223 19.9098 7.59863C19.9098 8.29823 19.1466 8.60961 18.3847 8.60961C17.4688 8.60961 16.5529 8.37641 15.7147 7.98685L15.2568 10.1652C16.1726 10.5534 17.1635 10.7098 18.0794 10.7098C20.902 10.7866 22.6562 9.38739 22.6562 7.28725C22.6562 4.64253 19.0703 4.48751 19.0703 3.32152ZM31.7333 10.6316L29.6739 0.520426H27.4619C27.0039 0.520426 26.546 0.831807 26.3933 1.29821L22.5798 10.6316H25.2498L25.7827 9.15419H29.0633L29.3686 10.6316H31.7333ZM27.8435 3.24334L28.6054 7.05406H26.4697L27.8435 3.24334Z" fill="#172B85" />
                            </svg>
                            <p>Visa</p>
                        </div>
                        <div className="payment-option">
                            <svg width="33" height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.02976 2.34544C5.643 2.81464 5.02418 3.18471 4.40536 3.13184C4.328 2.49744 4.63097 1.82338 4.9855 1.40705C5.37226 0.924636 6.0491 0.580999 6.59701 0.554565C6.66147 1.21541 6.41007 1.86303 6.02976 2.34544ZM6.59052 3.2574C6.04535 3.22523 5.5479 3.42548 5.1461 3.58723C4.88754 3.69132 4.66858 3.77946 4.502 3.77946C4.31506 3.77946 4.08706 3.6866 3.83107 3.58235C3.49564 3.44574 3.11215 3.28955 2.71 3.29705C1.78822 3.31027 0.930894 3.84555 0.460334 4.69803C-0.506572 6.403 0.208938 8.9274 1.14361 10.3152C1.60128 11.0024 2.1492 11.7558 2.87115 11.7294C3.18877 11.7171 3.41724 11.6177 3.65369 11.5148C3.92591 11.3964 4.2087 11.2734 4.65026 11.2734C5.07651 11.2734 5.34693 11.3932 5.60652 11.5082C5.85334 11.6176 6.09038 11.7226 6.44226 11.7161C7.19 11.7029 7.66056 11.0289 8.11823 10.3416C8.61213 9.60397 8.82917 8.88408 8.86211 8.77483L8.86597 8.76219C8.86518 8.76139 8.85908 8.75852 8.84834 8.75348L8.84831 8.75347C8.6832 8.67598 7.42127 8.08371 7.40916 6.49551C7.39701 5.16245 8.4101 4.48704 8.56958 4.38072L8.56961 4.3807C8.5793 4.37424 8.58583 4.36988 8.58879 4.36761C7.94418 3.38957 6.9386 3.28383 6.59052 3.2574ZM11.7667 11.6434V1.34096H15.5377C17.4844 1.34096 18.8445 2.7155 18.8445 4.72446C18.8445 6.73341 17.4586 8.12117 15.4861 8.12117H13.3267V11.6434H11.7667ZM13.3265 2.68907H15.125C16.4787 2.68907 17.2522 3.42921 17.2522 4.73107C17.2522 6.03292 16.4787 6.77967 15.1185 6.77967H13.3265V2.68907ZM23.9949 10.4077C23.5824 11.2139 22.6735 11.7228 21.6937 11.7228C20.2433 11.7228 19.2313 10.8372 19.2313 9.50234C19.2313 8.18066 20.2111 7.42069 22.0225 7.30835L23.9692 7.1894V6.62108C23.9692 5.78181 23.4341 5.32583 22.4801 5.32583C21.6937 5.32583 21.12 5.74216 21.004 6.37657H19.5987C19.6439 5.04167 20.8686 4.07024 22.5252 4.07024C24.3108 4.07024 25.4711 5.02845 25.4711 6.51534V11.6435H24.0272V10.4077H23.9949ZM22.1126 10.5002C21.281 10.5002 20.7525 10.0905 20.7525 9.46269C20.7525 8.81507 21.2617 8.43839 22.2351 8.37891L23.969 8.26657V8.84811C23.969 9.81294 23.1697 10.5002 22.1126 10.5002ZM30.2604 12.0466C29.6352 13.8507 28.9197 14.4454 27.3984 14.4454C27.2824 14.4454 26.8956 14.4322 26.8053 14.4058V13.17C26.902 13.1832 27.1405 13.1964 27.263 13.1964C27.9527 13.1964 28.3395 12.8991 28.578 12.1259L28.7198 11.6699L26.0769 4.16937H27.7078L29.5449 10.2557H29.5771L31.4143 4.16937H33L30.2604 12.0466Z" fill="black" />
                            </svg>
                            <p>ApplePay</p>
                        </div>
                        <div className="payment-option">
                            <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.08868 17.6812L4.38298 15.7491L3.72738 15.7333H0.596802L2.77244 1.47513C2.77922 1.43196 2.80113 1.39188 2.83313 1.36337C2.86529 1.33485 2.90628 1.31921 2.94915 1.31921H8.22779C9.98035 1.31921 11.1897 1.69606 11.821 2.43998C12.1171 2.78897 12.3056 3.15376 12.3969 3.55505C12.4925 3.97622 12.4941 4.47933 12.4008 5.09308L12.394 5.13772V5.53102L12.69 5.70437C12.9393 5.84107 13.1374 5.99748 13.2894 6.17653C13.5425 6.47502 13.7063 6.85431 13.7755 7.30382C13.8471 7.76621 13.8234 8.31657 13.7063 8.9396C13.5712 9.65615 13.3529 10.2803 13.058 10.7909C12.7868 11.2615 12.4413 11.6518 12.031 11.9542C11.6393 12.2416 11.1739 12.4598 10.6478 12.5994C10.1378 12.7366 9.55647 12.8058 8.91885 12.8058H8.50806C8.21439 12.8058 7.92908 12.9152 7.70508 13.1112C7.48045 13.3112 7.33196 13.5846 7.28641 13.8836L7.25535 14.0576L6.73533 17.4633L6.71184 17.5882C6.70553 17.6278 6.69481 17.6475 6.67905 17.6609C6.66502 17.6731 6.64484 17.6812 6.62514 17.6812H4.08868Z" fill="#28356A" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.9707 5.18323C12.9551 5.28734 12.9369 5.39373 12.9168 5.50305C12.2207 9.19724 9.83899 10.4734 6.79731 10.4734H5.24857C4.87656 10.4734 4.56303 10.7525 4.50518 11.1318L3.48766 17.8028C3.44998 18.052 3.63568 18.2763 3.87874 18.2763H6.62565C6.95085 18.2763 7.22718 18.0321 7.27841 17.7005L7.30536 17.5563L7.82255 14.164L7.85581 13.978C7.90641 13.6453 8.18337 13.4009 8.50857 13.4009H8.91936C11.5807 13.4009 13.6641 12.2842 14.273 9.0524C14.5273 7.70239 14.3957 6.57511 13.7226 5.78231C13.5189 5.54329 13.2662 5.34485 12.9707 5.18323Z" fill="#298FC2" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.242 4.88312C12.1356 4.85102 12.0259 4.82202 11.9134 4.79579C11.8002 4.77021 11.6843 4.74756 11.565 4.72768C11.1474 4.65795 10.6898 4.62488 10.1997 4.62488H6.06236C5.96037 4.62488 5.86359 4.64867 5.77705 4.69168C5.58616 4.7865 5.44444 4.97321 5.41008 5.2018L4.52986 10.9638L4.50464 11.1318C4.56249 10.7525 4.87602 10.4734 5.24803 10.4734H6.79677C9.83845 10.4734 12.2201 9.19659 12.9162 5.50305C12.937 5.39373 12.9545 5.28734 12.9701 5.18323C12.7941 5.08661 12.6033 5.00401 12.3979 4.93362C12.3472 4.91619 12.2948 4.89941 12.242 4.88312Z" fill="#22284F" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.41037 5.20182C5.44474 4.97324 5.58645 4.78652 5.77734 4.69235C5.86451 4.64918 5.96067 4.62539 6.06266 4.62539H10.2C10.6901 4.62539 11.1477 4.65863 11.5653 4.72836C11.6846 4.74807 11.8005 4.77088 11.9137 4.79646C12.0262 4.82253 12.1359 4.85169 12.2423 4.88363C12.2951 4.89992 12.3475 4.91686 12.3987 4.93365C12.6041 5.00403 12.795 5.08729 12.9711 5.18325C13.1782 3.81809 12.9693 2.8886 12.2552 2.04692C11.4679 1.1202 10.047 0.723633 8.22868 0.723633H2.94989C2.5785 0.723633 2.26166 1.00273 2.20428 1.38267L0.00562688 15.7875C-0.0377221 16.0724 0.174924 16.3295 0.452988 16.3295H3.71188L5.41037 5.20182Z" fill="#28356A" />
                            </svg>
                            <p>PayPal</p>
                        </div>
                    </div>
                    <CreditCardOption />
                </form>
                <form
                    style={{
                        maxHeight: cancellationHeight,
                    }}
                >
                    <h3>
                        Cancellation Policy
                        <i className="fa-solid fa-angle-up form-caret"
                            onClick={() => {
                                setCancellationHeight((prev) => {
                                    return prev === "100vh" ? "53px" : "100vh";
                                })
                            }}
                        ></i>
                    </h3>
                    <p>
                        By selecting the button below, I agree to the Erasmus Life Housing rules,  Booking and Refund rules.
                        <br />
                        <br />
                        I also agree to the <span>updated Terms of Service, Payments Terms of Service, and I acknowledge the Privacy Police.</span>
                    </p>
                </form>
            </div>
            <div className="booking-form-right-side">
                <div className="booking-img-cont">
                    <img src="https://s3-alpha-sig.figma.com/img/501e/6d8e/efc0107dcf38a315eae75382506f7e3f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2gEqaa-WQbmPWTTuz8RaB-rR-2sxLwyqmt40Uy2caCqLRcKr2flBQQnIbu5BZ-CdPUrRbiX5050xanKvF-RrvmcSMruXWrn2r~UArOisKevktz9b1wWYZ-M0acolxi3hTv9K6goGBZawYqql3seOluc6jUGfN7kMz5XTHhQskZyaE9wUb8mQgmSpPw4rcCnGL0H2kPwDA~O2porNnsZVqTdqrCdQ16P1t2ChcIop4QB7w20o-dP95tRCxjjIh1qYhpkoHfTarK7LODdAK1WIJDWqPhGW-ApGgEz71zgdgKGdzO~PXFc2gtD6IpGl6EslNAa9GliDiluvz8wj9bU0g__" alt="" />
                </div>
                <h3>Room 7 in Nyarutarama, Rwanda</h3>
                <div className="property-address">
                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.22188 9.525C6.53782 9.525 5.88178 9.27478 5.39808 8.82938C4.91438 8.38398 4.64264 7.77989 4.64264 7.15C4.64264 6.52011 4.91438 5.91602 5.39808 5.47062C5.88178 5.02522 6.53782 4.775 7.22188 4.775C7.90594 4.775 8.56198 5.02522 9.04568 5.47062C9.52938 5.91602 9.80112 6.52011 9.80112 7.15C9.80112 7.46189 9.73441 7.77073 9.60479 8.05887C9.47517 8.34702 9.28519 8.60884 9.04568 8.82938C8.80618 9.04992 8.52184 9.22486 8.20891 9.34421C7.89599 9.46357 7.56059 9.525 7.22188 9.525ZM7.22188 0.5C5.30652 0.5 3.46961 1.20062 2.11524 2.44774C0.760874 3.69486 0 5.38631 0 7.15C0 12.1375 7.22188 19.5 7.22188 19.5C7.22188 19.5 14.4438 12.1375 14.4438 7.15C14.4438 5.38631 13.6829 3.69486 12.3285 2.44774C10.9742 1.20062 9.13724 0.5 7.22188 0.5Z" fill="#6C6B6B" />
                    </svg>
                    <span>R. Damasceno Monteiro, 1170 Lisboa</span>
                </div>
                <div className="calendar-container">
                    <div className="check-calendar">
                        <Calendar container={{ type: "Check In" }} />
                    </div>

                    <div className="check-calendar">
                        <Calendar container={{ type: "Check Out" }} />
                    </div>
                </div>
                <div className="price-calculation">
                    <h4>Price Details</h4>
                    <p>Monthly (for 1 Person)<span>550$</span></p>
                    <p>Bills (Gas, Media, Cleaning)<span>30-40$</span></p>
                    <p>Fee<span>75$</span></p>
                    <h4>Total<span>1600$</span></h4>
                </div>
                <fieldset className="combined-fields">
                    <FormField
                        container={{
                            type: "text",
                            label: "Add Promo Code",
                            placeholder: "Enter a code"
                        }}
                    />
                    <button>Apply</button>
                </fieldset>
            </div>
        </div>

    );
}