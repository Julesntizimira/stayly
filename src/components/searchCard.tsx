"use client";
import { useRouter } from "next/navigation";

interface SearchCardProps {
    container: {
        location: string;
        price: string;
        features: {
            beds: string;
            bath: string;
            area: string;
        };
        rating: string;
        distance: string;
        imageUrl: string;
    };
}

export default function SearchCard(props: SearchCardProps) {

    const {location, price, features, rating, distance, imageUrl} = props.container

    const router = useRouter()
    return (
        <div className="card-container" onClick={
            () => router.push("/propertyDetails")
        }>
            <div className="card-img-cont">
                <img src={imageUrl} alt="card-img" />
            </div>
            <div className="card-content">
                <p className="prop-title">{location}</p>
                <p className="prop-distance">{distance} km away</p>
                <div className="property-features">
                    <p>
                        <i className="fa-solid fa-bed"></i> {features.beds} bed
                    </p>
                    <p>
                        <i className="fa-solid fa-bath"></i> {features.bath} bath
                    </p>
                    <p>
                        <i className="fa-solid fa-bed"></i> {features.area} sqft
                    </p>
                </div>
                <p className="property-price">${price} <span className="night">night</span></p>
                <p className="prop-rates">
                    <i className="fa-solid fa-star"></i>
                    <span>{rating}</span>
                </p>
            </div>

        </div>
    )
}