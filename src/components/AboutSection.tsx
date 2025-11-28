import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const support = supportRef.current;

    if (!section || !content || !image || !support) return;

    // Parallax da imagem
    gsap.fromTo(
      image,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: image,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação do conteúdo
    gsap.fromTo(
      content.children,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação da seção de apoio
    gsap.fromTo(
      support.children,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: support,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover effect para o logo (apenas em dispositivos não-touch)
    const logo = support.querySelector(".support-logo");
    if (logo && !("ontouchstart" in window)) {
      logo.addEventListener("mouseenter", () => {
        gsap.to(logo, {
          scale: 1.05,
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, {
          scale: 1,
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (logo && !("ontouchstart" in window)) {
        logo.removeEventListener("mouseenter", () => {});
        logo.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-muted/30 to-white"
    >
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Conteúdo */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 md:mb-6" style={{ color: '#45b2e1' }}>
              Uma Obra Técnica e Humana
              <span className="block" style={{ fontFamily: 'Adigiana UI, sans-serif', color: '#f4b7b2', fontSize: '30px' }}>
                De Fono para Quem Cuida
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-prose">
              <p>
                A Literare Books tem o orgulho de apresentar seu mais novo projeto de coautoria: De Profissional para Profissional – Caminhos da Fonoaudiologia na prática clínica e educacional, sob coordenação editorial de Rita Cordeiro, referência no desenvolvimento infantil.
              </p>
              <p>
                Mais do que um livro, este projeto é um convite ao diálogo entre especialistas, reunindo relatos, reflexões e experiências reais de fonoaudiólogos que atuam diariamente na construção da comunicação humana — seja em consultórios, escolas, clínicas interdisciplinares ou na supervisão de equipes.
              </p>
              <p>
                Cada capítulo será um espaço de troca técnica e sensível, reunindo aprendizados, casos clínicos, desafios e estratégias que refletem a complexidade e a beleza do desenvolvimento da linguagem, fala e comunicação.
                </p>
                <p>
                Se você é fonoaudiólogo clínico ou educacional, estudante de Fonoaudiologia, profissional da saúde ou educação que atua com desenvolvimento infantil, supervisor, coordenador de clínica ou AT, ou simplesmente alguém que deseja aprofundar conhecimentos em linguagem, fala, TEA, desenvolvimento infantil e práticas baseadas em evidências, este projeto foi feito para você.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: '#f9cec6' }}></div>
                <span className="text-xs sm:text-sm font-medium" style={{ color: '#46b2e0' }}>
                  Linguagem
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: '#f28ab0' }}></div>
                <span className="text-xs sm:text-sm font-medium" style={{ color: '#46b2e0' }}>
                  Comunicação
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: '#b48bffff' }}></div>
                <span className="text-xs sm:text-sm font-medium" style={{ color: '#46b2e0' }}>
                  Desenvolvimento
                </span>
              </div>
            </div>
          </div>

          {/* Imagem frontal do livro */}
          <div ref={imageRef} className="order-1 lg:order-2 flex justify-center">
            <div className="relative sm:transform sm:rotate-3 sm:hover:rotate-0 transition-transform duration-500 shadow-md sm:shadow-lg rounded-lg sm:rounded-xl overflow-hidden max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem] lg:max-w-[20rem]">
              <img
                src="/imgs/rita.png"
                alt="Capa do Livro sobre Pets"
                className="w-full h-auto object-cover rounded-lg sm:rounded-xl"
                loading="lazy"
              />

              {/* Elementos flutuantes decorativos (reduzidos em mobile) */}
              <div className="hidden sm:block absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-5 sm:w-6 h-5 sm:h-6 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
              <div className="hidden sm:block absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-4 sm:w-5 h-4 sm:h-5 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
              <div className="hidden sm:block absolute top-1/3 -right-4 sm:-right-6 w-3 sm:w-4 h-3 sm:h-4 bg-brand-blue-soft rounded-full animate-bounce" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>

        {/* Seção de Apoio */}
        <div ref={supportRef} className="mt-10 sm:mt-12 md:mt-16 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#f4c5a9' }}>
            Apoio
          </h3>
          <div className="flex justify-center">
            <div className="support-logo w-28 sm:w-32 md:w-40 h-auto p-2 sm:p-3 bg-white rounded-lg shadow-md transition-all duration-300">
              <img
                src="/imgs/logoprinti.png"
                alt="Logo da Empresa de Apoio"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default AboutSection;