import "../styles/CarouselImage.css"

export default function CarouselImage({src, text}) {
    
    return (
        <div className="CarouselImage" style={{backgroundImage: `url(${src})`}}>
            <h1>{text}</h1>
        </div>
    )
}