"use client";
import { PropertyType } from "@/types";
import { useRouter } from "next/navigation";

interface SearchCardProps {
    container: PropertyType
}

export default function SearchCard(props: SearchCardProps) {

    const property = props.container

    const router = useRouter()
    return (
        <div className="card-container" onClick={
            () => router.push("/propertyDetails")
        }>
            <div className="card-img-cont">
                {property.image_urls && Array.isArray(property.image_urls) && property.image_urls.length > 0 && (
                    <img src={property.image_urls[0]} alt="card-img" />
                )}
            </div>
            <div className="card-content">
                <p className="prop-title">{["hotel", "lodge", "apartment"].includes(property.type) || property.type === "Apartment" ? property.title : property.location}</p>
                <p className="prop-distance">{1500} km away</p>
                <div className="property-features">
                    <p>
                        <i className="fa-solid fa-bed"></i> {3} bed
                    </p>
                    <p>
                        <i className="fa-solid fa-bath"></i> {4} bath
                    </p>
                    <p>
                        <i className="fa-solid fa-bed"></i> {2880} sqft
                    </p>
                </div>
                <p className="property-price">${property.price_per_night} <span className="night">night</span></p>
                <p className="prop-rates">
                    <i className="fa-solid fa-star"></i>
                    <span>{4.5}</span>
                </p>
            </div>

        </div>
    )
}