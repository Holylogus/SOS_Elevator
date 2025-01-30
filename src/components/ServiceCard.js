import { useEffect, useRef } from "react";
import "../styles/ServiceCard.css"
import { useNavigate, useLocation } from "react-router-dom";

export default function ServiceCard({ src, title, text, alt, route }) {
    const CardRef = useRef(null);

    const navigate = useNavigate(); 
    const location = useLocation(); 

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

    useEffect(() => {
      if (location.hash) {
          const element = document.getElementById(location.hash.substring(1));
          if (element) {
              element.scrollIntoView({ behavior: "smooth" });
          }
      }
  }, [location]);
  
    return (
    <div className="customCard" ref={CardRef} onClick={()=>{
      const [path, hash] = route.split("#");
      navigate(path); // Navigál az alap útvonalra
      if (hash) {
          setTimeout(() => {
              const element = document.getElementById(hash);
              if (element) {
                  element.scrollIntoView({ behavior: "smooth" }); // Görget az elemre
              }
          }, 100); // Rövid késleltetés a React frissítés miatt
      }
    }}>
      <div className="cardHeader">
        <img src={src} alt={alt} />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
    
  );
}
