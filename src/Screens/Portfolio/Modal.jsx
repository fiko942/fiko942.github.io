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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}