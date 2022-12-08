import './Portfolio.scss'
import Images from './Images'
import {useEffect, useState} from 'react'
import Modal from './Modal'

const images = Images()

export default function Index() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})

    const handleOpenModal = item => {
        setSelectedItem(item)
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setSelectedItem({})
        setModalOpen(false)
    }

    return (
        <>
            <div className="portfolio">
                <Modal open={modalOpen} item={selectedItem} onClose={handleCloseModal.bind(this)} />
                <div className="items row d-flex align-items-center justify-content-center">
                    {items.map((item, index) => <Item onClick={handleOpenModal.bind(this, item)} item={item} key={index} />)}
                </div>
            </div>
        </>
    )
}

function Item(args) {
    return (
        <div className="item col-lg-3 col-md-4" onClick={args.onClick.bind(this)}>
            <img src={args.item.image} loading="lazy" className='image' alt={`Wiji Fiko Teren - ${args.item.project}`} />
            <div className="detail">
                <div className="project-name">{args.item.project}</div>
                <div className='desc'>{args.item.description}</div>
            </div>
        </div>
    )
}

const items = [
    {
        project: 'Trucatt',
        image: images.trucatt_csharp,
        description: 'Trucatt is a tools for cheating online games, we focused on PointBlank, this service is free without credit card',
        software_type: 'Desktop Application',
        tech_stacks: [
            'JSON API', 'MySQL', 'C#', 'Guna UI2'
        ],
        site: 'https://trucatt.tobelsoft.my.id'
    },
    {
        project: 'Trucatt (Site)',
        image: images.trucatt_site,
        software_type: 'Website',
        tech_stacks: [
            'MySQL',
            'PHP Codeigniter',
            'JQuery',
            'JSON API',
            'Bootstrap',
            'SMTP'
        ],
        description: 'Trucatt is a tools for cheating online games, we focused on PointBlank, this service is free without credit card',
        site: 'https://trucatt.tobelsoft.my.id'
    },
    {
        project: 'Trucatt (Electron)',
        image: images.trucatt_electron,
        description: 'Trucatt is a tools for cheating online games, we focused on PointBlank, this service is free without credit card',
        software_type: 'Desktop Application',
        tech_stacks: [
            'Electron JS', 'JSON API', 'MySQL', 'Node JS', 'Google V8 Javascript Engine', 'JQuery'
        ],
        site: 'https://trucatt.tobelsoft.my.id'
    },
    {
        project: 'Daily life of a student',
        image: images.daily_life_of_a_student,
        software_type: 'Website',
        tech_stacks: [
            'PHP (Codeigniter)',
            'MySQL',
            'Bootstrap',
            'JQuery',
        ],
        description: 'Simple software for managing your life as a student. build using php codeigniter and mysql. This project is currently unavilable for public, because our server is no enouch storage. but you can clone this project in our github repository: "fiko942"'
    },
    {
        project: 'Genic (site)',
        image: images.genic_site,
        software_type: 'Website',
        tech_stacks: [
            'PHP (Codeigniter)',
            'MySQL',
            'JSON API',
            'Bootstrap',
            'JQuery',
        ],
        description: 'Monitor your computer, like performance, network state, battery, etc. and this can control your computer, like capture screen, speak, keyboard press, and capture image from camera. but this project is no longer accessible in github and public site.'
    },
    {
        project: 'Genic',
        image: images.genic,
        software_type: 'Desktop Application',
        tech_stacks: [
            'JSON API',
            'MySQL',
            'C#'
        ],
        description: 'Monitor your computer, like performance, network state, battery, etc. and this can control your computer, like capture screen, speak, keyboard press, and capture image from camera. but this project is no longer accessible in github and public site.'
    },
    {
        project: 'Code Minifier',
        image: images.code_minifier,
        software_type: 'Website',
        tech_stacks: [
            'Jquery',
            'Native Javascript',
            'Bootstrap',
            'PHP',
        ],
        description: 'For minify your code, this for reduce the resource size'
    },
    {
        project: 'GGG Tanaman Buah',
        image: images.gggtanamanbuah,
        software_type: 'Website',
        tech_stacks: [
            'JSON API',
            'Codeigniter',
            'SMTP'
            ],
        description: 'Simple marketplace focused on vegetables, track shipper price, additional price, and another.',
        site: 'https://gggtanamanbuah.com'
    },
    {
        project: 'Mividy (site)',
        image: images.mividy_site,
        software_type: 'Website',
        tech_stacks: [
            'Bootstrap',
            'JQuery',
            'JSON API',
            'SMTP',
            'MySQL',
            'Codeigniter',
            'AOS JS'
        ],
        description: 'This is a project for KIDS competition, repository: https://github.com/fiko942/mividy',
        site: 'https://mividy.tobelsoft.my.id'
    },
    {
        project: 'Mividy',
        image: images.mividy,
        software_type: 'Desktop Application',
        tech_stacks: [
            'Electron JS',
            'Bootstrap',
            'JSON API',
            'Node JS',
        ],
        site: 'https://mividy.tobelsoft.my.id',
        description: 'This is a project for KIDS competition, repository: https://github.com/fiko942/mividy',
    }
]