import {useEffect, useState} from 'react'

// Images
import reactjs from '../../Static/Images/Skills/reactjs.png'
import javascript from '../../Static/Images/Skills/javascript.png'
import nodejs from '../../Static/Images/Skills/nodejs.png'
import electronjs from '../../Static/Images/Skills/electronjs.png'
import css from '../../Static/Images/Skills/css.png'

export default function Skills() {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        return () => {
            setSkills(getSkills)
        }
    }, [])


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
    return (
        <a className='skill col-1 col-md-1' href={args.skill.url} target='_blank'>
            <img loading='lazy' alt={args.skill.name} title={args.skill.name} src={args.skill.icon} width='40' height='40' className='skill-icon' />
        </a>
    )
}




const getSkills = () => {
    return [
        {
            name: 'React JS',
            icon: reactjs,
            url: 'https://reactjs.org',
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
        }
    ]
}