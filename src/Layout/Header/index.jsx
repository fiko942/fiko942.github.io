import './Header.scss'
import 'boxicons'
import {useEffect, useState} from 'react'
import Navbar from './Navbar'
import {useLocation} from 'react-router-dom'

export default function Header(args) {
    const [openMenu, setOpenMenu] = useState(false)
    const handleToggleMenu = () => setOpenMenu(!openMenu)
    const handleMenuClose = () => setOpenMenu(false)
    const location = useLocation()
    const setActive = i => {
        try {
            document.querySelectorAll('.navbar .items .item').forEach(el => el.classList.remove('active'))
            document.querySelector(`.navbar .items .item:nth-child(${i+1})`).classList.add('active')
        } catch(err) {}
    }
    useEffect(() => {
        const pn = location.pathname 
        const l = links
        for(let x of l) {
            let i = l.indexOf(x)
            l[i].active = false
        }
        let x = l.findIndex(g => g.url == pn)
        if(x >= 0) {
            l[x].active = true
            document.title = l[x].name + ' - Wiji Fiko Teren'
            setActive(x)
        } else {
            document.title = 'Wiji Fiko Teren'
        }
        setOpenMenu(false)
        setLinks(l)
        
    }, [location])
    const [links, setLinks] = useState([
        {
            name: 'Home',
            url: '/',
            icon: <box-icon name='home' color='#fff' class='icon' />,
            active: true
        },{
            name: 'About',
            url: '/about',
            icon: <box-icon name='user' color='#fff' class='icon' />,
            active: false
        }
    ])

    return (
        <>
        <Navbar links={links} open={openMenu} onClose={handleMenuClose.bind(this)} />
        <div className="header">
            <div className="left">
                <img src={args.logo} alt="Wiji Fiko Teren" title="Wiji Fiko Teren" />
                <h1 className='name'>Wiji Fiko Teren</h1>
            </div>
            <div className="right">
                <box-icon style={{cursor: 'pointer'}} className='nav-toggle' color="#8E8E8E" onClick={handleToggleMenu.bind(this)} name='menu'></box-icon>
            </div>
        </div>
        </>
    )
}
