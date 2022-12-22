import ActiveLink from "./ActiveLink";
import styles from "./navbar.module.css"

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export default function Navbar() {
    return(
        <nav className={styles['menu-container']}> 
            {menuItems.map(element => {
                return(
                    <ActiveLink key={element.text} name={element.text.toLowerCase()}/>
                )
            })}
        </nav>
    )
}