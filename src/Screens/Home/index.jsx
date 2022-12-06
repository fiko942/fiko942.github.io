import {useEffect, useState} from 'react'
import './Home.css'
import 'boxicons'
import {Link} from 'react-router-dom'
import Skills from './Skills'

export default function Home(args) {

    
    return (
        <div className="home">
            <div className="left">
                <div className="regard">Hi there ✋,</div>
                <div className="name">im <b>Wiji Fiko Teren</b> 🧑‍💻,</div>
                <div className="desc">I currently working at <b>Kampung Songo</b> as a <b>Programmer</b>, and i make <b>Tobelsoft</b> which focused on computer software. I'm tech fan. I am always open to collaborating on innovate/distruptive project and ideas. Find out more about me & feel free to connect with me.</div>
                <div className="actions">
                    <Link to="/download/resume">Download Resume</Link>    
                    <Link to="/download/cv">Download CV</Link>
                </div>
                <Skills />
            </div>
            <div className="right">
                <div className="card">
                    <img className='image' src={args.logo} alt='Wiji Fiko Teren' title='Wiji Fiko Teren' />
                    <table className="information">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Wiji Fiko Teren</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>18 Years old</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>Male</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr className='separator-information' />
                    <div className="socials">{socials.map((social, i) => (
                        <a className='social' href={social.url} target="_blank" key={i} alt={social.name} title={social.name}>
                            {social.icon}
                        </a>
                    ))}</div>
                </div>
            </div>
        </div>
    )
}


const socials = [
    {
        name: 'Github',
        url: 'https://github.com/fiko942',
        icon: <box-icon type='logo' name='github' color='#fff' size='31px' class='icon'></box-icon>
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/wiji-fiko-teren-4a7a00219/',
        icon: <box-icon type='logo' name='linkedin-square' color='#0077B5' size='31px' class='icon'></box-icon>
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/fiko.tobel',
        icon: <box-icon type='logo' name='facebook-circle' color='#1977F3' size='31px' class='icon'></box-icon>
    },
    {
        name: 'Gmail',
        url: 'mailto:tobellord@gmail.com',
        icon: <box-icon type='logo' name='gmail' color='#FBBC04' size='31px' class='icon'></box-icon>
    },
    {
        name: 'WhatsApp',
        url: 'https://wa.me/6285935099343',
        icon: <box-icon type='logo' name='whatsapp' color='#4AAA4D' size='31px' class='icon'></box-icon>
    }
]