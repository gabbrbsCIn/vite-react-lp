import img1 from '../../assets/fabricação.png';
import img2 from '../../assets/montagem.png';
import img3 from '../../assets/caldeiraria.jpg';

export default function Feature() {
    return (
        <section className="flex justify-center flex-col flex-wrap mt-32 py-12">
            <h1 className="font-poppins text-blue-900 font-medium flex justify-center text-4xl">Provendo as Melhores Soluções</h1>
            <div className='flex flex-row justify-between px-24 py-12 '>
                <div className='flex justify-center items-center'>
                    <img src={img1} alt="fabricação" className='lg:w-[350px] object-contain rounded-xl m-4 drop-shadow-2xl' />
                    <h2 className='text-blue-900 text-2xl font-medium font-poppins'>Fabricação e Montagem de Estruturas</h2>
                </div>
                <p className='font-poppins text-blue-900 w-1/3 flex items-center'>Desenvolvemos e montamos plataformas, escadas, galpões metálicos, moegas, pipe racks e transportadores de correia. Nossas soluções são robustas e personalizadas para atender às necessidades de cada cliente.</p>
            </div>
            <hr className="my-8 border-t-2 border-gray-300 w-5/6" />
            <div className='flex flex-row justify-between px-24 py-12 '>
                <div className='flex justify-center items-center'>
                    <img src={img2} alt="fabricação" className='lg:w-[350px] object-contain rounded-xl m-4 drop-shadow-2xl' />
                    <h2 className='text-blue-900 text-2xl font-poppins'>Fabricação e Montagem de Estruturas</h2>
                </div>
                <p className='font-poppins text-blue-900 w-1/3 flex items-center'>Desenvolvemos e montamos plataformas, escadas, galpões metálicos, moegas, pipe racks e transportadores de correia. Nossas soluções são robustas e personalizadas para atender às necessidades de cada cliente.</p>
            </div>
            <hr className="my-8 border-t-2 border-gray-300 w-full" />
            <div className='flex flex-row justify-between px-24 py-12 '>
                <div className='flex justify-center items-center'>
                    <img src={img3} alt="fabricação" className='lg:w-[350px] object-contain rounded-xl m-4 drop-shadow-2xl' />
                    <h2 className='text-blue-900 text-2xl font-poppins'>Fabricação e Montagem de Estruturas</h2>
                </div>
                <p className='font-poppins text-blue-900 w-1/3 flex items-center'>Desenvolvemos e montamos plataformas, escadas, galpões metálicos, moegas, pipe racks e transportadores de correia. Nossas soluções são robustas e personalizadas para atender às necessidades de cada cliente.</p>
            </div>
        </section>
    )
}