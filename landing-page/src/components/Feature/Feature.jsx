import img1 from '../../assets/fabricação.png';
import img2 from '../../assets/montagem.png';
import img3 from '../../assets/caldeiraria.jpg';

export default function Feature() {
    return (
        <section className="flex justify-center bg-gray-100  flex-col flex-wrap mt-64 py-12 animate-fade-down">
            <h1 className="font-poppins text-blue-900 font-medium flex justify-center text-4xl">Provendo as Melhores Soluções Industriais Sob Medida</h1>
            <p className="font-poppins text-gray-500 text-center mt-4">Qualidade, eficiência e segurança para impulsionar sua indústria.</p>
            <div className='flex justify-center mt-10 space-x-15 items-center'>
                <div className='flex flex-col w-1/2 space-y-10 px-24'>
                    <div className='flex flex-col items-center justify-center p-6 bg-blue-900 rounded-xl shadow-lg'>
                        <h1 className="font- poppins text-white font-medium text-xl mt-4">Manutenção Mecânica e Caldeiraria</h1>
                        <p className="font-poppins text-sm text-gray-500 text-center mt-4">Realizamos soldagens TIG, MIG/MAG e eletrodo revestido, manutenção de caldeiras, bombas centrífugas e fabricação de tubulações em inox e aço carbono. Também oferecemos serviços de usinagem, oxicorte e calandragem, garantindo precisão e alta performance.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center p-6 bg-blue-900 rounded-lg shadow-lg'>
                        <h1 className="font-poppins text-white font-medium text-xl mt-4">Fabricação e Montagem de Estruturas</h1>
                        <p className="font-poppins text-sm text-gray-500 text-center mt-4">Desenvolvemos e montamos plataformas, escadas, galpões metálicos, moegas, pipe racks e transportadores de correia. Nossas soluções são robustas e personalizadas para atender às necessidades de cada cliente.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center p-6 bg-blue-900 rounded-lg shadow-lg'>
                        <h1 className="font-poppins text-white font-medium text-xl mt-4">Instalações Industriais Personalizadas</h1>
                        <p className="font-poppins text-sm text-gray-500 text-center mt-4">Executamos a montagem de filtros prensa, bombas de vácuo e equipamentos diversos, além de realizar mudanças de linhas de produção. Garantimos agilidade e eficiência em todas as etapas.</p>
                    </div>
                </div>
                <img src={img1} alt="imagem industria" className='w-[50%] pr-24 ' />
            </div>
        </section>
    )
}