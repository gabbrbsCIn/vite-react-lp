import men from "../../assets/men.jpg"
export default function Hero() {
    return (
        <section className="bg-hero-pattern bg-cover bg-center h-[60vh] flex justify-center transition animate-fade-up animate-duration-[1000ms]">
            <div className="text-black text-center flex flex-wrap justify-center items-center px-6 md:px-12 lg:px-30 mt-8 w-full">
                <div className="flex flex-col space-y-6 w-full md:w-2/3 lg:w-1/3 px-4">
                    <h1 className="font-poppins text-2xl md:text-3xl lg:text-4xl text-start font-bold">
                        Transformando Desafios Industriais em{' '}
                        <span className="bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text">
                            Soluções de Alto Desempenho
                        </span>
                    </h1>
                    <p className="text-start font-poppins text-sm md:text-md">
                        Com expertise em manutenção e montagem industrial, entregamos qualidade, segurança e eficiência para potencializar seus resultados.
                    </p>
                    <button className="text-white font-poppins font-medium w-full md:w-32 h-10 bg-blue-900 transform hover:scale-110 transition-transform duration-200 ease-out rounded-lg mb-12">
                        Contact us
                    </button>
                </div>
                <img
                    src={men}
                    alt="Men working"
                    className="w-full md:w-[500px] lg:w-[700px] object-contain rounded-xl m-4"
                />
            </div>
        </section>
    )
}