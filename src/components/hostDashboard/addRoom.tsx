"use client";
import { useState } from "react";
import FormField from "../formField"
import SelectField from "../selectField"
import TextareaField from "../textareaField"
import { useCallback } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import toast from "react-hot-toast";
import axios from "axios";



interface AddRoomProps {
    setPopupDisplay: (display: string) => void;
}

export default function AddRoom(props: AddRoomProps) {
    const { setPopupDisplay } = props;


    const [files, setFiles] = useState<{ file: File; preview: string }[]>([]);


    const submitForm = async () => {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append("image_url", file.file);
        });
        const response = await axios.post("/api/properties/addProperty", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(response);
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

    const [step, setStep] = useState("stepOne");


    return (

        <div className="add-room-popup">
            <div className="popup-header">
                <h2>Add Room</h2>
                <i className="fa-solid fa-times"
                    onClick={() => {
                        setPopupDisplay("none");
                        setStep("stepOne");
                    }}
                ></i>
            </div>
            {
                step === "stepOne" ? (<div className="add-room-body">
                    <div className="add-room-left-side">
                        <div className="add-room-photos-drag">
                            <p>Upload Room Photos</p>
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
                        <TextareaField
                            container={{
                                label: "Description",
                                placeholder: "Enter a description of your room."
                            }}
                        />
                        <FormField
                            container={{
                                label: "Price per month",
                                placeholder: "Enter the price of your room",
                                required: true
                            }}
                        />
                    </div>
                    <div className="add-room-right-side">
                        <FormField
                            container={{
                                label: "Property Title",
                                placeholder: "Enter the title of your property",
                                required: true
                            }}
                        />
                        <div className="add-room-right-side-bottom">
                            <div className="add-room-inputs">
                                <SelectField
                                    container={{
                                        label: "Property Type",
                                        options: [
                                            {
                                                label: "Select property type",
                                                value: ""
                                            },
                                            {
                                                label: "House",
                                                value: "house"
                                            },
                                            {
                                                label: "Apartment",
                                                value: "apartment"
                                            },
                                            {
                                                label: "Condo",
                                                value: "condo"
                                            },
                                            {
                                                label: "Townhouse",
                                                value: "townhouse"
                                            },
                                            {
                                                label: "Other",
                                                value: "other"
                                            }
                                        ]
                                    }}
                                />
                                <SelectField
                                    container={{
                                        label: "Appartment",
                                        options: [
                                            {
                                                label: "Select appartment type",
                                                value: ""
                                            },
                                            {
                                                label: "Entire",
                                                value: "entire"
                                            },
                                            {
                                                label: "Private",
                                                value: "private"
                                            },
                                            {
                                                label: "Shared",
                                                value: "shared"
                                            }
                                        ]

                                    }}
                                />
                                <FormField
                                    container={{
                                        label: "Size",
                                        placeholder: "Size",
                                    }}
                                />
                                <FormField
                                    container={{
                                        label: "Minimum stay",
                                        placeholder: "Number of months",
                                    }}
                                />
                            </div>
                            <div className="add-room-map">
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
                </div>) : (<div className="room-features">
                    <div className="room-features-container">
                        <h3>Bedroom</h3>
                        <div className="room-featires-inputs">
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Single Bed</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Unfurnished Bed</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Mirror</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Single Bed</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Double Bed</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Heating</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Wardrobe</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Window</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Twin bed</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Desk</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Balcony</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Lock</span>
                            </label>
                        </div>
                    </div>
                    <div className="room-features-container">
                        <h3>Switable for</h3>
                        <div className="room-featires-inputs">
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Males</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Proffessionals</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Student</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Pets</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Females</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Smokers</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Overnight Guests</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Couples</span>
                            </label>
                        </div>
                    </div>
                </div>)
            }
            <div className="add-room-bottom">
                <button
                    onClick={() => {
                        setPopupDisplay("none");
                        setStep("stepOne");
                        setFiles([]);
                    }}
                >
                    Cancel
                </button>
                <button
                    onClick={() => {
                        if (step === "stepOne") setStep("stepTwo");
                        else {
                            // Submit the form
                            submitForm();
                        }
                    }}
                >Next</button>
            </div>
        </div>


    )
}