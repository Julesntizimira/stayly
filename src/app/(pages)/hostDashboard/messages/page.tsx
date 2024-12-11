"use client";
import { useEffect, useRef } from "react";

export default function Page() {

    const scrollableRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
        }
    }, []);

    return (
        <div className="message-page-wrapper">
            <div className="message-left-side">
                <h2>Messages</h2>
                <label className="add-room-map-label">
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="Search someone or message.." />
                </label>
                <div className="senders-container">
                    <div className="sender-cont">
                        <div className="sender-img-cont">
                            <img src="https://s3-alpha-sig.figma.com/img/99ef/8ed6/bcc70f59e35714b15c8294e975a9dcd9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnCAZ1tD4hOCDfSN8XzTIIRS1Wry-gUGBzbXqFJwM44zlHI-YLDh4uDenp2ZPuYbtc7O3KUk1Jua-gOE6ULkPuQc9fDxG4zPDPXRRmo93B-v~sSHkrmt3nAWHaWAB3Dkqmb-MWJJOQWLpaGSAL7PcuCLQKFcI0qgw-CjcBN5dzIOa2rYeRMsTONAPC2pAYyP57nWA9aTYsuPLu0BeGuTi7TjNEV4kKUWpVz~nyuH5DMtd44RlSUkwUMucfkKaiBlBYnlp6zRM4kyigLJLmr~uD68iRRPD071ExcasRACz0Q1SOW2ERxhH-fwcjCCQebUytqySHax~IN38PTru7T7vQ__" alt="" />
                        </div>
                        <div className="sender-name-last-msg">
                            <h3>
                                Benjamin Joel
                                <p>Dec 15</p>
                            </h3>
                            <p>lkajdcldnjdcndwjlcdwfcvj
                                fdlcdncjwdcdweljcjewdcdwc
                                jdwjcdwcndwlncnwdncdwjkcn
                                jlwdnlcnwdncndwlclndwnclnwdcnldwln
                            </p>
                        </div>
                    </div>
                    <div className="sender-cont">
                        <div className="sender-img-cont">
                            <img src="https://s3-alpha-sig.figma.com/img/99ef/8ed6/bcc70f59e35714b15c8294e975a9dcd9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnCAZ1tD4hOCDfSN8XzTIIRS1Wry-gUGBzbXqFJwM44zlHI-YLDh4uDenp2ZPuYbtc7O3KUk1Jua-gOE6ULkPuQc9fDxG4zPDPXRRmo93B-v~sSHkrmt3nAWHaWAB3Dkqmb-MWJJOQWLpaGSAL7PcuCLQKFcI0qgw-CjcBN5dzIOa2rYeRMsTONAPC2pAYyP57nWA9aTYsuPLu0BeGuTi7TjNEV4kKUWpVz~nyuH5DMtd44RlSUkwUMucfkKaiBlBYnlp6zRM4kyigLJLmr~uD68iRRPD071ExcasRACz0Q1SOW2ERxhH-fwcjCCQebUytqySHax~IN38PTru7T7vQ__" alt="" />
                        </div>
                        <div className="sender-name-last-msg">
                            <h3>
                                Benjamin Joel
                                <p>Dec 15</p>
                            </h3>
                            <p>nooo, :D you cant do this anymore</p>
                        </div>
                    </div>
                    <div className="sender-cont">
                        <div className="sender-img-cont">
                            <img src="https://s3-alpha-sig.figma.com/img/99ef/8ed6/bcc70f59e35714b15c8294e975a9dcd9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnCAZ1tD4hOCDfSN8XzTIIRS1Wry-gUGBzbXqFJwM44zlHI-YLDh4uDenp2ZPuYbtc7O3KUk1Jua-gOE6ULkPuQc9fDxG4zPDPXRRmo93B-v~sSHkrmt3nAWHaWAB3Dkqmb-MWJJOQWLpaGSAL7PcuCLQKFcI0qgw-CjcBN5dzIOa2rYeRMsTONAPC2pAYyP57nWA9aTYsuPLu0BeGuTi7TjNEV4kKUWpVz~nyuH5DMtd44RlSUkwUMucfkKaiBlBYnlp6zRM4kyigLJLmr~uD68iRRPD071ExcasRACz0Q1SOW2ERxhH-fwcjCCQebUytqySHax~IN38PTru7T7vQ__" alt="" />
                        </div>
                        <div className="sender-name-last-msg">
                            <h3>
                                Benjamin Joel
                                <p>Dec 15</p>
                            </h3>
                            <p>nooo, :D you cant do this anymore</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="message-right-side">
                {/* <div className="no-message">
                    <h3>You don’t have a message selected.</h3>
                    <p>Choose one from your existing messages, or start a new one.</p>
                    <button>New Messsage</button>
                </div> */}
                <div className="inbox-wrapper">
                    <div className="inbox-container"
                       ref={scrollableRef}
                    >
                        <div className="received-msg">
                            <div className="msg-img-cont">
                                <img src="https://s3-alpha-sig.figma.com/img/75c7/11cc/ea790931257e34f4e1934868bbf13790?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6EmG6MQAACK6R~kxnmsJ6zq3XlSUp1pCwIqGCuOL13KNxsIJ5xRKIa~-BmgkvccUtNYxSdxKj-5hsax~sN5PhZsEw8lD0rQRtZEYa-J2y~95ZP34SA1ed-AkyCrrzVAicnBj4efuSPgYk1vXXXtbR-33ysfSpDvsHLGJpGsDcYCmb5EuxHRlQ9Z0s722ts6hbM7SFfBG989n-gAW5VqqC42jsy4L52Ho4~JCduscusWtmUloQnD~-wxPU55ZIlQ-QcM56RXQdk-RW5WE0Dvan8OWMsV3ZneHf1hRKf3btmdzzFryzfj6h8xQg4WivKjgEAipPSZr3g40SBDWfOxxQ__" alt="" />
                            </div>
                            <div className="msgs-cont">
                                <p className="msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p className="msg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                                </p>
                                <p className="msg-time">
                                    Sat 5:10 AM
                                </p>
                            </div>
                        </div>
                        <div className="sent-msg">
                            <p className="msg">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit iUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit illamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit i
                            </p>
                            <p className="msg">
                                While you win in love, you continue to win in other things
                                Duis aute irure dolor in reprehenderit iUt enim ad minimn
                            </p>
                            <p className="msg-time">
                                Sat 5:15 AM
                            </p>
                        </div>
                        <div className="received-msg">
                            <div className="msg-img-cont">
                                <img src="https://s3-alpha-sig.figma.com/img/75c7/11cc/ea790931257e34f4e1934868bbf13790?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6EmG6MQAACK6R~kxnmsJ6zq3XlSUp1pCwIqGCuOL13KNxsIJ5xRKIa~-BmgkvccUtNYxSdxKj-5hsax~sN5PhZsEw8lD0rQRtZEYa-J2y~95ZP34SA1ed-AkyCrrzVAicnBj4efuSPgYk1vXXXtbR-33ysfSpDvsHLGJpGsDcYCmb5EuxHRlQ9Z0s722ts6hbM7SFfBG989n-gAW5VqqC42jsy4L52Ho4~JCduscusWtmUloQnD~-wxPU55ZIlQ-QcM56RXQdk-RW5WE0Dvan8OWMsV3ZneHf1hRKf3btmdzzFryzfj6h8xQg4WivKjgEAipPSZr3g40SBDWfOxxQ__" alt="" />
                            </div>
                            <div className="msgs-cont">
                                <p className="msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p className="msg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                                </p>
                                <p className="msg-time">
                                    Sat 5:10 AM
                                </p>
                            </div>
                        </div>
                        <div className="sent-msg">
                            <p className="msg">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit iUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit illamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit i
                            </p>
                            <p className="msg">
                                While you win in love, you continue to win in other things
                                Duis aute irure dolor in reprehenderit iUt enim ad minimn
                            </p>
                            <p className="msg-time">
                                Sat 5:15 AM
                            </p>
                        </div>
                        <div className="received-msg">
                            <div className="msg-img-cont">
                                <img src="https://s3-alpha-sig.figma.com/img/75c7/11cc/ea790931257e34f4e1934868bbf13790?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6EmG6MQAACK6R~kxnmsJ6zq3XlSUp1pCwIqGCuOL13KNxsIJ5xRKIa~-BmgkvccUtNYxSdxKj-5hsax~sN5PhZsEw8lD0rQRtZEYa-J2y~95ZP34SA1ed-AkyCrrzVAicnBj4efuSPgYk1vXXXtbR-33ysfSpDvsHLGJpGsDcYCmb5EuxHRlQ9Z0s722ts6hbM7SFfBG989n-gAW5VqqC42jsy4L52Ho4~JCduscusWtmUloQnD~-wxPU55ZIlQ-QcM56RXQdk-RW5WE0Dvan8OWMsV3ZneHf1hRKf3btmdzzFryzfj6h8xQg4WivKjgEAipPSZr3g40SBDWfOxxQ__" alt="" />
                            </div>
                            <div className="msgs-cont">
                                <p className="msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p className="msg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                                </p>
                                <p className="msg-time">
                                    Sat 5:10 AM
                                </p>
                            </div>
                        </div>
                        <div className="sent-msg">
                            <p className="msg">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit iUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit illamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit i
                            </p>
                            <p className="msg">
                                While you win in love, you continue to win in other things
                                Duis aute irure dolor in reprehenderit iUt enim ad minimn
                            </p>
                            <p className="msg-time">
                                Sat 5:15 AM
                            </p>
                        </div>
                    </div>
                    <div className="message-input">
                        <div className="message-input-icons">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.75 0H2.25C1.01 0 0 1.01 0 2.25V17.75C0 18.99 1.01 20 2.25 20H17.75C18.99 20 20 18.99 20 17.75V2.25C20 1.01 18.99 0 17.75 0ZM2.25 1.5H17.75C18.163 1.5 18.5 1.837 18.5 2.25V11.926L14.642 8.068C14.502 7.928 14.312 7.848 14.112 7.848H14.109C13.909 7.848 13.716 7.928 13.577 8.072L9.26 12.456L7.447 10.65C7.307 10.51 7.117 10.43 6.917 10.43C6.724 10.4 6.522 10.51 6.382 10.657L1.5 15.642V2.25C1.5 1.837 1.837 1.5 2.25 1.5ZM1.506 17.78L6.924 12.246L13.206 18.5H2.25C1.848 18.5 1.523 18.178 1.506 17.78ZM17.75 18.5H15.33L10.323 13.513L14.115 9.663L18.5 14.047V17.75C18.5 18.163 18.163 18.5 17.75 18.5Z" fill="#21978B" />
                                <path d="M6.86805 7.8506C7.71967 7.8506 8.41005 7.16022 8.41005 6.3086C8.41005 5.45698 7.71967 4.7666 6.86805 4.7666C6.01643 4.7666 5.32605 5.45698 5.32605 6.3086C5.32605 7.16022 6.01643 7.8506 6.86805 7.8506Z" fill="#21978B" />
                            </svg>
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8.4998V6.7998H13.6V13.1998H15.3V11.1998H17.3V9.4998H15.3V8.4998H18ZM10.7 6.7998H12.4V13.1998H10.7V6.7998ZM7.10002 8.3998C7.50002 8.3998 8.00002 8.5998 8.30002 8.8998L9.50002 7.8998C8.90002 7.1998 8.00002 6.7998 7.10002 6.7998C5.30002 6.7998 3.90002 8.1998 3.90002 9.9998C3.90002 11.7998 5.30002 13.1998 7.10002 13.1998C8.10002 13.1998 8.90002 12.7998 9.50002 12.0998V9.5998H6.70002V10.7998H7.90002V11.3998C7.70002 11.4998 7.40002 11.5998 7.10002 11.5998C6.20002 11.5998 5.50002 10.8998 5.50002 9.9998C5.50002 9.1998 6.20002 8.3998 7.10002 8.3998Z" fill="#21978B" />
                                <path d="M19.5 0.0195312H2.5C1.26 0.0195312 0.25 1.02653 0.25 2.26653V17.7735C0.25 19.0115 1.26 20.0195 2.5 20.0195H19.5C20.74 20.0195 21.75 19.0115 21.75 17.7735V2.26653C21.75 1.02653 20.74 0.0195312 19.5 0.0195312ZM20.25 17.7735C20.25 18.1835 19.914 18.5195 19.5 18.5195H2.5C2.086 18.5195 1.75 18.1835 1.75 17.7735V2.26653C1.75 1.85453 2.086 1.51953 2.5 1.51953H19.5C19.914 1.51953 20.25 1.85453 20.25 2.26653V17.7735Z" fill="#21978B" />
                            </svg>
                        </div>
                        <label className="msg-input-label">
                            <textarea
                                placeholder="Type your message here.."
                            ></textarea>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 21.75C5.072 21.75 0.25 16.928 0.25 11C0.25 5.072 5.072 0.25 11 0.25C16.928 0.25 21.75 5.072 21.75 11C21.75 16.928 16.928 21.75 11 21.75ZM11 1.75C5.9 1.75 1.75 5.9 1.75 11C1.75 16.1 5.9 20.25 11 20.25C16.1 20.25 20.25 16.1 20.25 11C20.25 5.9 16.1 1.75 11 1.75Z" fill="#21978B" />
                                <path d="M11 16.1153C9.10801 16.1153 7.36701 15.1653 6.34401 13.5713C6.12001 13.2233 6.22101 12.7613 6.57001 12.5363C6.91801 12.3103 7.38201 12.4123 7.60601 12.7623C8.35301 13.9243 9.62201 14.6173 11.001 14.6173C12.38 14.6173 13.649 13.9243 14.397 12.7633C14.621 12.4133 15.085 12.3133 15.433 12.5383C15.783 12.7623 15.883 13.2263 15.659 13.5743C14.634 15.1683 12.893 16.1193 11.001 16.1193L11 16.1153Z" fill="#21978B" />
                                <path d="M13.738 9.93647C14.5543 9.93647 15.216 9.27475 15.216 8.45847C15.216 7.64219 14.5543 6.98047 13.738 6.98047C12.9217 6.98047 12.26 7.64219 12.26 8.45847C12.26 9.27475 12.9217 9.93647 13.738 9.93647Z" fill="#21978B" />
                                <path d="M8.262 9.93647C9.07827 9.93647 9.74 9.27475 9.74 8.45847C9.74 7.64219 9.07827 6.98047 8.262 6.98047C7.44572 6.98047 6.784 7.64219 6.784 8.45847C6.784 9.27475 7.44572 9.93647 8.262 9.93647Z" fill="#21978B" />
                            </svg>
                        </label>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.13 9.35761L1.614 0.107613C1.324 -0.0443869 0.973998 0.00561301 0.740999 0.233613C0.510999 0.459613 0.447999 0.810613 0.590999 1.10161L4.953 10.0216L0.590999 18.9416C0.447999 19.2336 0.510999 19.5846 0.740999 19.8096C0.885998 19.9496 1.074 20.0216 1.264 20.0216C1.384 20.0216 1.504 19.9936 1.614 19.9346L19.131 10.6846C19.376 10.5546 19.531 10.2986 19.531 10.0206C19.531 9.74261 19.376 9.48861 19.131 9.35861L19.13 9.35761ZM2.948 2.50961L15.752 9.27161H6.255L2.948 2.51161V2.50961ZM6.255 10.7696H15.753L2.948 17.5346L6.255 10.7716V10.7696Z" fill="#21978B" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>)
}