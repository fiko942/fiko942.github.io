import 'boxicons'
import {useEffect} from 'react'

export default function Modal(args) {

    useEffect(() => {
        let style = ''
        if(args.open) style = 'overflow: hidden'
        document.querySelector('.main-wrapper').style = style
    }, [args.open])

    return args.open && (
        <>
            <div className="modal-wrapper"></div>
            <div className="portfolio-modal">
                <box-icon name='x' color='#fff' size='30px' class='close' onClick={args.onClose} />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <img src={args.item.image} className='image' alt={'Wiji Fiko Teren - ' + args.item.project} />
                    </div>
                    <div className="col-lg-6">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{args.item.project}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>{args.item.description}</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>
                                        <span>{args.item.software_type}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tech Stack</td>
                                    <td>
                                        <div className='techs row d-flex align-items-center justify-content-center'>
                                        {args.item.tech_stacks.map((tech, index) => (
                                        <div className='tech col'>{tech}</div>
                                        ))}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Site</td>
                                    <td>
                                        {typeof args.item.site != 'undefined' ? 
                                            (
                                                <a style={{color: '#fff', textDecoration: 'underline !important' }} href={args.item.site} target="_blank" rel="noreferrer">{args.item.site}</a>
                                            ) : 
                                            (
                                            <div style={{fontSize: '13px', color: '#ff0000'}}>This project is not contains the site, maybe this project is a private or the server is not available</div>
                                            )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}