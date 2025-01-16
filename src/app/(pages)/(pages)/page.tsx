"use client";
import HomeExploreCard from "@/components/homeExploreCard"
import SearchCard from "@/components/searchCard"
import { homeExploreCards } from "@/utils"
import Link from "next/link"
import HorizontalDivider from "@/components/horizontalDivider"
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PropertyType } from "@/types";
import { touristicPlaces as slides} from "@/utils";



// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function HomeLayout() {

    const [allProperties, setAllProperties] = useState<PropertyType[]>([]);
    const [displayProperties, setDisplayProperties] = useState<PropertyType[]>([]);

    const router = useRouter();
    // const { data: session, status } = useSession();

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

    // if (status === "loading") return <div>Loading...</div>;
    // if (status === "unauthenticated") return <div>Unauthenticated</div>;

    // if (status === "authenticated") {
    //     console.log(session);
    // }

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

    const [navList, setNavList] = useState([
        { name: "All", className: "active" },
        { name: "Apartment", className: "" },
        { name: "Hotel", className: "" },
        { name: "Lodge", className: "" },
        { name: "Villa", className: "" },
        { name: "airbnb", className: "" },
        { name: "Rentals", className: "" },
    ]);




    return (
        <>
            <section className="home-top-section">
                <div className="home-top-content">
                    <h1>Start your unforgettable <br />journey with us.</h1>
                    <p>Discover affordable and luxury accommodations tailored to your needs.</p>
                </div>
                <div className="accomodation-search">
                    <div className="search-input">
                        <h3>Location</h3>
                        <input type="text" placeholder="Where are you going?" />
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="search-input">
                        <h3>Property Type</h3>
                        <input type="text" placeholder="Select property type" />
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="search-input">
                        <h3>Rent range</h3>
                        <input type="text" placeholder="select rent range" />
                    </div>
                    <button className="search-btn"
                        onClick={() => {
                            router.push("/searchResults")
                        }}
                    >Search</button>
                </div>
            </section>
            <section className="home-explore-section">
                <h2>Explore Your Area with Us</h2>
                <p>
                    Whether you&apos;re looking for a new place to call home, an investment opportunity, or just exploring local options, we&apos;re here to guide you to exactly what suits your needs.
                </p>
            </section>
            <HorizontalDivider />
            <section className="home-choose-space-section">
                <div className="home-section-title">
                    <h2>Choose the Space That’s Right for You</h2>
                    <p>Choose from a variety of accommodation types to fit your travel style and needs.</p>
                </div>
                <div className="home-choose-space-section-images">
                    {
                        homeExploreCards.map((card, index) => {
                            return <HomeExploreCard key={index} container={card} />
                        })
                    }
                </div>
            </section>
            <section className="pick-next-stay-section">
                <div className="home-section-title">
                    <h2>Top Picks for Your Next Stay</h2>
                    <p>Browse our curated list of trending properties in favorite destinations worldwide.</p>
                </div>
                <div className="pick-next-stay-section-images">
                    {
                        allProperties.map((property, index) => {
                            if (property.type === "lodge") {
                                return <SearchCard key={index} container={property} />
                            }
                        })
                    }
                    {/* {
                        topPicks.map((card, index) => {
                            return <SearchCard key={index} container={card} />
                        })
                    } */}
                </div>
            </section>
            <section className="featured-properties-section">
                <div className="home-section-title">
                    <h2>Featured Properties</h2>
                    <p>Browse our curated list of trending properties in favorite destinations worldwide.</p>
                </div>
                <div className="featured-properties-nav">
                    <ul>
                        {
                            navList.map((nav, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <li
                                            key={index}
                                            onClick={() => navigateTypes(nav.name)}
                                            className={nav.className}
                                        >
                                            {nav.name}
                                        </li>
                                        <i className="fa-solid fa-circle"></i>
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="pick-next-stay-section-images">
                    {/* {
                        featuredProperties.map((card, index) => {
                            return <SearchCard key={index} container={card} />
                        })
                    } */}
                    {
                        displayProperties.map((property, index) => {
                            return <SearchCard key={index} container={property} />
                        })
                    }

                </div>
            </section>
            <div className="continue-exploring-link-cont">
                <Link href="">
                    Continue Exploring Apartments
                </Link>
            </div>
            <HorizontalDivider />
            <section className="discover-section">
                <div className="discover-images">
                    <div className="home-section-title">
                        <h2>Discover The Beautiful Landscape of Rwanda</h2>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia deserunt mollitia animi,
                            id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio
                            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                            corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                            non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                            id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio
                            dignissimos ducidolorum fuga.
                        </p>
                        <button>Discover Rwanda</button>
                    </div>
                    <div className="discover-sliding-imgs">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={16}
                            slidesPerView={3.5}
                            navigation={{
                                prevEl: ".swiper-button-prev",
                                nextEl: ".swiper-button-next",
                              }}
                            pagination={{
                                el: ".swiper-pagination",
                                clickable: true,
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {slides.map((slider, index) => (
                                <SwiperSlide key={index}>
                                    <div className="discover-img-cont">
                                        <img src={slider.imgurls[0]} alt="discover-img" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-pagination">
                        </div>
                    </div>
                </div>

            </section>

            <section className="discover-accomodation">
                <div className="home-section-title">
                    <h2>Discover More About Accommodation Rental</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                    <div className="home-section-title-links">
                        <Link href="">Ask Questions</Link>
                        <Link href="">Find property</Link>
                    </div>
                    <button>Discover More</button>
                </div>
                <div className="discover-accomodation-img-cont">
                    <img src="https://s3-alpha-sig.figma.com/img/501e/6d8e/efc0107dcf38a315eae75382506f7e3f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ysli1xRR6YpVW7yFGBuuJP-9GBK2TE9XcVO5umj2MTnVb55dWNrNDGcyWfGXClH9HkaRxoM7XWKU5R-K1mM6q-GyrxDbHiTzdpFwKJEtjoMoRGMYVciT6a1sE5uUD8uaawZFVcXZ4gKcZSVSmbueYEbhvqEe8NXgXugYZNNr3u25Z4XIdtfwy6I1KbkQZ5npYYTZVWT643o-4y4iFxMqj8r5D0514U0ogtexBAUKhck5PQr8FLdh0I50Za-TNvDDXMuRPvsq5wBdG2HT2bopnRmTNVQp~91ksGj~LG2N2shkQKddz1YmAx5kbFHvIBlaAcEpgtFNbfNMC6R4mtSSOw__" alt="" />
                </div>
            </section>
            <HorizontalDivider />
            <section className="discover-cities">
                <div className="home-section-title">
                    <h2>What City Will You Love to Live in?</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores </p>
                </div>
                <div className="city-properties">
                    <div className="city-properties-small-imgs">
                        <div className="cities-first-row">
                            <div className="city-cont">
                                <img src="https://s3-alpha-sig.figma.com/img/2889/3650/56a1d712d0eae143e2c09919d0bb5230?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwyOtmC42SsUrxkWYfTWNb90gjr3Ot4u7B1KhsIGRuscS9e2jbCBulf2ULAbxDK4bjYNep4SR3YrEyXP8t7-cqac5D0UvrDYEpwuxx0Ahzhdxg7sEaFEGQvdRDwi40RwVpv0wnHOhrh17L7RmsLHNND~L0SoRlnY4NU3AkOYYS3XTAQq9KA8rQIp53-Zx42NQ4IbjEZdANytgTgpNLxB5Qi4YGL3l-4C1mgA~-nnYYcZsrkopuWoATiUXYdYBsSRMD-CgWIw0~9QoxnF6JHbId1I5Ua7ut0dgWk9ualhE0PFhvU2b~-Q0BzNwuLHlQ8b7NkjESojVCfxnONAs7r~ow__" alt="" />
                                <p>
                                    Kigali
                                    <span>28 properties</span>
                                </p>
                            </div>
                            <div className="city-cont">
                                <img src="https://s3-alpha-sig.figma.com/img/2889/3650/56a1d712d0eae143e2c09919d0bb5230?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwyOtmC42SsUrxkWYfTWNb90gjr3Ot4u7B1KhsIGRuscS9e2jbCBulf2ULAbxDK4bjYNep4SR3YrEyXP8t7-cqac5D0UvrDYEpwuxx0Ahzhdxg7sEaFEGQvdRDwi40RwVpv0wnHOhrh17L7RmsLHNND~L0SoRlnY4NU3AkOYYS3XTAQq9KA8rQIp53-Zx42NQ4IbjEZdANytgTgpNLxB5Qi4YGL3l-4C1mgA~-nnYYcZsrkopuWoATiUXYdYBsSRMD-CgWIw0~9QoxnF6JHbId1I5Ua7ut0dgWk9ualhE0PFhvU2b~-Q0BzNwuLHlQ8b7NkjESojVCfxnONAs7r~ow__" alt="" />

                                <p>
                                    Musanze
                                    <span>28 properties</span>
                                </p>
                            </div>
                        </div>

                        <div className="cities-second-row">

                            <div className="city-cont">
                                <img src="https://s3-alpha-sig.figma.com/img/2889/3650/56a1d712d0eae143e2c09919d0bb5230?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwyOtmC42SsUrxkWYfTWNb90gjr3Ot4u7B1KhsIGRuscS9e2jbCBulf2ULAbxDK4bjYNep4SR3YrEyXP8t7-cqac5D0UvrDYEpwuxx0Ahzhdxg7sEaFEGQvdRDwi40RwVpv0wnHOhrh17L7RmsLHNND~L0SoRlnY4NU3AkOYYS3XTAQq9KA8rQIp53-Zx42NQ4IbjEZdANytgTgpNLxB5Qi4YGL3l-4C1mgA~-nnYYcZsrkopuWoATiUXYdYBsSRMD-CgWIw0~9QoxnF6JHbId1I5Ua7ut0dgWk9ualhE0PFhvU2b~-Q0BzNwuLHlQ8b7NkjESojVCfxnONAs7r~ow__" alt="" />
                                <p>
                                    Rubavu
                                    <span>28 properties</span>
                                </p>
                            </div>
                            <div className="city-cont">
                                <img src="https://s3-alpha-sig.figma.com/img/2889/3650/56a1d712d0eae143e2c09919d0bb5230?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwyOtmC42SsUrxkWYfTWNb90gjr3Ot4u7B1KhsIGRuscS9e2jbCBulf2ULAbxDK4bjYNep4SR3YrEyXP8t7-cqac5D0UvrDYEpwuxx0Ahzhdxg7sEaFEGQvdRDwi40RwVpv0wnHOhrh17L7RmsLHNND~L0SoRlnY4NU3AkOYYS3XTAQq9KA8rQIp53-Zx42NQ4IbjEZdANytgTgpNLxB5Qi4YGL3l-4C1mgA~-nnYYcZsrkopuWoATiUXYdYBsSRMD-CgWIw0~9QoxnF6JHbId1I5Ua7ut0dgWk9ualhE0PFhvU2b~-Q0BzNwuLHlQ8b7NkjESojVCfxnONAs7r~ow__" alt="" />
                                <p>
                                    Karongi
                                    <span>28 properties</span>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="city-properties-big-img">
                        <div className="city-cont">
                            <img src="https://s3-alpha-sig.figma.com/img/2889/3650/56a1d712d0eae143e2c09919d0bb5230?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwyOtmC42SsUrxkWYfTWNb90gjr3Ot4u7B1KhsIGRuscS9e2jbCBulf2ULAbxDK4bjYNep4SR3YrEyXP8t7-cqac5D0UvrDYEpwuxx0Ahzhdxg7sEaFEGQvdRDwi40RwVpv0wnHOhrh17L7RmsLHNND~L0SoRlnY4NU3AkOYYS3XTAQq9KA8rQIp53-Zx42NQ4IbjEZdANytgTgpNLxB5Qi4YGL3l-4C1mgA~-nnYYcZsrkopuWoATiUXYdYBsSRMD-CgWIw0~9QoxnF6JHbId1I5Ua7ut0dgWk9ualhE0PFhvU2b~-Q0BzNwuLHlQ8b7NkjESojVCfxnONAs7r~ow__" alt="" />
                            <p>
                                Bugesera
                                <span>28 properties</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="inspiration-section">
                <img src="https://s3-alpha-sig.figma.com/img/31b1/3385/7d8199b1586a48a3523fdcf859472ad5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BN8WDucalGa2eIhdVRyWLerH~Boj9XLSBFGNbhWlwuQQnDMkYlHw2mhLnCDFBxvzztRPhDXnBybCtRZNTk9yAT3ufPGg~uXUrAE51L0Gs2P3ytTZgyKj-7ThsU1~NZgzUXoCXiNg4-SOQQ2ih6ckVXeZgvsitT6cnL~SJ2zyZjCooUuQYzEsY4ePQ1Ru~5dupHekodItriBYxYTK5~DXvvG4kYLW31sm0eeebvEnvwLn-oaMgRygyCXyCyIyK1YlyuQKVMom4nwaAsNIxT8unk95-YQUDU3bKKQDJXTaXTfyV4BfOy74bD8yFiE1EarTBk5qZKsPB0I4AbAmaAvZeg__" alt="" />
                <div className="inspiration-content">
                    <div className="inspiration-left">
                        <h3>Get Inspirations For Your Next Trip</h3>
                        <p>Read About Wonderful Adventure We Love Most</p>
                        <button>Discover More</button>
                    </div>
                    <div className="inspiration-right">
                        <h3>Difficult Roads Lead To Beautiful Destination.</h3>
                        <p>Read About Wonderful Adventure We Love Most</p>
                        <button>Discover More</button>
                    </div>
                </div>
            </section>
            <PropertyListing/> */}
        </>
    )
}   