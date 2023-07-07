import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (opciones = {}) => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    const elementRef = useRef();

    useEffect(() => {
      const elemento = elementRef.current;
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setIsIntersecting(entry.isIntersecting))
      }, opciones)
      if(elemento){
        observer.observe(elemento)
      }

      return () => {
        if(elemento){
            observer.unobserve(elemento)
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return {
    isIntersecting,
    elementRef
  }
}

export default useIntersectionObserver