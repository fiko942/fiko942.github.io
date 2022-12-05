import 'boxicons'

export default function Cert(args) {
    return args.open && (
        <>
            <div className='cert-wrapper' onClick={args.onClose.bind(this)}></div>
            <div className='cert'>
               <div className='container'>
                    <div className='head'>
                        <div className='name'>Certification</div>
                        <button onClick={args.onClose.bind(this)} className='cl'>
                            <box-icon name='x' color='#fff' size='30px' />
                        </button>
                    </div>
                    <div className='row d-flex justify-content-center body'>
                        <div className='col-md-6'>
                            <img src={args.cert.image} alt={'Wiji Fiko Teren certification - ' + args.cert.name} className='cert-img' title='Click to open this certification image in new tab' />
                        </div>
                        <div className='col-md-6'>
                            <table border={2} className='cert-detail'>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{args.cert.name}</td>
                                    </tr>
                                    {args.cert.desc && (
                                        <tr>
                                            <td>Description</td>
                                            <td>{args.cert.desc}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td>Issued at</td>
                                        <td>{args.cert.issued}</td>
                                    </tr>
                                    <tr>
                                        <td>Issued by</td>
                                        <td>
                                            <div className='d-flex align-items-center' style={{display: 'flex', alignItems: 'center'}}>
                                                <img className='company' src={args.cert.company_image} title={'Issued by ' + args.cert.company} alt={'Issued by ' + args.cert.company} />
                                                <div style={{marginLeft: '10px'}}>
                                                    <span style={{fontSize: '20px'}}>{args.cert.company}</span>
                                                    <div className='separator' />
                                                    <div className='issuer-small'>
                                                        {args.cert.signed.name} - {args.cert.signed.role}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}