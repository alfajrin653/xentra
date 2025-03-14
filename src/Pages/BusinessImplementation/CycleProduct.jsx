import packages from '../../assets/CycleProduct/package.png'
import Process from '../../assets/CycleProduct/Process.png'
import Based from '../../assets/CycleProduct/Based.png'
import Button from '../../components/Button'


const CycleProduct = () => {
    const product = [
    {
        title: 'Basic Package',
        description: 'These packages effectively meet the core objectives of utilizing an ERP system, ensuring that all essential functions are streamlined and integrated',
        image: packages,

    },
    {
        title: 'Business Process',
        description: 'At times, simplifying certain business processes may not be feasible. In such cases, Xentra is here to help meet your unique business requirements, even while utilizing Odoo’s default business processes.',
        image: Process,

    },
    {
        title: 'Project Based',
        description: 'Our system is designed to be tailored to meet your specific needs. Our team of experienced consultants and developers is committed to assisting you in identifying and implementing the most effective ERP solution for your business.',
        image: Based,

    },
]
    return (
        <div className="flex scale-75 md:scale-100 flex-col justify-center items-center">
            <h1 className="text-2xl font-inter font-bold text-center py-[50px]">CycleProduct</h1>
            <div className="flex flex-col justify-center xl:flex-row gap-[15px] pb-[61px]">
                {product.map((product,index) => (                
                <div key={index} className="flex flex-col justify-evenly items-center border-2 border-primary bg-primary text-white w-[400px] h-[500px] rounded-3xl  ">
                    <h1 className='text-2xl font-bold font-inter align-center'> {product.title}</h1>
                    <p className='max-w-[306px] font-[12px] text-center text-semibold font-inter'>{product.description}</p>
                    <img src={product.image} alt="contoh" className='max-w-[350px] h-[250px]' />
                </div>
                ))}
            </div>
            <div className='pt-[20px] pb-[100px]'>
                <a href="/Contact">
            <Button className='border-amber-500 w-[316px] h-[56px] rounded-[24px] font-bold text-3xl'> Contack </Button></a>
            </div>
            </div>

    
    );  
};

export default CycleProduct