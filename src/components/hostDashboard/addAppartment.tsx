"use client";
import { useCallback, useState } from "react";
import FormField from "../formField";
import SelectField from "../selectField";
import TextareaField from "../textareaField";
import { amenities } from "@/utils";

import { PropertyType } from "@/types";
import { FileRejection, useDropzone } from "react-dropzone";
import axios from "axios";
import toast from "react-hot-toast";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";







interface AddAppartmentProps {
    setPopupDisplay: (display: string) => void;
}

export default function AddAppartment(props: AddAppartmentProps) {



    const { setPopupDisplay } = props;
    const [bathrooms, setBathrooms] = useState(1);
    const [stepOneDisplay, setStepOneDisplay] = useState("flex");
    const [stepTwoDisplay, setStepTwoDisplay] = useState("none");
    const [stepThreeDisplay, setStepThreeDisplay] = useState("none");



    const router = useRouter();

    const initialProperty: PropertyType = {
        owner: "",
        title: "",
        type: "hotel",
        location: "",
        coordinates: "",
        description: "",
        price_per_night: "",
        is_whole_unit_bookable: false,
        is_breakfast_included: false,
        is_cancelation_flexible: false,
        is_instant_booking: false,
        amenities: [],
    }

    const [property, setProperty] = useState<PropertyType>(initialProperty);

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



    const stepOneFormValidation = () => {
        if (property.title === "") {
            toast.error("Title is required");
            return false;
        }
        if (property.location === "") {
            toast.error("Address is required");
            return false;
        }
        if (property.description === "") {
            toast.error("Description is required");
            return false;
        }
        return true;
    }

    const stepTwoFormValidation = () => {
        if (files.length === 0) {
            toast.error("Please upload at least one image");
            return false;
        }
        if (property.is_whole_unit_bookable && property.price_per_night === "") {
            toast.error("Price per night is required");
            return false;
        }
        return true;
    }



    const handleDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
        // console.log(acceptedFiles);
        if (acceptedFiles.length > 0) {
            acceptedFiles.forEach((file) => {
                // Generate a preview URL for the file
                const preview = URL.createObjectURL(file);
                setFiles((prevFiles) => [
                    ...prevFiles,
                    { file, preview },
                ]);
            });
        }
        if (fileRejections.length > 0) {
            toast.error("Some files were rejected:");
            fileRejections.forEach(({ file }) => {
                console.log(file.name);
            });
        }
    }, []); // Empty dependency array means this function won't change unless necessary


    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: handleDrop,
        multiple: true,
    });


    const [files, setFiles] = useState<{ file: File; preview: string }[]>([]);

    const { data: session, status } = useSession();

    if (status === "loading") return <div>Loading...</div>;
    if (status === "unauthenticated") {
        router.push("/login");
    }
    const submitForm = async () => {
        const formData = new FormData();
        formData.append("title", property.title);
        formData.append("type", property.type);
        formData.append("location", property.location);
        formData.append("description", property.description);
        formData.append("price_per_night", property.price_per_night);
        formData.append("is_whole_unit_bookable", property.is_whole_unit_bookable.toString());
        formData.append("is_breakfast_included", property.is_breakfast_included.toString());
        formData.append("is_cancelation_flexible", property.is_cancelation_flexible.toString());
        formData.append("is_instant_booking", property.is_instant_booking.toString());
        property.amenities.forEach((amenity) => {
            formData.append("amenities", amenity);
        });
        files.forEach((file) => {
            formData.append("image_url", file.file);
        });
        if (session?.user?.id) {
            formData.append("owner", session.user.id);
        }

        const response = await axios.post("/api/properties/addProperty", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if (response.status === 201) {
            toast.success("Property added successfully");
            setPopupDisplay("none");
            setStepOneDisplay("flex");
            setStepTwoDisplay("none");
            setStepThreeDisplay("none");
            setBathrooms(1);
            setProperty(initialProperty);
            setFiles([]);
        } else {
            toast.error("An error occurred");
        }
    }


    return (

        <div className="add-room-popup">
            <div className="popup-header">
                <h2>Add Property</h2>
                <i className="fa-solid fa-times"
                    onClick={() => {
                        setPopupDisplay("none");
                        setStepOneDisplay("flex");
                        setStepTwoDisplay("none");
                        setStepThreeDisplay("none");
                        setBathrooms(1);
                        setProperty(initialProperty);
                        setFiles([]);
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
                        label: "Property Title",
                        placeholder: "Enter appartment title",
                        required: true,
                        value: property.title,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                            setProperty({ ...property, title: e.target.value });
                        }
                    }}
                />
                <SelectField
                    container={{
                        label: "Property Type",
                        options: [
                            { value: "hotel", label: "Hotel" },
                            { value: "apartment", label: "Apartment" },
                            { value: "airbnb", label: "Airbnb" },
                            { value: "hostel", label: "Hostel" },
                            { value: "guesthouse", label: "Guesthouse" },
                            { value: "villa", label: "Villa" },
                            { value: "resort", label: "Resort" },
                            { value: "bed_and_breakfast", label: "Bed and Breakfast" },
                            { value: "cottage", label: "Cottage" },
                            { value: "bungalow", label: "Bungalow" },
                            { value: "cabin", label: "Cabin" },
                            { value: "camping", label: "Camping" },
                            { value: "unique", label: "Unique Stay" },
                            { value: "mobile", label: "Mobile Stay" },
                            { value: "luxury", label: "Luxury Stay" },
                            { value: "farm_stay", label: "Farm Stay" },
                            { value: "holiday_home", label: "Holiday Home" },
                            { value: "aparthotel", label: "Aparthotel" },
                            { value: "lodge", label: "Lodge" },
                            { value: "pension", label: "Pension" }
                        ],
                        value: property.type,
                        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
                            setProperty({
                                ...property,
                                type: e.target.value,
                                amenities: []
                            });
                        }
                    }}
                />
                <TextareaField
                    container={{
                        label: "Description",
                        placeholder: "Enter description",
                        value: property.description,
                        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setProperty({ ...property, description: e.target.value });
                        }
                    }}
                />
                <FormField
                    container={{
                        label: "Address",
                        placeholder: "Enter address",
                        required: true,
                        value: property.location,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                            setProperty({ ...property, location: e.target.value });
                        }

                    }}
                />

            </div>
            <div className="add-room-body "
                style={{
                    display: stepTwoDisplay
                }}
            >

                <div className="add-room-left-side">
                    <div className="add-room-photos-drag">
                        <p>Upload Property Photos</p>
                        <div {...getRootProps(
                            { className: "room-added-photos-container" }
                        )}>
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            <input {...getInputProps()} />
                            {
                                isDragActive ? <p>Drop here</p> : (<>
                                    <p>Drag and Drop here</p>
                                    <p>or</p>
                                    <button>Browse</button>
                                </>)
                            }
                        </div>
                        <ul className="room-added-photos">
                            {
                                files.map((file, index) => (
                                    <li key={index} className="room-added-photo">
                                        <img src={file.preview} alt="" />
                                        <i className="fa-solid fa-times"
                                            onClick={() => removeFile(index)}
                                        ></i>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                    <label className="checkbox-label">
                        <input type="checkbox"
                            checked={property.is_whole_unit_bookable}
                            onChange={(e) => {
                                setProperty({ ...property, is_whole_unit_bookable: e.target.checked });
                            }}
                        />
                        <span>Is whole unit bookable</span>
                    </label>
                    {property.is_whole_unit_bookable && (
                        <FormField
                            container={{
                                label: "Price per night",
                                placeholder: "Enter price",
                                required: true,
                                value: property.price_per_night,
                                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                    setProperty({ ...property, price_per_night: e.target.value });
                                }
                            }}
                        />)
                    }
                    <label className="checkbox-label">
                        <input type="checkbox"
                            checked={property.is_breakfast_included}
                            onChange={(e) => {
                                setProperty({ ...property, is_breakfast_included: e.target.checked });
                            }}
                        />
                        <span>Is breakfast included</span>
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox"
                            checked={property.is_cancelation_flexible}
                            onChange={(e) => {
                                setProperty({ ...property, is_cancelation_flexible: e.target.checked });
                            }}
                        />
                        <span>Is cancelation flexible</span>
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox"
                            checked={property.is_instant_booking}
                            onChange={(e) => {
                                setProperty({ ...property, is_instant_booking: e.target.checked });
                            }}
                        />
                        <span>Is instant booking</span>
                    </label>
                </div>
                <div className="add-room-right-side">
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
            </div>

            <div className="room-features"
                style={{
                    display: stepThreeDisplay
                }}
            >
                {
                    property.is_whole_unit_bookable && (
                        <>
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
                            {
                                Array.from({ length: bathrooms }).map((_, index) => {
                                    return (
                                        <div className="room-features-container" key={index}>
                                            <h3>Bathroom {index + 1}</h3>
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
                                        </div>)
                                })
                            }

                            {/* <div className="room-features-container">
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
                            </div> */}
                        </>
                    )
                }

                <div className="room-features-container">
                    <h3>Amenities</h3>
                    <div className="room-featires-inputs addproperties">
                        {
                            amenities[property.type].map((amenity, index) => {
                                return (
                                    <label className="checkbox-label" key={index}>
                                        <input type="checkbox"
                                            checked={property.amenities.includes(amenity)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setProperty({ ...property, amenities: [...property.amenities, amenity] });
                                                } else {
                                                    setProperty({ ...property, amenities: property.amenities.filter((a) => a !== amenity) });
                                                }
                                            }}
                                        />
                                        <span>{amenity}</span>
                                    </label>
                                )
                            })
                        }

                    </div>
                </div>


            </div>

            <div className="add-room-bottom">
                <button
                    onClick={() => {
                        if (stepOneDisplay === "flex") {
                            setPopupDisplay("none");
                            setStepOneDisplay("flex");
                            setStepTwoDisplay("none");
                            setStepThreeDisplay("none");
                            setBathrooms(1);
                            setProperty(initialProperty);
                        } else if (stepTwoDisplay === "flex") {
                            setStepOneDisplay("flex");
                            setStepTwoDisplay("none");
                            setStepThreeDisplay("none");
                        } else if (stepThreeDisplay === "flex") {
                            setStepOneDisplay("none");
                            setStepTwoDisplay("flex");
                            setStepThreeDisplay("none");
                        }
                    }}
                >
                    {stepOneDisplay === "flex" ? "Cancel" : "Back"}
                </button>
                <button
                    onClick={() => {
                        if (stepOneDisplay === "flex") {
                            if (stepOneFormValidation()) {
                                setStepOneDisplay("none");
                                setStepTwoDisplay("flex");
                            } else {
                                return;
                            }
                        } else if (stepTwoDisplay === "flex") {
                            if (stepTwoFormValidation()) {
                                setStepOneDisplay("none");
                                setStepTwoDisplay("none");
                                setStepThreeDisplay("flex");
                            } else {
                                return;
                            }
                        } else if (stepThreeDisplay === "flex") {
                            console.log(property);
                            submitForm();
                        }
                    }}
                >Next</button>
            </div>
        </div>


    )
}