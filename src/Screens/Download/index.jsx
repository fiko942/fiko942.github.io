import './Download.css'
import 'boxicons'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'

export default function Download({file}) {

	useEffect(() => {
		document.title = `${file.name} - Wiji Fiko Teren`
		window.open(file.url, '_blank')
	}, [])

	return (
			<div className='download'>
				<box-icon name='file' color='#fff' size='50px' class='file' />
				<div className='title'>Your download has been started</div>
				<div className='subtitle'>If download is not  started in 10 second, please click the button bellow</div>

				<a href={file.url} target='_blank' className='direct'>
					<box-icon name='download' size="30px" color="#fff" />
					<div className='name'>{file.name}</div>
				</a>

				<Link to='/' className='back'>Back to home</Link>
			</div>
		)
}