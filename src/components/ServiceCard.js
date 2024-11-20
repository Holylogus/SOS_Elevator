import { useEffect, useRef } from "react";
import "../styles/ServiceCard.css"
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ src, title, text, alt, route }) {
    const CardRef = useRef(null);

    const navigate = useNavigate();  

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.2}
        );
        
        if (CardRef.current) {
            observer.observe(CardRef.current); // Figyelés megkezdése
          }
        return ()=>{
            if (CardRef.current) {
                observer.unobserve(CardRef.current);
            }
        }
    },[])
    return (
    <div className="customCard" ref={CardRef} onClick={()=>{
      navigate(route)
    }}>
      <div className="cardHeader">
        <img src={src} alt={alt} />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
