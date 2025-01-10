import men from "../../assets/men.jpg"
export default function Hero() {
    return (
        <section className="bg-hero-pattern bg-cover bg-center h-[60vh] flex justify-center transition animate-fade-up duration-1000 ">
            <div className="text-black text-center flex flex-wrap flex-row justify-center items-center space-x-12 px-30 mt-8">
                <div className="flex flex-col flex-wrap space-y-6 w-1/3">
                    <h1 className="font-poppins text-4xl text-start font-bold ">Transformando Desafios Industriais em Soluções de Alto Desempenho</h1>
                    <p className="text-start font-poppins text-md">Com expertise em manutenção e montagem industrial, entregamos qualidade, segurança e eficiência para potencializar seus resultados.</p>
                    <button className="text-white font-poppins font-medium w-32 h-8 bg-blue-900 transform hover:scale-110 transition-transform duration-200 ease-out rounded-lg mb-12">Contact us</button>
                </div>
                <img src={men} alt="Men working" className="w-[460px] object-contain rounded-xl m-8" />
            </div>
        </section>
    )
}