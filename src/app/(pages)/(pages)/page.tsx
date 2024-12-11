import HomeExploreCard from "@/components/homeExploreCard"
import SearchCard from "@/components/searchCard"
import { featuredProperties, homeExploreCards, topPicks } from "@/utils"
import Link from "next/link"
import HorizontalDivider from "@/components/horizontalDivider"
import PropertyListing from "@/components/propertyList"

export default function HomeLayout() {

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
                        <h3>CheckIn</h3>
                        <input type="text" placeholder="Add Dates" />
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="search-input">
                        <h3>CheckOut</h3>
                        <input type="text" placeholder="Add Guests" />
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="search-input">
                        <h3>Guests</h3>
                        <input type="text" placeholder="Add Guests" />
                    </div>
                    <button className="search-btn">
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.9834 13.6751L21.251 18.6132C21.4361 18.7869 21.5401 19.0224 21.54 19.268C21.5399 19.5135 21.4358 19.749 21.2505 19.9225C21.0652 20.0961 20.814 20.1936 20.552 20.1935C20.2901 20.1934 20.0389 20.0958 19.8538 19.9221L14.5862 14.984C13.0115 16.1274 11.0314 16.6654 9.04854 16.4887C7.06571 16.312 5.22917 15.4338 3.91252 14.0327C2.59587 12.6317 1.89803 10.8131 1.96094 8.94684C2.02386 7.0806 2.84282 5.30691 4.25121 3.98661C5.65961 2.66632 7.55165 1.89859 9.54242 1.83961C11.5332 1.78062 13.4732 2.43482 14.9677 3.66911C16.4622 4.90339 17.399 6.62506 17.5875 8.48386C17.776 10.3427 17.2021 12.199 15.9824 13.6751H15.9834ZM9.79058 14.6857C11.3486 14.6857 12.8429 14.1055 13.9446 13.0727C15.0463 12.0399 15.6652 10.6391 15.6652 9.17856C15.6652 7.71797 15.0463 6.31721 13.9446 5.28442C12.8429 4.25163 11.3486 3.67142 9.79058 3.67142C8.23253 3.67142 6.7383 4.25163 5.6366 5.28442C4.5349 6.31721 3.91596 7.71797 3.91596 9.17856C3.91596 10.6391 4.5349 12.0399 5.6366 13.0727C6.7383 14.1055 8.23253 14.6857 9.79058 14.6857Z" fill="white" />
                        </svg>
                    </button>
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
                        topPicks.map((card, index) => {
                            return <SearchCard key={index} container={card} />
                        })
                    }
                </div>
            </section>
            <section className="featured-properties-section">
                <div className="home-section-title">
                    <h2>Featured Properties</h2>
                    <p>Browse our curated list of trending properties in favorite destinations worldwide.</p>
                </div>
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
                        featuredProperties.map((card, index) => {
                            return <SearchCard key={index} container={card} />
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
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.At vero eos et accusamus et iusto odio dignissimos ducidolorum fuga.</p>
                        <button>Discover Rwanda</button>
                    </div>
                    <div className="discover-img-cont">
                        <img src="https://s3-alpha-sig.figma.com/img/8d49/aae1/6f8b81ca0189baa9b6c841d521b4774b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isiMYsW95MxjFUQE0B9dgieocVYjzO9SsVKHsvRLQwq40uFJ4-Acj2TJaRZyTiWCcDXJNRtnMbSFOplDRLOVTNNZpnWjIAG485wyTZmmtmBhwmVYci8Xgp3xu9yH~1ZKuQYJCySiq9vx1SF9WI2g4-sNpj5Bc2L7~UDShikw-LWGZJajpzkbSuIrCLhoLra3cQiE9m9PADxi~wF6Q1fDFKQh4-tUtYL4dk3W-9wMeLvxqynKtfuzFevjns6aTbai7DtxM53cak2VJcQHhW1KRzy5ORKRXVqBsu6E5AexB5nIlfUhx3oQftEJpaIZnX5jUlqk7qbcLf7qxv9fMe85Sg__" alt="discover-img" />
                    </div>
                    <div className="discover-img-cont">
                        <img src="https://s3-alpha-sig.figma.com/img/800c/fef8/ed1738836e0e7a444fc67fdcac8bc080?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gcr6i7xlVttJTDFv~iuNZIbf-hweyKeY3vqD5hdwTOAX7lAspN9KbSJ9F003kq~Dtbfvh~1wdSnsUDkO1zpoeI8tZ0XjhoOHOf4qo13WqvyfMeMPw-5Zr4Tr2DjJPuJ3miTNRcBxQQCTu0iz5VDzfvXvxmtMEzixPiaHBffUklvZDNyPwzjadPBq1-Ulc4qwU7NsRku3OzE3sIRWewhHOnL-hus33xIPbPkmL5PNBPh1W51-h32vCWfV4ax0MRSdHtuNPl9a~GSX-D1AOVHeMRie9c~XoE8GRAMMipZgZ0xkReyijxi~v~8Opia~zns17qBnv82asWgfemnL5VfQiw__" alt="discover-img" />
                    </div>
                    <div className="discover-img-cont">
                        <img src="https://s3-alpha-sig.figma.com/img/ab07/ff83/a60cfdd8d7e4588c08c1e22538eaf71b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKUr1w69AKtFAwstmwTKEjXtFFlLV8BIWZcQS1qnKPbuelJvPF0biCNy-q5kHpjdi2jz4AcPZo6GlL7ZPXr78JyOy6cI9ecN1hQGKwyhGDBA7C0jDLK~JMcbtQh4HiGLn6EU9eYkR13OCsjrtFGtV5p~ZjmREpEl6t8C4mhHQpaJuAe9AohAyb6W01g-u9kQ45TKmrw9ixD4a6mssfrPt18spKeIXQTBiQI7RbF1HxqSfYuF9YbeAks889iTKr-Ggp1ESxGMJIRwXVxdAp8BNhxnlKuS8RTC1N1EJFnnx-p5AHVYVbFZgqpwv1FPSGBAQliFBXgYFJifjIMIqptXDg__" alt="discover-img" />
                    </div>
                    <div className="discover-img-cont">
                        <img src="https://s3-alpha-sig.figma.com/img/ca7c/010e/668f9adba61c3927e7e78ac2104c8d4a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbgKH7bkoiitMm6i3MtHJqobDLarQyzDNFF1Hk~blwrahvUK-HOXVGVVDPBD~pTEbJ2mlNW9JhpQI2I0vFITcFx5l6gAbp6CrRHYSaqp626qdvdv1ZXmwmqwXqy-FDpyawEg8rpQ9-eh8bW6DFrcx-PiiIvHgeF~NY1elzWKHzEfvgAtOmX50tiB5nQ-OLeHLxQXzx8dkHrEe2cBk7QdOJO0FxZzIeE5wfxJSgMe0i~NuBQ~8T6XOxE0F~qfqWRMEFUwi1rYtwqz9bSRuhwwrgi6tRcvSOOftZkxPEOQKv-Y318XxC7jLQLJ-7xcEg5BLD4iHIk9JeLbqBmWh80J4w__" alt="discover-img" />
                    </div>
                </div>
                <div className="discover-navigation">
                    <div className="discover-dots">
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                    </div>
                    <div className="discover-arraw">
                        <button>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <img src="images/Group.png" alt="" />
                <div className="white-cover"></div>
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
            <section className="inspiration-section">
                <img src="https://s3-alpha-sig.figma.com/img/31b1/3385/7d8199b1586a48a3523fdcf859472ad5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BN8WDucalGa2eIhdVRyWLerH~Boj9XLSBFGNbhWlwuQQnDMkYlHw2mhLnCDFBxvzztRPhDXnBybCtRZNTk9yAT3ufPGg~uXUrAE51L0Gs2P3ytTZgyKj-7ThsU1~NZgzUXoCXiNg4-SOQQ2ih6ckVXeZgvsitT6cnL~SJ2zyZjCooUuQYzEsY4ePQ1Ru~5dupHekodItriBYxYTK5~DXvvG4kYLW31sm0eeebvEnvwLn-oaMgRygyCXyCyIyK1YlyuQKVMom4nwaAsNIxT8unk95-YQUDU3bKKQDJXTaXTfyV4BfOy74bD8yFiE1EarTBk5qZKsPB0I4AbAmaAvZeg__" alt="" />
                <div className="inspiration-content">
                    <div className="inspiration-left">
                        <h3>Get Inspirations For Your Next Trip</h3>
                        <p>Read About Wonderful Adventure We Love Most</p>
                        <button>Discover More</button>
                    </div>
                    <div className="inspiration-right">
                        <h3>Difficult Roads Lead To Beautiful Destination.</h3>
                        {/* <p>Read About Wonderful Adventure We Love Most</p>
                        <button>Discover More</button> */}
                    </div>
                </div>
            </section>
            <PropertyListing/>
        </>
    )
}   