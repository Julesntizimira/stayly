"use client";
import { searchFilters, searchCards } from "@/utils";
import Filter from "@/components/filter";
import SearchCard from "@/components/searchCard";
import HorizontalDivider from "@/components/horizontalDivider";
import PropertyListing from "@/components/propertyList";

export default function SearchResults() {
  
  return (
    <>
      <section className="explore">
        <div className="explore-header">
          <h2>Explore Your Perfect Stay</h2>
          <p>Find the best accommodations tailored to your preferences and budget.</p>
        </div>
        <div className="explore-main">
          <div className="explore-cards-container">
            <div className="explore-card">
              <h3>Location</h3>
              <input
                type="text"
                placeholder="Which city do you prefer?"
              />
            </div>
            <div className="vertical-divider"></div>

            <div className="explore-card">
              <h3>Check-In</h3>
              <input
                type="text"
                placeholder="Add Dates"
              />
            </div>

            <div className="vertical-divider"></div>

            <div className="explore-card">
              <h3>Check-Out</h3>
              <input
                type="text"
                placeholder="Add Dates"
              />
            </div>

            <div className="vertical-divider"></div>

            <div className="explore-card">
              <h3>Geust</h3>
              <input
                type="text"
                placeholder="Add Geust"
              />
            </div>
          </div>
          <button className="explore-btn">
            Search
          </button>
        </div>
      </section>
      <div className="main-content">
        <section className="sort-section">
          <div className="map-img-cont">
            <img src="https://s3-alpha-sig.figma.com/img/6cc1/23b7/383c0a6cdcfac8f6e84630c2cb72871b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iyHerQuoq8XWpS8gPKKDBFNA6kt4YXvJJjQqOBeD3wpo8jEutUF~XbAeiOEdgWQlbKwzREpp00KpewOQFyeckhreBLyQ69djWYGCMMJ8nwMgBqgw-KRqmoEOo7Zwnpvdnhm2v6Bbu7~9FWegymsu1T-tbV7lj71Vdb~qz4BXEXv2gJ5teg75WBxH4Q420iBQcF6-xGo8MyKRWZKULMIv~fH5ltBw28Zwb~ZC2L9O7Tv57SNyQQfA0YRt--JWAVgjVehrWDzRKQbZSuSZ~Jp4VUHlzzZTknP~ya8EmQXrLAfNOpHg~Q~82amlW5d4iPi6DzVhqDnYuNlQdiWpZsKrZw__" alt="map-img" />
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="map-pin">
              <path d="M11 27.25C11.0535 27.25 11.0976 27.2351 11.1229 27.2252C11.1515 27.2139 11.1782 27.1999 11.2016 27.1862C11.2484 27.1587 11.2997 27.1222 11.353 27.0808C11.4605 26.9973 11.5959 26.8783 11.7532 26.7302C12.0688 26.4331 12.4867 26.0057 12.9703 25.4784C13.9381 24.4231 15.177 22.9591 16.3992 21.3195C17.6209 19.6805 18.8299 17.8607 19.7345 16.0946C20.6359 14.3351 21.25 12.6005 21.25 11.14C21.25 5.40504 16.6641 0.75 11 0.75C5.33581 0.75 0.75 5.40504 0.75 11.14C0.75 12.6005 1.36414 14.3351 2.26546 16.0946C3.17011 17.8607 4.3791 19.6805 5.60081 21.3195C6.82304 22.9591 8.06193 24.4231 9.02965 25.4784C9.51327 26.0057 9.93115 26.4331 10.2468 26.7302C10.4041 26.8783 10.5395 26.9973 10.647 27.0808C10.7002 27.1222 10.7516 27.1587 10.7984 27.1862C10.8218 27.1999 10.8485 27.2139 10.8771 27.2252C10.9024 27.2351 10.9465 27.25 11 27.25ZM15.82 11.0706C15.82 13.7751 13.6588 15.9617 11 15.9617C8.34127 15.9617 6.18001 13.7751 6.18001 11.0706C6.18001 8.36614 8.34127 6.17966 11 6.17966C13.6588 6.17966 15.82 8.36614 15.82 11.0706Z" fill="#07689F" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="sort-section-cont">
            <label className="sort-section-label">
              Sort By:
              <input
                type="text"
                placeholder="Our top Picks For Families"
              />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 16.5996L11 22.1996L5 16.5996" stroke="black" />
                <path d="M5 8.6L11 3L17 8.6" stroke="black" />
              </svg>

            </label>
            <div className="current-location-content">
              <div className="current-location">
                <h2>Rwanda</h2>
                <p>120 properties found</p>
              </div>
              <p>
                Travel professionals dedicated to simplifying your travel experience by curating flight and accommodation services on a user-friendly platform. Committed to quality and assurance. Find More Here ...
              </p>
            </div>
          </div>
        </section>
        <div className="searched-content">
          <div className="side-bar">
            <div className="up">
              <h2>Filter by</h2>
              <div className="up-filter">
                <p className="up-subtitle">
                  Your Budget for per night
                </p>
                <div className="price-range-slider">
                  <p className="normal-line"></p>
                  <p className="range-line"></p>
                  <div className="start-circle circle"></div>
                  <div className="end-circle-cont">
                    <div className="end-circle circle"></div>
                  </div>

                </div>
                <div className="price-range">
                  <label>
                    <input type="text" placeholder="Min price" />
                    $
                  </label>
                  <label>
                    <input type="text" placeholder="Max price" />
                    $
                  </label>
                </div>
              </div>
            </div>

            {searchFilters.map((filter, index) => (
               <Filter key={index} filter={filter}/>
              ))}
          </div>
          <div className="searched-main-content">
            {
              searchCards.map((container, index) => (
                <SearchCard key={index} container={container}/>
              ))
            }
          </div>
        </div>
      </div>
      <HorizontalDivider/>
      <PropertyListing/>
    </>
  );
}
