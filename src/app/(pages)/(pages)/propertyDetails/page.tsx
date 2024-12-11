import Calendar from "@/components/calendar";
import HorizontalDivider from "@/components/horizontalDivider";
import PropertyListing from "@/components/propertyList";
import SearchCard from "@/components/searchCard";
import { featuredProperties } from "@/utils";

export default function PropertyDetails() {
    return (
        <>

            <div className="property-details-upper">
                <div className="property-details-left-side">
                    <div className="property-imgs">
                        <div className="property-big-img-cont">
                            <img src="https://s3-alpha-sig.figma.com/img/501e/6d8e/efc0107dcf38a315eae75382506f7e3f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ysli1xRR6YpVW7yFGBuuJP-9GBK2TE9XcVO5umj2MTnVb55dWNrNDGcyWfGXClH9HkaRxoM7XWKU5R-K1mM6q-GyrxDbHiTzdpFwKJEtjoMoRGMYVciT6a1sE5uUD8uaawZFVcXZ4gKcZSVSmbueYEbhvqEe8NXgXugYZNNr3u25Z4XIdtfwy6I1KbkQZ5npYYTZVWT643o-4y4iFxMqj8r5D0514U0ogtexBAUKhck5PQr8FLdh0I50Za-TNvDDXMuRPvsq5wBdG2HT2bopnRmTNVQp~91ksGj~LG2N2shkQKddz1YmAx5kbFHvIBlaAcEpgtFNbfNMC6R4mtSSOw__" alt="" />
                        </div>
                        <div className="property-small-imgs">
                            <div className="property-small-img">
                                <img src="https://s3-alpha-sig.figma.com/img/0bcb/75eb/8713346778e42c28854897ba03e4f04e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ojunf9R5dc6pFL9OV~ZhEcGFBLULBoN~PGPQmIGHLIivrC8ZudLNgpoYojdSYZamGBoQdNNKlgFgYFqWMKyja1BIdZU-DOzceqpRKhY5AYsR8Ehp6Ufm4TZMe3TVUa10F1ziw~TTCZFFuGuEQD-dEyoW~9DB34e6ebm4XjeWn8XiI6n06-DtmpPyi-ge2sEA8gXfmLOMfEyz~zxTR7jUx1gHFAHaKeIzalOE7b7zJL8WtI1Ry6chY2ypY-hDyp1eMt4HO0lRddLUM16B~OzYGmmMAEg3DlOc5xWWFEM9guKQN89BqSUMzIs5MPAmoortPNbe4LvYxF2g~AaahE07nw__" alt="" />
                            </div>
                            <div className="property-small-img">
                                <img src="https://s3-alpha-sig.figma.com/img/145c/7890/27b38652d0c1167a47fd81b9b238ec39?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bKi30~eUU8P8-ahHb6fMS4mY-q~HQV6XP9CrUmtIzFgAJ~VrnJKbzs~ouIIkjbVM51akE19us~~sBppwj8QmyAOpqYAmZB71H933Jdrfmz91MlrVUhl6YOxTXAhNnIbefTuN2rZenLYnCNabFrrKewD60QAV1BQvE0XpcvgiNiVHc-yd4Q6Pih6lS~~wN9fe7KIkazvW0tEBs6JdwULHWEXfWvpUTbq~7AfTfzCPBtKtt59PmuycYccriwS3Ue5GqpNWYTeybSwCclFy0nLP453hPjrGoDfs6b5sLYIiWXqpSxjrGniONOZB~SYnAzMjJ~CVrAYGdmv58S1HDY7bSw__" />
                            </div>
                            <div className="property-small-img">
                                <img src="https://s3-alpha-sig.figma.com/img/1472/d891/62ebaaabacecbdb52a1e417393ea27fa?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBw~4NaNY~uK4HmFty1SvzTgIiqw9EGhLweIrebv8rAhe3uaSnc8~rZ5Jlc3YCE8dP1NC4MUTeROYqO1DkO6ekmvwe1EP56i~9ncEF4lKgP6dw5jdzTY586ZfjKHttFUCnz9n8A2c6Yg8Ia7Bt9hyy3y7-OSxPCv2gk0HymsKtbxmDaRAA3sXKBQQ7mMwxZKna9mDDSEzhKf9tmvXWq5eukLrxpJAysX3oFPbrg~yT~HA9aMukybrvYoXmWalnhdwk9uLhIZRLxxsS0Xp0E5yfu8SC-nFTvao-THotBAVR~dvLGD7ubrYqA6YVPN-4GZn0J9cAoHj~EvZ5n8TgdpeA__" alt="" />
                            </div>
                            <div className="property-small-img">
                                <img src="https://s3-alpha-sig.figma.com/img/ebf2/4c1c/bfecfd220c6e70e0a3d14e9b6915dc23?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqCmxzxa8Qqk3h~1JjSid-S1pLzddrsXGSykAyYgO3DHSNPqzPTgVj8If2I2JbehrXTjBbpXVYbO2O8zyAAM6tCihzTZO9iouCv0kqwlm4md~8kr8g-a3wc3iqnjPzZYOjnlgMvl2uEuNAuAGs-ymF~4gnZ2k2jJ89maFHig56H2LAlIE2huoNidCQGk0retTbEVvmhWoxwGoil2Ri2I~i7-J3WLYyEA7Jtk4ghEqbtD79lasNcNTi28HpJtneVoaiT042SUwPjMC-uGcsx5uJ9-m3RTFx0uRFYHzkRjVfxQD2MDyJoBgg9najQ65IKTsdA~rUXbAGjVh2C4qJIdjQ__" />
                            </div>
                            <div className="property-small-img">
                                <img src="https://s3-alpha-sig.figma.com/img/145c/7890/27b38652d0c1167a47fd81b9b238ec39?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bKi30~eUU8P8-ahHb6fMS4mY-q~HQV6XP9CrUmtIzFgAJ~VrnJKbzs~ouIIkjbVM51akE19us~~sBppwj8QmyAOpqYAmZB71H933Jdrfmz91MlrVUhl6YOxTXAhNnIbefTuN2rZenLYnCNabFrrKewD60QAV1BQvE0XpcvgiNiVHc-yd4Q6Pih6lS~~wN9fe7KIkazvW0tEBs6JdwULHWEXfWvpUTbq~7AfTfzCPBtKtt59PmuycYccriwS3Ue5GqpNWYTeybSwCclFy0nLP453hPjrGoDfs6b5sLYIiWXqpSxjrGniONOZB~SYnAzMjJ~CVrAYGdmv58S1HDY7bSw__" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="property-title-price">
                        <div className="title">Room 3 in Nyarutarama</div>
                        <div className="price">$450<span>/Bills included</span></div>
                    </div>
                    <div className="property-address">
                        <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.22188 9.525C6.53782 9.525 5.88178 9.27478 5.39808 8.82938C4.91438 8.38398 4.64264 7.77989 4.64264 7.15C4.64264 6.52011 4.91438 5.91602 5.39808 5.47062C5.88178 5.02522 6.53782 4.775 7.22188 4.775C7.90594 4.775 8.56198 5.02522 9.04568 5.47062C9.52938 5.91602 9.80112 6.52011 9.80112 7.15C9.80112 7.46189 9.73441 7.77073 9.60479 8.05887C9.47517 8.34702 9.28519 8.60884 9.04568 8.82938C8.80618 9.04992 8.52184 9.22486 8.20891 9.34421C7.89599 9.46357 7.56059 9.525 7.22188 9.525ZM7.22188 0.5C5.30652 0.5 3.46961 1.20062 2.11524 2.44774C0.760874 3.69486 0 5.38631 0 7.15C0 12.1375 7.22188 19.5 7.22188 19.5C7.22188 19.5 14.4438 12.1375 14.4438 7.15C14.4438 5.38631 13.6829 3.69486 12.3285 2.44774C10.9742 1.20062 9.13724 0.5 7.22188 0.5Z" fill="#6C6B6B" />
                        </svg>
                        <span>R. Damasceno Monteiro, 1170 Lisboa</span>
                    </div>
                    <div className="detail-features">
                        <p>4bedrooms</p>
                        <p>150m2</p>
                        <p>Private Bathroom</p>
                        <p>Furnished</p>
                        <p>Cleaning included</p>
                        <p>Balcony</p>
                        <p>Bed Linen/Towel</p>
                    </div>
                    <section className="property-description-section">
                        <h3>Description</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Sit dui fermentum vitae in dui gravida lectus molestie. Dui a netus interdum enim. Vitae id ornare amet curabitur cursus arcu ante sed. Orci ipsum libero sed in eget vitae. Nulla fringilla integer viverra aenean massa. Metus consequat purus enim tortor malesuada morbi. Eget mattis risus mauris egestas. Aenean quis amet habitant tortor facilisis viverra erat viverra velit. Velit mattis magna cursus purus vitae mauris senectus maed,
                        </p>
                        <button className="prop-page-btn">Show more <i className="fa-solid fa-arrow-down"></i>
                        </button>
                    </section>
                    <section className="property-facilities-section">
                        <h3>
                            Facilities
                        </h3>
                        <div className="property-facilities">
                            <p>
                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 2.5V1.5C10.5 0.675 9.825 0 9 0H7C6.615 0 6.265 0.15 6 0.39C5.735 0.15 5.385 0 5 0H3C2.175 0 1.5 0.675 1.5 1.5V2.5C0.675 2.5 0 3.175 0 4V6.5C0 7.325 0.675 8 1.5 8V9H2.5V8H9.5V9H10.5V8C11.325 8 12 7.325 12 6.5V4C12 3.175 11.325 2.5 10.5 2.5ZM7 1H9C9.275 1 9.5 1.225 9.5 1.5V2.89C9.195 3.165 9 3.56 9 4V5H6.5V1.5C6.5 1.225 6.725 1 7 1ZM2.5 1.5C2.5 1.225 2.725 1 3 1H5C5.275 1 5.5 1.225 5.5 1.5V5H3V4C3 3.56 2.805 3.165 2.5 2.89V1.5ZM11 6.5C11 6.775 10.775 7 10.5 7H1.5C1.225 7 1 6.775 1 6.5V4C1 3.725 1.225 3.5 1.5 3.5C1.775 3.5 2 3.725 2 4V6H10V4C10 3.725 10.225 3.5 10.5 3.5C10.775 3.5 11 3.725 11 4V6.5Z" fill="#667085" />
                                </svg>
                                <span>Shared Living Room</span>
                            </p>
                            <p>
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.115 4.885V4.115H2.885V4.885H2.115ZM5.115 4.885V4.115H5.885V4.885H5.115ZM0 9.5V6.2115H0.5V4C0.5 3.514 0.591333 3.05933 0.774 2.636C0.956667 2.21267 1.20667 1.84217 1.524 1.5245C1.84067 1.2065 2.21233 0.956333 2.639 0.774C3.06533 0.591333 3.519 0.5 4 0.5C4.486 0.5 4.94067 0.591333 5.364 0.774C5.78733 0.956667 6.15783 1.20683 6.4755 1.5245C6.79317 1.84217 7.04333 2.21267 7.226 2.636C7.40867 3.05933 7.5 3.514 7.5 4V6.2115H8V9.5H0ZM0.5 9H1.75V6.7115H0.5V9ZM2.25 9H3.75V6.7115H2.25V9ZM1 6.2115H3.75V1.0185C3.04 1.05817 2.40417 1.355 1.8425 1.909C1.28083 2.46333 1 3.16033 1 4V6.2115ZM4.25 6.2115H7V4C7 3.16 6.71933 2.463 6.158 1.909C5.596 1.355 4.96 1.05817 4.25 1.0185V6.2115ZM4.25 9H5.75V6.7115H4.25V9ZM6.25 9H7.5V6.7115H6.25V9Z" fill="#667085" />
                                </svg>
                                <span>Balcony</span>
                            </p>
                            <p>
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.115 4.885V4.115H2.885V4.885H2.115ZM5.115 4.885V4.115H5.885V4.885H5.115ZM0 9.5V6.2115H0.5V4C0.5 3.514 0.591333 3.05933 0.774 2.636C0.956667 2.21267 1.20667 1.84217 1.524 1.5245C1.84067 1.2065 2.21233 0.956333 2.639 0.774C3.06533 0.591333 3.519 0.5 4 0.5C4.486 0.5 4.94067 0.591333 5.364 0.774C5.78733 0.956667 6.15783 1.20683 6.4755 1.5245C6.79317 1.84217 7.04333 2.21267 7.226 2.636C7.40867 3.05933 7.5 3.514 7.5 4V6.2115H8V9.5H0ZM0.5 9H1.75V6.7115H0.5V9ZM2.25 9H3.75V6.7115H2.25V9ZM1 6.2115H3.75V1.0185C3.04 1.05817 2.40417 1.355 1.8425 1.909C1.28083 2.46333 1 3.16033 1 4V6.2115ZM4.25 6.2115H7V4C7 3.16 6.71933 2.463 6.158 1.909C5.596 1.355 4.96 1.05817 4.25 1.0185V6.2115ZM4.25 9H5.75V6.7115H4.25V9ZM6.25 9H7.5V6.7115H6.25V9Z" fill="#667085" />
                                </svg>
                                <span>WiFi</span>
                            </p>
                            <p>
                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.4465 7.93148C3.42317 7.95281 3.39733 7.96781 3.369 7.97648C3.34033 7.98581 3.31033 7.99048 3.279 7.99048C3.24767 7.99048 3.21467 7.98548 3.18 7.97548C3.14533 7.96548 3.11583 7.94831 3.0915 7.92398C2.82683 7.62765 2.618 7.30865 2.465 6.96698C2.312 6.62531 2.2355 6.26248 2.2355 5.87848C2.2355 5.59981 2.275 5.30731 2.354 5.00098C2.433 4.69465 2.57533 4.29631 2.781 3.80598C2.95333 3.36265 3.077 3.01165 3.152 2.75298C3.227 2.49365 3.2645 2.25365 3.2645 2.03298C3.2645 1.74431 3.202 1.46898 3.077 1.20698C2.952 0.944979 2.75617 0.685979 2.4895 0.429979C2.46617 0.404645 2.44767 0.374812 2.434 0.340479C2.42033 0.306145 2.4135 0.271978 2.4135 0.237978C2.4135 0.209645 2.418 0.181312 2.427 0.152979C2.436 0.124645 2.451 0.0981451 2.472 0.0734785C2.49767 0.0491451 2.527 0.0293118 2.56 0.0139785C2.59333 -0.00135485 2.6275 -0.0090214 2.6625 -0.0090214C2.6975 -0.0090214 2.72867 -0.00185474 2.756 0.0124786C2.78333 0.0268119 2.80833 0.0461451 2.831 0.0704784C3.11433 0.341812 3.34067 0.642479 3.51 0.972479C3.67933 1.30248 3.76417 1.65515 3.7645 2.03048C3.7645 2.29315 3.72583 2.56898 3.6485 2.85798C3.57083 3.14665 3.43617 3.52365 3.2445 3.98898C3.04883 4.45698 2.91517 4.82748 2.8435 5.10048C2.7715 5.37381 2.7355 5.63115 2.7355 5.87248C2.7355 6.17548 2.79433 6.46765 2.912 6.74898C3.02967 7.03031 3.2135 7.30531 3.4635 7.57398C3.48483 7.59898 3.50183 7.62631 3.5145 7.65598C3.52717 7.68565 3.5335 7.71748 3.5335 7.75148C3.5335 7.78548 3.52583 7.81765 3.5105 7.84798C3.49517 7.87831 3.47383 7.90581 3.4465 7.93148ZM5.682 7.93048C5.65867 7.95281 5.63283 7.97015 5.6045 7.98248C5.57617 7.99481 5.54467 8.00065 5.51 7.99998C5.47533 7.99931 5.442 7.99248 5.41 7.97948C5.378 7.96648 5.35033 7.94798 5.327 7.92398C5.06233 7.63398 4.85183 7.31715 4.6955 6.97348C4.53917 6.62981 4.46117 6.26815 4.4615 5.88848C4.4615 5.61348 4.5025 5.31965 4.5845 5.00698C4.6665 4.69431 4.8105 4.29398 5.0165 3.80598C5.19517 3.35665 5.3205 3.00581 5.3925 2.75348C5.4645 2.50115 5.50033 2.26565 5.5 2.04698C5.5 1.75131 5.4375 1.47098 5.3125 1.20598C5.1875 0.940645 4.99167 0.681979 4.725 0.429979C4.70067 0.403645 4.68233 0.374145 4.67 0.341479C4.658 0.308812 4.652 0.275145 4.652 0.240479C4.652 0.210479 4.656 0.183312 4.664 0.158978C4.672 0.134645 4.68683 0.109478 4.7085 0.0834785C4.73417 0.0578118 4.76417 0.0374786 4.7985 0.0224786C4.83283 0.00747858 4.8665 -2.14567e-05 4.8995 -2.14567e-05C4.9325 -2.14567e-05 4.9625 0.00631193 4.9895 0.0189786C5.0165 0.0316453 5.04217 0.0488118 5.0665 0.0704784C5.34983 0.341478 5.57617 0.641979 5.7455 0.971979C5.91483 1.30198 5.99967 1.65465 6 2.02998C6 2.29265 5.961 2.56681 5.883 2.85248C5.80533 3.13815 5.66783 3.52098 5.4705 4.00098C5.27483 4.47531 5.14117 4.84581 5.0695 5.11248C4.99783 5.37915 4.96183 5.63198 4.9615 5.87098C4.9615 6.16998 5.024 6.46065 5.149 6.74298C5.274 7.02531 5.4615 7.30615 5.7115 7.58548C5.73083 7.60981 5.74533 7.63631 5.755 7.66498C5.76467 7.69331 5.7695 7.72165 5.7695 7.74998C5.7695 7.78265 5.76167 7.81515 5.746 7.84748C5.73067 7.87981 5.70933 7.90781 5.682 7.93048ZM1.211 7.92998C1.18767 7.95231 1.16183 7.96965 1.1335 7.98198C1.10517 7.99431 1.0735 8.00031 1.0385 7.99998C1.0035 7.99965 0.970333 7.99281 0.939 7.97948C0.907667 7.96615 0.88 7.94765 0.856 7.92398C0.591 7.63398 0.382167 7.31715 0.2295 6.97348C0.0765001 6.62981 0 6.26815 0 5.88848C0 5.61348 0.0395 5.31965 0.1185 5.00698C0.1975 4.69431 0.339833 4.29398 0.5455 3.80598C0.724167 3.35665 0.849333 3.00581 0.921 2.75348C0.993 2.50115 1.029 2.26565 1.029 2.04698C1.029 1.75131 0.9665 1.47098 0.8415 1.20598C0.7165 0.940645 0.520667 0.681979 0.254 0.429979C0.226667 0.403645 0.207167 0.374145 0.1955 0.341479C0.183833 0.308812 0.178 0.276145 0.178 0.243479C0.178 0.210812 0.1825 0.180478 0.1915 0.152478C0.2005 0.124478 0.2155 0.0979785 0.2365 0.0729785C0.262167 0.0486452 0.291833 0.0288119 0.3255 0.0134785C0.359167 -0.00185481 0.391667 -0.00952148 0.423 -0.00952148C0.454333 -0.00952148 0.484667 -0.00235471 0.514 0.0119786C0.543333 0.026312 0.5705 0.0458118 0.5955 0.0704784C0.878833 0.341478 1.10517 0.641979 1.2745 0.971979C1.44383 1.30198 1.52867 1.65615 1.529 2.03448C1.529 2.28781 1.492 2.55731 1.418 2.84298C1.34467 3.12831 1.20933 3.51148 1.012 3.99248C0.822667 4.45781 0.6905 4.82698 0.6155 5.09998C0.5405 5.37298 0.503 5.63031 0.503 5.87198C0.503 6.17665 0.563333 6.47065 0.684 6.75398C0.804667 7.03731 0.990167 7.31448 1.2405 7.58548C1.2595 7.60981 1.27383 7.63631 1.2835 7.66498C1.2935 7.69331 1.2985 7.72165 1.2985 7.74998C1.2985 7.78265 1.29067 7.81515 1.275 7.84748C1.25967 7.87981 1.23833 7.90731 1.211 7.92998Z" fill="#667085" />
                                </svg>
                                <span>Heating</span>
                            </p>
                            <p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.74316 2.48247C1.82716 2.49281 1.91283 2.49864 2.00016 2.49997C2.39516 2.50447 2.76966 2.41097 3.00016 2.24997C3.23066 2.08997 3.60516 1.99647 4.00016 1.99997C4.39516 1.99647 4.76966 2.08997 5.00016 2.24997C5.23066 2.41097 5.60516 2.50447 6.00016 2.49997C6.39516 2.50447 6.76966 2.41097 7.00016 2.24997C7.23066 2.08997 7.60516 1.99647 8.00016 1.99997C8.39516 1.99647 8.76966 2.08997 9.00016 2.24997C9.23066 2.41097 9.60516 2.50447 10.0002 2.49997C10.0855 2.49931 10.1693 2.49364 10.2517 2.48297" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.5 1L2.3605 6.1645C2.39944 6.39799 2.51995 6.6101 2.70059 6.76309C2.88123 6.91608 3.11028 7.00003 3.347 7H8.653C8.88972 7.00003 9.11877 6.91608 9.29941 6.76309C9.48005 6.6101 9.60056 6.39799 9.6395 6.1645L10.5 1" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Washing Machine</span>
                            </p>
                            <p>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.75 9.75V7.329L2.875 9.179L2.521 8.825L4.75 6.596V5.25H3.404L1.175 7.479L0.821 7.125L2.671 5.25H0.25V4.75H2.671L0.821 2.875L1.175 2.521L3.404 4.75H4.75V3.404L2.521 1.175L2.875 0.821L4.75 2.671V0.25H5.25V2.671L7.125 0.821L7.479 1.175L5.25 3.404V4.75H6.596L8.825 2.521L9.179 2.875L7.329 4.75H9.75V5.25H7.329L9.179 7.125L8.825 7.479L6.596 5.25H5.25V6.596L7.479 8.825L7.125 9.179L5.25 7.329V9.75H4.75Z" fill="#667085" />
                                </svg>
                                <span>Air Conditioner</span>
                            </p>
                        </div>
                        <button className="prop-page-btn">Show more <i className="fa-solid fa-arrow-down"></i>
                        </button>
                    </section>
                    <section className="property-availability">
                        <h3>Availability</h3>
                        <div className="availability-wrapper">
                            <div className="availability-dates">
                                <p>Available from:
                                    <span>26 Feb 2024</span>
                                </p>
                                <p>Minimum stay:
                                    <span>3 Months</span>
                                </p>
                                <p>
                                    Maximum stay:
                                    <span> Not determined</span>
                                </p>
                                <p>
                                    Calender updated:
                                    <span> 2 days ago</span>
                                </p>
                            </div>
                            <div className="property-pricing">
                                <p className="reds">
                                    <span className="mon">Jan</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p className="reds">
                                    <span className="mon">Feb</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p>
                                    <span className="mon">Mar</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p>
                                    <span className="mon">Apr</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p>
                                    <span className="mon">May</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p>
                                    <span className="mon">Jun</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p className="blacks">
                                    <span className="mon">Jul</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p className="blacks">
                                    <span className="mon">Aug</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p className="blacks">
                                    <span className="mon">Sep</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p>
                                    <span className="mon">Oct</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p>
                                    <span className="mon">Nov</span>
                                    <span className="pr">$500</span>
                                </p>
                                <p>
                                    <span className="mon">Dec</span>
                                    <span className="pr">$500</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="property-facilities-section">
                        <h3>Landlord Rules</h3>
                        <div className="property-facilities">
                            <p>
                                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 11H7.5V13.25H0V11ZM9.25 11H10V13.25H9.25V11ZM8 11H8.75V13.25H8V11ZM8.425 4.7975C8.735 4.34 8.925 3.71 8.925 3.0125C8.925 1.625 8.175 0.5 7.25 0.5V1.625C7.75 1.625 8.175 2.2475 8.175 3.0125C8.175 3.7775 7.75 4.4 7.25 4.4V5.525C8.37 5.525 9.25 6.8975 9.25 8.5775V10.25H10V8.57C10 6.905 9.36 5.465 8.425 4.7975ZM7.015 6.65H6.25C5.75 6.65 5.325 5.915 5.325 5.15C5.325 4.385 5.75 3.8375 6.25 3.8375V2.7125C5.80576 2.7125 5.37972 2.97721 5.0656 3.44839C4.75147 3.91958 4.575 4.55864 4.575 5.225C4.575 5.89136 4.75147 6.53042 5.0656 7.00161C5.37972 7.47279 5.80576 7.7375 6.25 7.7375H7.015C7.54 7.7375 8 8.2925 8 9.275V10.25H8.75V9.02C8.75 7.6625 7.95 6.65 7.015 6.65Z" fill="#667085" />
                                </svg>
                                <span>No smoking allowed</span>
                            </p>
                            <p>
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.21797 2.78115L7.84059 0.791494C7.73851 0.644336 7.60282 0.523625 7.44478 0.439364C7.28673 0.355103 7.11089 0.309718 6.9318 0.30697L4.31789 0.26947H4.3125C2.96299 0.26947 1.92757 0.495197 1.2607 1.59683C0.639844 2.62227 0.375 4.36904 0.375 7.43748V7.81248H1.2318L0.68025 10.625H1.44455L1.9961 7.81248H2.25C2.86246 7.81794 3.4525 7.58229 3.89269 7.15641C4.29063 6.77565 4.57767 6.25473 4.72282 5.64999L4.72413 5.64456L5.36733 2.56248H4.60116L3.99227 5.48017C3.80684 6.2461 3.25233 7.06248 2.25 7.06248H1.12641C1.14677 4.40781 1.38848 2.83391 1.9023 1.98512C2.33355 1.27262 2.96391 1.0197 4.3099 1.01935L6.92102 1.05685C6.98072 1.05776 7.03934 1.07289 7.09202 1.10097C7.1447 1.12906 7.18993 1.1693 7.22395 1.21836L8.78203 3.46881L10.875 3.81765V4.21513L10.526 6.07656C10.423 6.62595 10.2469 6.9027 9.52477 6.98945L6.56447 7.49591L6.5449 10.625H7.2949L7.31053 8.12905L9.62381 7.73295C10.1479 7.66852 10.5345 7.49963 10.8057 7.21679C11.0375 6.97496 11.1785 6.66601 11.2631 6.21479L11.625 4.28483V3.18231L9.21797 2.78115Z" fill="#667085" />
                                </svg>
                                <span>Pets are not allowed</span>
                            </p>
                            <p>
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.2509 1.40001H1.2999C1.22034 1.40001 1.14403 1.43162 1.08777 1.48788C1.03151 1.54414 0.999902 1.62045 0.999902 1.70001V8.90001C0.999902 8.97958 1.03151 9.05588 1.08777 9.11214C1.14403 9.16841 1.22034 9.20001 1.2999 9.20001H6.6999C6.77947 9.20001 6.85577 9.16841 6.91203 9.11214C6.9683 9.05588 6.9999 8.97958 6.9999 8.90001V1.70001C6.9999 1.62045 6.9683 1.54414 6.91203 1.48788C6.85577 1.43162 6.77947 1.40001 6.6999 1.40001H5.7489C5.68684 1.57556 5.57185 1.72754 5.4198 1.835C5.26774 1.94246 5.0861 2.00011 4.8999 2.00001H3.0999C2.91371 2.00011 2.73206 1.94246 2.58001 1.835C2.42795 1.72754 2.31297 1.57556 2.2509 1.40001ZM5.7489 0.800012H6.6999C6.9386 0.800012 7.16752 0.894834 7.3363 1.06362C7.50508 1.2324 7.5999 1.46132 7.5999 1.70001V8.90001C7.5999 9.13871 7.50508 9.36763 7.3363 9.53641C7.16752 9.70519 6.9386 9.80001 6.6999 9.80001H1.2999C1.06121 9.80001 0.832289 9.70519 0.663506 9.53641C0.494723 9.36763 0.399902 9.13871 0.399902 8.90001V1.70001C0.399902 1.46132 0.494723 1.2324 0.663506 1.06362C0.832289 0.894834 1.06121 0.800012 1.2999 0.800012H2.2509C2.31297 0.624465 2.42795 0.472489 2.58001 0.365029C2.73206 0.257569 2.91371 0.199915 3.0999 0.200012H4.8999C5.0861 0.199915 5.26774 0.257569 5.4198 0.365029C5.57185 0.472489 5.68684 0.624465 5.7489 0.800012ZM2.7999 1.10001C2.7999 1.17958 2.83151 1.25588 2.88777 1.31214C2.94403 1.36841 3.02034 1.40001 3.0999 1.40001H4.8999C4.97947 1.40001 5.05577 1.36841 5.11203 1.31214C5.1683 1.25588 5.1999 1.17958 5.1999 1.10001C5.1999 1.02045 5.1683 0.944141 5.11203 0.88788C5.05577 0.83162 4.97947 0.800012 4.8999 0.800012H3.0999C3.02034 0.800012 2.94403 0.83162 2.88777 0.88788C2.83151 0.944141 2.7999 1.02045 2.7999 1.10001ZM3.3999 3.80001C3.3999 3.64088 3.46312 3.48827 3.57564 3.37575C3.68816 3.26323 3.84077 3.20001 3.9999 3.20001C4.15903 3.20001 4.31164 3.26323 4.42417 3.37575C4.53669 3.48827 4.5999 3.64088 4.5999 3.80001C4.5999 3.95914 4.53669 4.11175 4.42417 4.22428C4.31164 4.3368 4.15903 4.40001 3.9999 4.40001C3.84077 4.40001 3.68816 4.3368 3.57564 4.22428C3.46312 4.11175 3.3999 3.95914 3.3999 3.80001ZM3.9999 2.60001C3.68164 2.60001 3.37642 2.72644 3.15137 2.95148C2.92633 3.17653 2.7999 3.48175 2.7999 3.80001C2.7999 4.11827 2.92633 4.4235 3.15137 4.64854C3.37642 4.87358 3.68164 5.00001 3.9999 5.00001C4.31816 5.00001 4.62339 4.87358 4.84843 4.64854C5.07347 4.4235 5.1999 4.11827 5.1999 3.80001C5.1999 3.48175 5.07347 3.17653 4.84843 2.95148C4.62339 2.72644 4.31816 2.60001 3.9999 2.60001ZM2.5155 6.31761C2.51417 6.30373 2.51607 6.28974 2.52107 6.27672C2.52607 6.26371 2.53402 6.25203 2.5443 6.24261C2.57253 6.21508 2.61047 6.19978 2.6499 6.20001H5.3499C5.38933 6.19978 5.42727 6.21508 5.4555 6.24261C5.46568 6.25209 5.47352 6.26379 5.47841 6.2768C5.4833 6.28981 5.48511 6.30378 5.4837 6.31761C5.4549 6.59061 5.3763 6.84921 5.1849 7.04121C4.9977 7.22901 4.6557 7.40001 3.9999 7.40001C3.3441 7.40001 3.0021 7.22901 2.8149 7.04121C2.6229 6.84921 2.5449 6.59061 2.5155 6.31761ZM2.6499 5.60001C2.2515 5.60001 1.8711 5.93001 1.9191 6.38121C1.9551 6.71721 2.0601 7.13361 2.3895 7.46481C2.7237 7.79961 3.2403 8.00001 3.9999 8.00001C4.7595 8.00001 5.2761 7.79961 5.6103 7.46481C5.9403 7.13361 6.0453 6.71661 6.0807 6.38121C6.1287 5.93001 5.7489 5.60001 5.3499 5.60001H2.6499Z" fill="#667085" />
                                </svg>
                                <span>Overnight guests are allowed</span>
                            </p>
                        </div>
                    </section>
                    <section className="fast-actions">
                        <p>
                            <i className="fa-solid fa-circle-check"></i>
                            Professional Team
                        </p>
                        <p>
                            <i className="fa-solid fa-circle-check"></i>
                            Book a Cal
                        </p>
                        <p>
                            <i className="fa-solid fa-circle-check"></i>
                            Verified Room
                        </p>
                        <p>
                            <i className="fa-solid fa-circle-check"></i>
                            Fast and Secure Booking
                        </p>
                    </section>
                </div>
                <div className="property-details-right-side">
                    <section className="calendar-section">
                        <div className="calendar-section-title">
                            <h3>Booking Request</h3>
                            <div>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V11M13 5L9 1M9 1L5 5M9 1V14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <div className="calendar-container">
                            <div className="check-calendar">
                                <Calendar container={{ type: "Check In" }} />
                            </div>

                            <div className="check-calendar">
                                <Calendar container={{ type: "Check Out" }} />
                            </div>
                        </div>
                        <button>Check Booking</button>
                    </section>
                    <section className="location-section">
                        <h3>Location</h3>
                        <div className="property-address">
                            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.22188 9.525C6.53782 9.525 5.88178 9.27478 5.39808 8.82938C4.91438 8.38398 4.64264 7.77989 4.64264 7.15C4.64264 6.52011 4.91438 5.91602 5.39808 5.47062C5.88178 5.02522 6.53782 4.775 7.22188 4.775C7.90594 4.775 8.56198 5.02522 9.04568 5.47062C9.52938 5.91602 9.80112 6.52011 9.80112 7.15C9.80112 7.46189 9.73441 7.77073 9.60479 8.05887C9.47517 8.34702 9.28519 8.60884 9.04568 8.82938C8.80618 9.04992 8.52184 9.22486 8.20891 9.34421C7.89599 9.46357 7.56059 9.525 7.22188 9.525ZM7.22188 0.5C5.30652 0.5 3.46961 1.20062 2.11524 2.44774C0.760874 3.69486 0 5.38631 0 7.15C0 12.1375 7.22188 19.5 7.22188 19.5C7.22188 19.5 14.4438 12.1375 14.4438 7.15C14.4438 5.38631 13.6829 3.69486 12.3285 2.44774C10.9742 1.20062 9.13724 0.5 7.22188 0.5Z" fill="#6C6B6B" />
                            </svg>
                            <span>Nyarutarama, Rwanda</span>
                        </div>
                        <div className="location-section-map">
                            <img src="https://s3-alpha-sig.figma.com/img/6dfd/7b34/0d6e3d2c25b730ed28507582cc5d357e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBdieUVL7H68A~Inz9GCGcNY33fNpr4vde75VJhNCx79kVERQaek501FR~YaYUxVTbchj4J7A~F3m6vleheueC9GsGhK1ox347hMb4a9xjIEXrU3Y28zmpA0qWaDGIhG2IlaSMXTcoj5yXW8ObJrny4nMhyMhL-fGWRRAqODEIgT5y5RAKJwPmZ2w6tluVOhFeCkOizcZNMCr5TjDZbVfYXhF7gHYhvJIvQYW4mz~U80aGZMNAtKfHB8ekZQZBg8HxMCa5qvyjRKrXLwId7xwM3TIrr3Tc8aS92RvbpW0gFQOFvTIf5uFgyIOBdQzK58JwaC7ykESxPHNZJXWCi1mw__" alt="" />
                        </div>
                    </section>
                    <section className="property-details-featured-listings">
                        <h3>Featured Listing</h3>
                        <p>Aenean quis amet habitant tortor facilisis viverr</p>
                        <div className="featured-properties-listings">
                            <div className="featured-property-container">
                                <div className="featured-property-listing-img-cont"></div>
                                <div className="featured-property-content">
                                    <h4>Division Road house</h4>
                                    <p>Room No.: A02577</p>
                                    <span>$250/month</span>
                                </div>
                            </div>
                            <div className="featured-property-container">
                                <div className="featured-property-listing-img-cont"></div>
                                <div className="featured-property-content">
                                    <h4>Division Road house</h4>
                                    <p>Room No.: A02577</p>
                                    <span>$250/month</span>
                                </div>
                            </div>
                            <div className="featured-property-container">
                                <div className="featured-property-listing-img-cont"></div>
                                <div className="featured-property-content">
                                    <h4>Division Road house</h4>
                                    <p>Room No.: A02577</p>
                                    <span>$250/month</span>
                                </div>
                            </div>
                            <div className="featured-property-container">
                                <div className="featured-property-listing-img-cont"></div>
                                <div className="featured-property-content">
                                    <h4>Division Road house</h4>
                                    <p>Room No.: A02577</p>
                                    <span>$250/month</span>
                                </div>
                            </div>
                            <div className="featured-property-container">
                                <div className="featured-property-listing-img-cont"></div>
                                <div className="featured-property-content">
                                    <h4>Division Road house</h4>
                                    <p>Room No.: A02577</p>
                                    <span>$250/month</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <HorizontalDivider />
            <section className="featured-properties-section">
                <div className="home-section-title">
                    <h2>Similar Accommodations in Nyarutarama</h2>
                    <p>Browse our curated list of trending properties in favorite destinations worldwide.</p>
                </div>
                <div className="pick-next-stay-section-images">
                    {
                        featuredProperties.filter((_, index) => index < 4).map((card, index) => {
                            return <SearchCard key={index} container={card} />
                        })
                    }
                </div>
            </section>
            <HorizontalDivider />
            <PropertyListing />
        </>
    )
}