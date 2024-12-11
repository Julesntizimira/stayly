import HorizontalDivider from "@/components/horizontalDivider";
import PropertyListing from "@/components/propertyList";
import SearchCard from "@/components/searchCard";
import { searchCards } from "@/utils";
import Link from "next/link";

export default function PropertyLists() {
    return (
        <>
            <section className="listing-header">
                <h1>Browse Available Listings</h1>
                <Link href="/searchResults">Filter by location, type, and amenities to find the perfect match for your stay.</Link>
            </section>
            <div className="featured-properties-nav">
                <ul>
                    <li>Apartments</li>
                    <i className="fa-solid fa-circle"></i>
                    <li>Houses</li>
                    <i className="fa-solid fa-circle"></i>
                    <li>Single Rooms</li>
                    <i className="fa-solid fa-circle"></i>
                    <li>Home Stays</li>
                    <i className="fa-solid fa-circle"></i>
                    <li>Villas</li>
                    <i className="fa-solid fa-circle"></i>
                    <li>More</li>
                </ul>
            </div>
            <div className="pick-next-stay-section-images">
                {
                    searchCards.map((card, index) => {
                        return <SearchCard key={index} container={card} />
                    })
                }
            </div>
            <HorizontalDivider />
            <PropertyListing/>
        </>
    
    )
}
