export default function Reservations() {
    return (
        <div className="profile-infos-container">
            <ul className="reservation-navigation">
                <li>Upcoming</li>
                <li>Past</li>
            </ul>
            <div className="reservations-container">
                <div className="reservation">
                    <div className="reservation-info">
                        <div className="property-img">
                            <img src="https://s3-alpha-sig.figma.com/img/501e/6d8e/efc0107dcf38a315eae75382506f7e3f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T2gEqaa-WQbmPWTTuz8RaB-rR-2sxLwyqmt40Uy2caCqLRcKr2flBQQnIbu5BZ-CdPUrRbiX5050xanKvF-RrvmcSMruXWrn2r~UArOisKevktz9b1wWYZ-M0acolxi3hTv9K6goGBZawYqql3seOluc6jUGfN7kMz5XTHhQskZyaE9wUb8mQgmSpPw4rcCnGL0H2kPwDA~O2porNnsZVqTdqrCdQ16P1t2ChcIop4QB7w20o-dP95tRCxjjIh1qYhpkoHfTarK7LODdAK1WIJDWqPhGW-ApGgEz71zgdgKGdzO~PXFc2gtD6IpGl6EslNAa9GliDiluvz8wj9bU0g__" alt="" />
                        </div>
                        <div className="reservation-details">
                            <h3>Fully Furnished Apartment</h3>
                            <div className="reservation-details-content">
                                <p>Check In: <span>12 Mar 2021</span></p>
                                <p>Duration: <span>Long(2 - 5Years)</span></p>
                                <p>Guests: <span>4 Adults</span></p>
                            </div>
                            <p className="reservation-price">$1000</p>
                        </div>

                    </div>
                    <button className="reservation-actions-btn">Cancel Reservation</button>
                </div>
                <div className="reservation">
                    <div className="reservation-info">
                        <div className="property-img">
                            <img src="https://s3-alpha-sig.figma.com/img/695c/73c2/03aa079c66f56545506cbd4f3bfbd16e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rf3x6HObuJs-ZH~yErP7BH628ZMoWaLmMVkOTpXOFqye-XeEhhiDc5Pv6uFuAQsA04SQVHh8AG1J4pZ11NK3u~uu2PFEa2jIjKrKlF0RRRTkcRORNwYvh2-UkWFgUbxb~1v9YsJDznF-QNrDvj5X~ZVPOK5xLuvCiZmu~hdcbOZ1A11aHyHiZT1Xynd1-M31EwRC4u2iUSu11WWQ~QngtJoFWZC9d47DMEd0fKnYsX45QxAQUY3vJp~nw2PbypsDOxxUCylSwrkD3Y3c4N3hldd~b0UcsmtfHSxSPG6-PLX39Th677aCB9ZgAWY72lX1P1SMU2VkPua-qUHVjsRQxA__" alt="" />
                        </div>
                        <div className="reservation-details">
                            <h3>Double Flat with 3 Rooms</h3>
                            <div className="reservation-details-content">
                                <p>Check In: <span>12 Mar 2021</span></p>
                                <p>Duration: <span>Long(2 - 5Years)</span></p>
                                <p>Guests: <span>4 Adults</span></p>
                            </div>
                            <p className="reservation-price">$1000</p>
                        </div>

                    </div>
                    <button className="reservation-actions-btn">Cancel Reservation</button>
                </div>
            </div>
        </div>
    )
}