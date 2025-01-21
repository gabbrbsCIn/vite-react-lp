import img1 from '../../assets/fabricação.png';
import img2 from '../../assets/montagem.png';
import img3 from '../../assets/caldeiraria.jpg';
import { useState, useEffect, useRef } from 'react';

export default function Feature() {
    const [currentImage, setCurrentImage] = useState(img1);
    const [animate, setAnimate] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    const changeImage = (img) => {
        setCurrentImage(img);
        setAnimate("animate-fade animate-ease-out");
        setTimeout(() => setAnimate(false), 500);
    }

    return (
        <section ref={sectionRef}
            className={`flex flex-col justify-center items-center mt-8 py-12 ${isVisible ? "animate-fade-down" : "opacity-0"
                }`}>

            <h1 className="font-poppins bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text font-medium text-center flex flex-wrap  px-6 md:px-12 lg:px-30 text-2xl md:text-3xl lg:text-4xl">
                Provendo as Melhores Soluções Industriais Sob Medida
            </h1>
            <p className="font-poppins text-gray-500 text-center mt-4 px-4 md:px-12 lg:px-24">
                Qualidade, eficiência e segurança para impulsionar sua indústria.
            </p>

            <div className="flex flex-col lg:flex-row justify-center mt-10 space-y-10 lg:space-y-0 lg:space-x-10 items-center w-full px-4 md:px-12 lg:px-24">

                <div className="flex flex-col space-y-6 lg:space-y-10 w-full lg:w-1/2">
                    <div
                        className={`flex flex-col items-center transition duration-300 cursor-pointer ${currentImage === img1 ? "bg-blue-900 text-white" : "bg-white text-blue-900"} justify-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out`}
                        onClick={() => changeImage(img1)}
                    >
                        <h1 className={`font-poppins font-medium text-lg md:text-xl mt-4`}>
                            Manutenção Mecânica e Caldeiraria
                        </h1>
                        <p className={`font-poppins ${currentImage === img1 ? "text-gray-300" : "text-blue-800"} text-sm md:text-base text-center mt-4`}>
                            Realizamos soldagens TIG, MIG/MAG e eletrodo revestido, manutenção de caldeiras, bombas centrífugas e fabricação de tubulações em inox e aço carbono. Também oferecemos serviços de usinagem, oxicorte e calandragem, garantindo precisão e alta performance.
                        </p>
                    </div>

                    <div
                        className={`flex flex-col items-center transition duration-300 cursor-pointer ${currentImage === img2 ? "bg-blue-900 text-white" : "bg-white text-blue-900"} justify-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out`}
                        onClick={() => changeImage(img2)}
                    >
                        <h1 className={`font-poppins font-medium text-lg md:text-xl mt-4`}>
                            Fabricação e Montagem de Estruturas
                        </h1>
                        <p className={`font-poppins ${currentImage === img2 ? "text-gray-300" : "text-blue-800"} text-sm md:text-base text-center mt-4`}>
                            Desenvolvemos e montamos plataformas, escadas, galpões metálicos, moegas, pipe racks e transportadores de correia. Nossas soluções são robustas e personalizadas para atender às necessidades de cada cliente.
                        </p>
                    </div>

                    <div
                        className={`flex flex-col items-center transition duration-300 cursor-pointer ${currentImage === img3 ? "bg-blue-900 text-white" : "bg-white text-blue-900"} justify-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out`}
                        onClick={() => changeImage(img3)}
                    >
                        <h1 className={`font-poppins font-medium text-lg md:text-xl mt-4`}>
                            Instalações Industriais Personalizadas
                        </h1>
                        <p className={`font-poppins ${currentImage === img3 ? "text-gray-300" : "text-blue-800"} text-sm md:text-base text-center mt-4`}>
                            Executamos a montagem de filtros prensa, bombas de vácuo e equipamentos diversos, além de realizar mudanças de linhas de produção. Garantimos agilidade e eficiência em todas as etapas.
                        </p>
                    </div>
                </div>
                <img
                    src={currentImage}
                    alt="Imagem industrial"
                    className={`${animate} lg:w-[40%] max-h-[400px] object-contain rounded-lg shadow-lg`}
                />
            </div>
        </section>
    );
}
