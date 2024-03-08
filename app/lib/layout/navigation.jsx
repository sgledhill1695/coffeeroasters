export default function Navigation({topbarNav, footerNav}){

    const navigation = [
        {
            title: 'home',
            href: '/',
        },
        {
            title: 'about us',
            href: '/about-us'
        },
        {
            title: 'create your plan',
            href: '/create-your-plan'
        },
    ];

    return(
        <>
            {topbarNav && (
                <nav className="hidden sm:flex">
                    <ul className="flex gap-[33px]">
                        {navigation.map((nav, index) => (
                            <li key={index} className="nav-item hover:cursor-pointer">
                                <a href={nav.href}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {footerNav && (
                <nav className="flex mt-[50px] lg:mt-[0px]">
                    <ul className="flex flex-col sm:flex-row text-center gap-[28px] sm:gap-[32px]">
                        {navigation.map((nav, index) => (
                            <li key={index} className="nav-item hover:text-[white] hover:cursor-pointer">
                                <a href={nav.href}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

        </>
    )
}