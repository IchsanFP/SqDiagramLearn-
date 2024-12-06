import { Link } from "react-router-dom";
import Navbar from "../components/Header";

export default function HomePage(){
    return(
        <>
        <Navbar />
        <section className="pt-[180px] min-h-screen bg-primary">  
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center justify-center w-full text-center">
                    <div className="flex flex-col items-center px-4 lg:px-0 max-w-7xl">
                        <h1 className="font-bold mb-4 lg:mb-6 lg:mt-5 text-white text-[36px] md:text-[42px] lg:text-[48px] font-quantico">
                            sqDiagramLearn
                        </h1> 
                        <p className="mb-8 md:mb-10 font-medium leading-relaxed font-quantico text-[#B8C1EC] max-w-4xl text-base md:text-lg lg:text-xl">
                            sqDiagramLearn merupakan sebuah Website yang dapat membantu Anda dalam memahami Sequence Diagram
                        </p>
                        
                        <Link to="/materi/sequence-diagram" className="flex px-6 py-3 text-sm md:text-base font-medium transition ease-in-out rounded-lg mt-16 md:mt-24 font-poppins text-primary bg-btn-home hover:shadow-lg hover:shadow-[#f5d6db] duration-300 max-w-fit hover:text-primary hover:bg-[#d6a8b0]">
                            Mulai Belajar
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}