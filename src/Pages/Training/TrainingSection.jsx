// export default function TrainingSection() {
import { Outlet, } from "react-router-dom";
import tnw1 from '../../assets/tnw1.png'
import tnw2 from '../../assets/tnw2.png'
import tnw3 from '../../assets/tnw3.png'
import tnw4 from '../../assets/tnw4.png'
import WhatsappButton from '../../components/WhatsappButton'
import Navbar from '../../Layout/Navbar'
import { Link } from "react-router-dom";

const TrainingSection = () => {
    return (
        <>
        <Navbar />
        <Card />
        <WhatsappButton />
        </>
    )
    }


    const Card = () => {
        const trainings = [
            { title: "Functional Training", image: tnw1, path: "/FunctionalTraining" },
            { title: "Developer Training", image: tnw2, path: "/DeveloperTraining" },
            { title: "Master Class Training", image: tnw3, path: "/MasterclassTraining" },
            { title: "Workshop", image: tnw4, path: "/Workshop" }
        ];
    
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-extrabold text-center font-inter mb-8">Training and Workshop</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainings.map((training, index) => (
                        <div key={index} className="border-2 border-gray-400 p-6 rounded-xl flex flex-col items-center w-60 h-64">
                            <h2 className="font-bold font-inter text-2xl text-center">{training.title}</h2>
                            <img src={training.image} alt={training.title} className=" w-16 h-16 mb-4" />
                            <Link 
                                to={training.path}  // ✅ Gunakan Link daripada useNavigate()
                                className="mt-auto bg-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-gray-300 text-center block"
                            >
                                More About Us
                            </Link>
                        </div>
                    ))}
                </div>
                <Outlet />
            </div>
        );
    };
    

  
  export default TrainingSection;  
