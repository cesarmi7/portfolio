import Link from "next/link";

const NavLink = ({ href, title }) => {
    const handleClick = (e) => {
        // Check if it's a hash link
        if (href.startsWith("#")) {
            e.preventDefault(); // Prevent default anchor behavior
            const element = document.querySelector(href); // Find the element
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
            }
        }
    };

    return (
        <Link href={href} passHref>
            <a onClick={handleClick} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                {title}
            </a>
        </Link>
    );
};

export default NavLink;
