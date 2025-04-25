import { Link, useNavigate } from "react-router-dom"
import { FiSearch } from "react-icons/fi";

const nav_bar = () => {

    const navigate = useNavigate()

    return (
        <nav className="bg-white w-[100vw]  px-6 shadow-md">
            <ul className="flex justify-between items-center">
                <li className="text-xl font-bold my-4 select-none">Flex Work</li>
                <li className="hidden md:flex gap-2 my-2.5 border-2 rounded-[14px] border-[#b8b8b8] w-[20em] items-center py-2 px-3">
                    <FiSearch size={22}/>
                    <input type="text" placeholder="Search" className="w-full outline-none"/>
                </li>
                <li className="flex gap-6 my-3">
                    <button className="cursor-pointer" onClick={() => navigate('/login')}>Login</button>
                    <Link to={'/signup'} className="rounded-[0.75em] bg-[#169976] text-white pt-1.5 pb-2 px-3">Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default nav_bar