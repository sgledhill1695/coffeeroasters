export default function Navigation(){

    const navigation = [
        'home',
        'about us',
        'create your plan'
    ];

    return(
        <nav className="hidden sm:flex">
            <ul className="flex gap-[33px]">
                {navigation.map((nav, index) => (
                    <li key={index} className="nav-item">
                        {nav}
                    </li>
                ))}
            </ul>
        </nav>
    )
}