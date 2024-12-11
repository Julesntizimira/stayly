"use client";
import { useState } from "react";
import FormField from "../formField";
interface AddAppartmentProps {
    setPopupDisplay: (display: string) => void;
}

export default function AddAppartment(props: AddAppartmentProps) {
    const { setPopupDisplay } = props;
    const [bathrooms, setBathrooms] = useState(1);
    const [stepOneDisplay, setStepOneDisplay] = useState("flex");
    const [stepTwoDisplay, setStepTwoDisplay] = useState("none");

    // const stepOne = (
    //     <div className="add-appartment-body">
    //         <FormField
    //             container={{
    //                 label: "Appartment Title",
    //                 placeholder: "Enter appartment title",
    //                 required: true
    //             }}
    //         />
    //         <FormField
    //             container={{
    //                 label: "Size",
    //                 placeholder: "Enter appartment size",
    //             }}
    //         />

    //         <FormField
    //             container={{
    //                 label: "Bills included up to",
    //                 placeholder: "Enter the amount",
    //             }}
    //         />
    //         <div className="add-room-map">
    //             <p>Location</p>
    //             <label className="add-room-map-label">
    //                 <i className="fa-solid fa-search"></i>
    //                 <input type="text" placeholder="Search" />
    //             </label>
    //             <div className="room-map-cont">
    //                 <img src="https://s3-alpha-sig.figma.com/img/6dfd/7b34/0d6e3d2c25b730ed28507582cc5d357e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pnz1wPH3o5-MTwEB1BBcm3mrCMJPZ2am-rdapLXb9EEMEbW3unGb9LPXCHKUDwLrZqIuPv4Eusf6uvko4gBhC2Gk~ibCiwAEo-IWhaeWMIdiumTGzRBB~3UJaXCfioHikgBTtKGyp2SzrHu5hkt1Hr6voPn7NjvNqqGpsPXOnN2BDeSzJhJmZuh8oad~4EA8wheyoe4QkAJh~nr-xuIeqAeBP7v-1aAElEQLweUVQ9u7GDtWGqiAN-BllK5YoLD8fFU~52JvkqhT5ROF-6LciltWVVrAE~nbpJpooHEbOoDMerPLwxUcXGypex6~SRzJZtTcsElMwJ05XeHUAVmEfg__" alt="" />
    //             </div>
    //         </div>
    //     </div>
    // )
    // const stepTwo = (
    //     <div className="room-features">
    //         <div className="set-bathroom-number">
    //             <h4>Number of Bathrooms</h4>
    //             <div className="increase-decrease">
    //                 <button
    //                     onClick={() => {
    //                         setBathrooms((prev) => {
    //                             return prev === 1 ? 1 : prev - 1;
    //                         })
    //                     }}
    //                 >
    //                     -
    //                 </button>
    //                 <p>
    //                     {bathrooms}
    //                 </p>
    //                 <button
    //                     onClick={() => {
    //                         setBathrooms((prev) => {
    //                             return prev + 1;
    //                         })
    //                     }}
    //                 >
    //                     +
    //                 </button>
    //             </div>
    //         </div>

    //         <div className="room-features-container">
    //             <h3>Bedroom</h3>
    //             <div className="room-featires-inputs">
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Single Bed</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Unfurnished Bed</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Mirror</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Single Bed</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Double Bed</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Heating</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Wardrobe</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Window</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Twin bed</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Desk</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Balcony</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Lock</span>
    //                 </label>
    //             </div>
    //         </div>
    //         <div className="room-features-container">
    //             <h3>Switable for</h3>
    //             <div className="room-featires-inputs">
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Males</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Proffessionals</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Student</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Pets</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Females</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Smokers</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Overnight Guests</span>
    //                 </label>
    //                 <label className="checkbox-label">
    //                     <input type="checkbox" />
    //                     <span>Couples</span>
    //                 </label>
    //             </div>
    //         </div>
    //     </div>
    // )



    return (

        <div className="add-room-popup">
            <div className="popup-header">
                <h2>Add Appartment</h2>
                <i className="fa-solid fa-times"
                    onClick={() => {
                        setPopupDisplay("none");
                        setStepOneDisplay("flex");
                        setStepTwoDisplay("none");
                        setBathrooms(1);
                    }}
                ></i>
            </div>

            <div className="add-appartment-body"
                style={{
                    display: stepOneDisplay
                }}
            >
                <FormField
                    container={{
                        label: "Appartment Title",
                        placeholder: "Enter appartment title",
                        required: true
                    }}
                />
                <FormField
                    container={{
                        label: "Size",
                        placeholder: "Enter appartment size",
                    }}
                />

                <FormField
                    container={{
                        label: "Bills included up to",
                        placeholder: "Enter the amount",
                    }}
                />
                <div className="add-room-map">
                    <p>Location</p>
                    <label className="add-room-map-label">
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Search" />
                    </label>
                    <div className="room-map-cont">
                        <img src="https://s3-alpha-sig.figma.com/img/6dfd/7b34/0d6e3d2c25b730ed28507582cc5d357e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pnz1wPH3o5-MTwEB1BBcm3mrCMJPZ2am-rdapLXb9EEMEbW3unGb9LPXCHKUDwLrZqIuPv4Eusf6uvko4gBhC2Gk~ibCiwAEo-IWhaeWMIdiumTGzRBB~3UJaXCfioHikgBTtKGyp2SzrHu5hkt1Hr6voPn7NjvNqqGpsPXOnN2BDeSzJhJmZuh8oad~4EA8wheyoe4QkAJh~nr-xuIeqAeBP7v-1aAElEQLweUVQ9u7GDtWGqiAN-BllK5YoLD8fFU~52JvkqhT5ROF-6LciltWVVrAE~nbpJpooHEbOoDMerPLwxUcXGypex6~SRzJZtTcsElMwJ05XeHUAVmEfg__" alt="" />
                    </div>
                </div>
            </div>

            <div className="room-features"
                style={{
                    display: stepTwoDisplay
                }}
            >
                <div className="set-bathroom-number">
                    <h4>Number of Bathrooms</h4>
                    <div className="increase-decrease">
                        <button
                            onClick={() => {
                                setBathrooms((prev) => {
                                    return prev === 1 ? 1 : prev - 1;
                                })
                            }}
                        >
                            -
                        </button>
                        <p>
                            {bathrooms}
                        </p>
                        <button
                            onClick={() => {
                                setBathrooms((prev) => {
                                    return prev + 1;
                                })
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="room-features-container">
                    <h3>Bathroom1</h3>
                    <div className="room-featires-inputs">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Toilet</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Shower</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Bath</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Sink</span>
                        </label>
                       
                    </div>
                </div>
                <div className="room-features-container">
                    <h3>Bathroom2</h3>
                    <div className="room-featires-inputs">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Toilet</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Shower</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Bath</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Sink</span>
                        </label>
                       
                    </div>
                </div>
                <div className="room-features-container">
                    <h3>Bathroom3</h3>
                    <div className="room-featires-inputs">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Toilet</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Shower</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Bath</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Sink</span>
                        </label>
                       
                    </div>
                </div>
                <div className="room-features-container">
                    <h3>Kitchen</h3>
                    <div className="room-featires-inputs addproperties">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Microwave</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Oven</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Touster</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Stove</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Fridge</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Freezer</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Kettle</span>
                        </label>
                       
                    </div>
                </div>

                <div className="room-features-container">
                    <h3>Living room</h3>
                    <div className="room-featires-inputs addproperties">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Tv</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Sofa</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Wi-fi</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Elevator</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Air Conditioning</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Unfurnished</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Dishwasher</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Washing Machine</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Central heating</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Accessible needs</span>
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Terrace</span>
                        </label>
            
                       
                    </div>
                </div>

              
            </div>

            <div className="add-room-bottom">
                <button
                    onClick={() => {
                        setPopupDisplay("none");
                        setStepOneDisplay("flex");
                        setStepTwoDisplay("none");
                        setBathrooms(1);
                    }}
                >
                    Cancel
                </button>
                <button
                    onClick={() => {
                        setStepOneDisplay("none");
                        setStepTwoDisplay("flex");
                    }}
                >Next</button>
            </div>
        </div>


    )
}