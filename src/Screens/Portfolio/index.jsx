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
        project: 'Trucatt - Tobelsoft',
        image: images.test,
        description: 'Trucatt is a tools for cheating online games, we focused on PointBlank, this service is free without credit card',
        software_type: 'Site',
        tech_stacks: [
            'Codeigniter', 'Bootstrap', 'MySQL', 'JQuery'
        ],
        site: 'https://google.com'
    },
    {
        project: 'Trucatt - Tobelsoft',
        image: images.test,
        description: 'Trucatt is a tools for cheating online games, we focused on PointBlank, this service is free without credit card',
        software_type: 'Site',
        tech_stacks: [
            'Codeigniter', 'Bootstrap', 'MySQL', 'JQuery'
        ]
    },{
        project: 'Trucatt - Tobelsoft',
        image: images.test,
        description: 'Trucatt is a tools for cheating online games, we focused on PointBlank, this service is free without credit card',
        software_type: 'Site',
        tech_stacks: [
            'Codeigniter', 'Bootstrap', 'MySQL', 'JQuery'
        ]
    },{
        project: 'Trucatt - Tobelsoft',
        image: images.test,
        description: 'Trucatt is a tools for cheating online games, we focused on PointBlank, this service is free without credit card',
        software_type: 'Site',
        tech_stacks: [
            'Codeigniter', 'Bootstrap', 'MySQL', 'JQuery'
        ]
    },{
        project: 'Trucatt - Tobelsoft',
        image: images.test,
        description: 'Trucatt is a tools for cheating online games, we focused on PointBlank, this service is free without credit card',
        software_type: 'Site',
        tech_stacks: [
            'Codeigniter', 'Bootstrap', 'MySQL', 'JQuery'
        ]
    },{
        project: 'Trucatt - Tobelsoft',
        image: images.test,
        description: 'Trucatt is a tools for cheating online games, we focused on PointBlank, this service is free without credit card',
        software_type: 'Site',
        tech_stacks: [
            'Codeigniter', 'Bootstrap', 'MySQL', 'JQuery'
        ]
    }
]