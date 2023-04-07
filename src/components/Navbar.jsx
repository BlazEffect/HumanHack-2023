import lamp from '/public/img/lamp.png'
import stars from '/public/img/sparkle.png'
import aIcon from '/public/img/Group 68.png'
import mushrooms from '/public/img/mushroom-filled.png'
export default function Navbar() {
    
    return(
        <div>
            <section className="max-w-[250px] xs:block hidden w-full min-h-full bg-[url('/public/img/sidebar.png')]">
                <ul className="mt-16 mx-4">
                    <li className="flex">
                        <div className="bg-[#58AA2C] p-2 rounded-[10px]">
                            <img src={lamp} className="w-[32px] h-[32px] object-contain" alt="" />
                        </div>
                        <div className='flex items-center ml-3'>
                            <span className='text-center font-bold text-[18px] text-[#694A04]'>
                                Математика
                            </span>
                        </div>
                    </li>
                    <li className="flex mt-8">
                        <div className="bg-[#58AA2C] p-2 rounded-[10px]">
                            <img src={stars} className="w-[32px] h-[32px] object-contain" alt="" />
                        </div>
                        <div className='flex items-center ml-3'>
                            <span className='text-center font-bold text-[18px] text-[#694A04]'>
                            Правописание
                            </span>
                        </div>
                    </li>
                    <li className="flex mt-8">
                        <div className="bg-[#58AA2C] p-2 rounded-[10px]">
                            <img src={mushrooms} className="w-[32px] h-[32px] object-contain" alt="" />
                        </div>
                        <div className='flex items-center ml-3'>
                            <span className='text-center font-bold text-[18px] text-[#694A04]'>
                                Рисование
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
            <section className='px-[15px] xs:hidden min-w-[100vw] bg-[#70B839] opacity-80'>
                asd
            </section>
        </div>
    )
}