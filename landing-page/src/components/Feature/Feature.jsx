import img1 from '../../assets/fabricação.png';
import img2 from '../../assets/montagem.png';
import img3 from '../../assets/caldeiraria.jpg';
import { useState } from 'react';

export default function Feature() {
    const [currentImage, setCurrentImage] = useState(img1);

    return (
        <section className="flex flex-col justify-center items-center bg-gray-100 mt-64 py-12 animate-fade-down">

            <h1 className="font-poppins text-blue-900 font-medium text-center text-2xl md:text-3xl lg:text-4xl">
                Provendo as Melhores Soluções Industriais Sob Medida
            </h1>
            <p className="font-poppins text-gray-500 text-center mt-4 px-4 md:px-12 lg:px-24">
                Qualidade, eficiência e segurança para impulsionar sua indústria.
            </p>

            <div className="flex flex-col lg:flex-row justify-center mt-10 space-y-10 lg:space-y-0 lg:space-x-10 items-center w-full px-4 md:px-12 lg:px-24">

                <div className="flex flex-col space-y-6 lg:space-y-10 w-full lg:w-1/2">
                    <div
                        className="flex flex-col items-center cursor-pointer justify-center p-6 bg-blue-900 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out"
                        onClick={() => setCurrentImage(img1)}
                    >
                        <h1 className="font-poppins text-white font-medium text-lg md:text-xl mt-4">
                            Manutenção Mecânica e Caldeiraria
                        </h1>
                        <p className="font-poppins text-sm md:text-base text-gray-300 text-center mt-4">
                            Realizamos soldagens TIG, MIG/MAG e eletrodo revestido, manutenção de caldeiras, bombas centrífugas e fabricação de tubulações em inox e aço carbono. Também oferecemos serviços de usinagem, oxicorte e calandragem, garantindo precisão e alta performance.
                        </p>
                    </div>

                    <div
                        className="flex flex-col items-center cursor-pointer justify-center p-6 bg-blue-900 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out"
                        onClick={() => setCurrentImage(img2)}
                    >
                        <h1 className="font-poppins text-white font-medium text-lg md:text-xl mt-4">
                            Fabricação e Montagem de Estruturas
                        </h1>
                        <p className="font-poppins text-sm md:text-base text-gray-300 text-center mt-4">
                            Desenvolvemos e montamos plataformas, escadas, galpões metálicos, moegas, pipe racks e transportadores de correia. Nossas soluções são robustas e personalizadas para atender às necessidades de cada cliente.
                        </p>
                    </div>

                    <div
                        className="flex flex-col items-center cursor-pointer justify-center p-6 bg-blue-900 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200 ease-out"
                        onClick={() => setCurrentImage(img3)}
                    >
                        <h1 className="font-poppins text-white font-medium text-lg md:text-xl mt-4">
                            Instalações Industriais Personalizadas
                        </h1>
                        <p className="font-poppins text-sm md:text-base text-gray-300 text-center mt-4">
                            Executamos a montagem de filtros prensa, bombas de vácuo e equipamentos diversos, além de realizar mudanças de linhas de produção. Garantimos agilidade e eficiência em todas as etapas.
                        </p>
                    </div>
                </div>
                <img
                    src={currentImage}
                    alt="Imagem industrial"
                    className="w-full lg:w-[50%] max-h-[400px] object-contain rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}
