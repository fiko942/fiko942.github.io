import {useEffect, useState} from 'react'

// Images
import reactjs from '../../Static/Images/Skills/reactjs.png'
import javascript from '../../Static/Images/Skills/javascript.png'
import nodejs from '../../Static/Images/Skills/nodejs.png'
import electronjs from '../../Static/Images/Skills/electronjs.png'
import css from '../../Static/Images/Skills/css.png'
import sass from '../../Static/Images/Skills/sass.png'
import jquery from '../../Static/Images/Skills/jquery.png'
import mysql from '../../Static/Images/Skills/mysql.png'
import bootstrap from '../../Static/Images/Skills/bootstrap.png'
import chromechromium from '../../Static/Images/Skills/chrome-chromium.webp'
import codeigniter from '../../Static/Images/Skills/codeigniter.png'
import github from '../../Static/Images/Skills/github.png'
import html from '../../Static/Images/Skills/html.png'
import json from '../../Static/Images/Skills/json.png'
import php from '../../Static/Images/Skills/php.png'

export default function Skills() {

    return (
        <div className='skills row d-flex align-items-center justify-content-center'>
            {skills.map((skill, index) => (
                <Skill key={index} skill={skill} />
            ))}
        </div>

    )
}


function Skill(args) {
    const [overed, setOvered] = useState(false)
    const onMouseOver = () => setOvered(true)
    const onMouseOut = () => setOvered(false)

    return (
        <a className={`skill col col-md-1${overed ? ' overed' : ''}`} href={args.skill.url} target='_blank' onMouseOver={onMouseOver.bind(this)} onMouseOut={onMouseOut.bind(this)} >
            {overed && (
                <div className='detail'>
                    <div className="name" style={{color: args.skill.color}}>{args.skill.name}</div>
                    <div className="site">{args.skill.url.replace('https://', '')}</div>
                    <div className="arrow-down"></div>
                </div>
            )}
            <img loading='lazy' alt={args.skill.name} title={args.skill.name} src={args.skill.icon} width='40' className='skill-icon' />
        </a>
    )
}




const skills = [
    {
        name: 'React JS',
        icon: reactjs,
        url: 'https://reactjs.org',
        color: '#57BDD9'
    },
    {
        name: 'React Native',
        icon: reactjs,
        url: 'https://react-native.dev',
        color: '#57BDD9'
    },
    {
        name: 'JavaScript',
        icon: javascript,
        url: 'https://javascript.com',
        color: '#FCDC00'
    },
    {
        name: 'Node JS',
        icon: nodejs,
        url: 'https://nodejs.org',
        color: '#5F975A'
    },
    {
        name: 'CSS',
        icon: css,
        url: 'https://web.dev/learn/css',
        color: '#2448D5'
    },
    {
        name: 'Electron JS',
        icon: electronjs,
        url: 'https://electronjs.org',
        color: '#8BC6D6'
    },
    {
        name: 'SASS',
        icon: sass,
        url: 'https://sass-lang.com',
        color: '#CC6699'
    },
    {
        name: 'JQuery',
        icon: jquery,
        url: 'https://jquery.com',
        color: '#1169AE'
    },
    {
        name: 'MySQL DBMS',
        icon: mysql,
        url: 'https://mysql.com',
        color: '#2299E1'
    },
    {
        name: 'Bootstrap',
        icon: bootstrap,
        url: 'https://getbootstrap.com',
        color: '#732FF8'
    },
    {
        name: 'Automation using Chromium',
        icon: chromechromium,
        url: 'https://pptr.dev',
        color: '#01D8A2'
    },
    {
        name: 'Codeigniter',
        icon: codeigniter,
        url: 'https://codeigniter.com',
        color: '#DD4814'
    },
    {
        name: 'Github',
        icon: github,
        url: 'https://github.com',
        color: '#fff'
    },
    {
        name: 'HTML',
        icon: html,
        url: 'https://html.com',
        color: '#8B4595'
    },
    {
        name: 'Rest Full API',
        icon: json,
        url: 'https://restfulapi.net',
        color: '#6D81B3'
    },
    {
        name: 'PHP',
        icon: php,
        url: 'https://php.net',
        color: '#7A86B8'
    }
]