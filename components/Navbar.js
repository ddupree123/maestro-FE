const Navbar = () => {
    return(
        <nav>
            <ul className="flex justify-center gap-8 pt-[37px]">
                <li className="text-white font-industrymedium text-[25px]"><a href="/process">Process</a></li>
                <li className="text-white font-industrymedium text-[25px]"><a href="/business">Busn Partnership</a></li>
                <li className="text-white font-industrymedium text-[25px]"><a href="/nil">NIL 101</a></li>
                <li className="text-white font-industrymedium text-[25px]"><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;