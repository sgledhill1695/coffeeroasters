export default function MobileNav(){

    const navigation = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'About us',
            href: '/about-us'
        },
        {
            title: 'Create your plan',
            href: '/create-your-plan'
        },
    ];


    return(
        <nav id="mobileNav" className="mt-[50px] mobile-nav-closed">
            <ul className="flex flex-col items-center gap-[30px]">
                {navigation.map((nav, index) => (
                    <li key={index} className="hover:cursor-pointer">
                        <a href={nav.href} className="fraunces-bold text-[24px] text-[#333D4B] hover:cursor-pointer hover:text-[#83888F]">
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}