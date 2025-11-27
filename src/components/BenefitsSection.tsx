import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, BookOpen, Award, PenTool, Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Heart,
    title: "Compartilhar conhecimento",
    description: "Dividir experiências, vivências clínicas e aprendizados que podem inspirar outros profissionais."
  },
  {
    icon: BookOpen,
    title: "Ter reconhecimento profissional",
    description: "Assinar um livro oficial com ISBN e distribuição nacional, fortalecendo sua autoridade na área."
  },
  
  {
    icon: PenTool,
    title: "Cresça Profissional e Pessoalmente",
    description: "Refletir sobre sua trajetória e ampliar sua visão como fonoaudiólogo(a)."
  },
  {
    icon: Lightbulb,
    title: "Gerar impacto positivo",
    description: "Contribuir com a Fonoaudiologia, apoiando colegas, estudantes e pacientes através da sua história."
  }
];

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards.length) return;

    // Animate cards on scroll
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.08,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-12 md:py-16 bg-muted/30">
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 md:mb-6 text-[#0081cc]">
            Por que se tornar Coautor(a)?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#7d7d83] max-w-prose mx-auto leading-relaxed">
            Uma oportunidade única de transformar suas experiências na Fonoaudiologia em uma obra que impacta vidas e fortalece a profissão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group text-center p-4 sm:p-6 md:p-8 bg-[#fffff]/30 rounded-lg sm:rounded-xl sm:hover-lift sm:hover:bg-[#d1756d]/50 transition-all duration-300 border border-[#ba455c]/50 max-w-sm mx-auto"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#f4b7b2] via-[#d9cae3] to-[#ffc1b5] rounded-full flex items-center justify-center sm:group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                
                <h3 className="font-heading font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 text-[#91c8df] sm:group-hover:text-[#d1756d] transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base text-[#7d7d83] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
