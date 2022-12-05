import {useEffect, useState} from 'react'
import  './Navbar.css'
import 'boxicons'
import {Link} from 'react-router-dom'

export default function Navbar(args) {

    return args.open && (
        <div className="navbar">
            <div className="nav-header">
                <box-icon size="32px" color='#fff' name='x' class='nav-dismiss' onClick={args.onClose.bind(this)} />
            </div>
            <div className="items">{args.links.map((link, i) => {
                    return (
                        <Link className={`item ${link.active ? 'active' : ''}`} to={link.url} key={i}>
                            {link.icon}
                            <div className="name">{link.name}</div>
                        </Link>
                    )
                }
            )}</div>
        </div>
    )
}