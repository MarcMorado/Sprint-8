import React, { useRef, useEffect, useCallback } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import {
  ContenedorPrincipal,
  ContenedorSlideshow,
  Slide,
  Controles,
  Boton,
} from "../style/Styled.js";

const Slideshow = ({
  children,
  controles = false,
  autoplay = false,
  velocidad = "500",
  intervalo = "5000",
}) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = useCallback(() => {
    if (slideshow.current.children.length > 0) {
      console.log("Siguiente");

      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `${velocidad}ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  }, [velocidad]);

  const anterior = () => {
    console.log("Anterior");
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoplay) {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, intervalo);

      slideshow.current.addEventListener("mouseenter", () => {
        clearInterval(intervaloSlideshow.current);
      });

      slideshow.current.addEventListener("mouseleave", () => {
        intervaloSlideshow.current = setInterval(() => {
          siguiente();
        }, intervalo);
      });
    }
  }, [autoplay, intervalo, siguiente]);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
      {controles && (
        <Controles>
          <Boton onClick={anterior}>
            <IoIosArrowDropleftCircle style={{ height: "4em", width: "4em" }} />
          </Boton>
          <Boton derecho onClick={siguiente}>
            <IoIosArrowDroprightCircle
              style={{ height: "4em", width: "4em" }}
            />
          </Boton>
        </Controles>
      )}
    </ContenedorPrincipal>
  );
};

export { Slideshow, Slide };
