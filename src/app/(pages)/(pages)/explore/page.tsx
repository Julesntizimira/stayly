"use client";
import SearchCard from "@/components/searchCard";
import { PropertyType } from "@/types";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PropertyLists() {
    const [allProperties, setAllProperties] = useState<PropertyType[]>([]);
    const [displayProperties, setDisplayProperties] = useState<PropertyType[]>([]);
    const [navList, setNavList] = useState([
        { name: "All", className: "active" },
        { name: "Apartment", className: "" },
        { name: "Hotel", className: "" },
        { name: "Lodge", className: "" },
        { name: "Villa", className: "" },
        { name: "airbnb", className: "" },
        { name: "Rentals", className: "" },
    ]);

    useEffect(() => {
        axios.get("/api/properties/allProperties").then((res) => {
            console.log(res.data);
            setAllProperties(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);


    useEffect(() => {
        setDisplayProperties(allProperties);
    }, [allProperties]);

    const navigateTypes = (type: string) => {
        if (type === "All") {
            setDisplayProperties(allProperties);
        } else {
            const properties = allProperties.filter(property => property.type === type.toLowerCase());
            setDisplayProperties(properties);
        }
        setNavList(navList.map(nav => {
            if (nav.name === type) {
                return { ...nav, className: "active" }
            } else {
                return { ...nav, className: "" }
            }
        }));
    }


    return (
        <>
            <section className="listing-header">
                <h1>Browse Available Listings</h1>
                <Link href="/searchResults">Filter by location, type, and amenities to find the perfect match for your stay.</Link>
            </section>
            <div className="featured-properties-nav">
                <ul>
                    {
                        navList.map((nav, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <li key={index} className={nav.className} onClick={() => navigateTypes(nav.name)}>{nav.name}</li>
                                    <i className="fa-solid fa-circle"></i>
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
                <button className="filter-pop-btn">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.9502 8H0.950195M2.9502 8C2.9502 8.53043 3.16091 9.03914 3.53598 9.41421C3.91105 9.78929 4.41976 10 4.9502 10C5.48063 10 5.98934 9.78929 6.36441 9.41421C6.73948 9.03914 6.9502 8.53043 6.9502 8M2.9502 8C2.9502 7.46957 3.16091 6.96086 3.53598 6.58579C3.91105 6.21071 4.41976 6 4.9502 6C5.48063 6 5.98934 6.21071 6.36441 6.58579C6.73948 6.96086 6.9502 7.46957 6.9502 8M13.9502 8H6.9502M13.9502 3H11.9502M11.9502 3C11.9502 3.53043 11.7395 4.03914 11.3644 4.41421C10.9893 4.78929 10.4806 5 9.9502 5C9.41976 5 8.91105 4.78929 8.53598 4.41421C8.16091 4.03914 7.9502 3.53043 7.9502 3M11.9502 3C11.9502 2.46957 11.7395 1.96086 11.3644 1.58579C10.9893 1.21071 10.4806 1 9.9502 1C9.41976 1 8.91105 1.21071 8.53598 1.58579C8.16091 1.96086 7.9502 2.46957 7.9502 3M7.9502 3H0.950195M13.9502 13H11.9502M11.9502 13C11.9502 13.5304 11.7395 14.0391 11.3644 14.4142C10.9893 14.7893 10.4806 15 9.9502 15C9.41976 15 8.91105 14.7893 8.53598 14.4142C8.16091 14.0391 7.9502 13.5304 7.9502 13M11.9502 13C11.9502 12.4696 11.7395 11.9609 11.3644 11.5858C10.9893 11.2107 10.4806 11 9.9502 11C9.41976 11 8.91105 11.2107 8.53598 11.5858C8.16091 11.9609 7.9502 12.4696 7.9502 13M7.9502 13H0.950195" stroke="#222222" strokeWidth="1.5" />
                    </svg>
                    <span>Filters</span>
                </button>
            </div>
            <div className="pick-next-stay-section-images">
                {
                    displayProperties.map((card, index) => {
                        return <SearchCard key={index} container={card} />
                    })
                }
            </div>
        </>

    )
}
