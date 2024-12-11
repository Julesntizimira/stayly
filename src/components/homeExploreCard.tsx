import Link from "next/link";

interface HomeExploreCardProps {
    container: {
        title: string;
        description: string;
        imageUrl: string;
        link: string;
    };
}

export default function HomeExploreCard(props: HomeExploreCardProps) {
    const {title, description, imageUrl, link} = props.container
    return (
        <div className="home-choose-images-container">
            <div className="home-choose-img-cont">
                <img src={imageUrl} alt="space-image" />

            </div>
            <div className="home-choose-img-caption">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Link href="">{link}</Link>
        </div>
    )
}