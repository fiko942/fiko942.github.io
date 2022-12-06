import './About.scss'
import 'boxicons'
import {
	useEffect,
	useState
} from 'react'
import Cert from './Cert'

import mtsn5malangImage from '../../Static/Images/mtsn5malang.png'
import muhendoImage from '../../Static/Images/muhendo.png'
import dicodingImage from '../../Static/Images/dicoding.png'

import googleCompanyImage from '../../Static/Images/google_company.png'
import sololearnCompanyImage from '../../Static/Images/sololearn_company.png'
import freecodecampCompanyImage from '../../Static/Images/freecodecamp_company.jpg'
import ummImage from '../../Static/Images/umm_company.png'
import kampungsongoImage from '../../Static/Images/kampungsongo.png'

import basicItSupportGoogle from '../../Static/Images/basic_it_support_google_certificate.png'
import kids2022Umm from '../../Static/Images/kids2022_umm.png'
import baparekrafDicoding from '../../Static/Images/baparekraf_event_dicoding.png'
import phpcourseSololearn from '../../Static/Images/php_course_sololearn.jpg'
import csharpcourseSololearn from '../../Static/Images/csharp_course_sololearn.png'
import javascriptalgorithm from '../../Static/Images/javasript_algorithm_freecodecamp.png'
import responsivewebdesignFreecodecamp from '../../Static/Images/responsive_web_design_freecodecamp.png'
import scientificcomputing from '../../Static/Images/scientific_computing_freecodecamp.png'
import softwareArchitect from '../../Static/Images/idcamp_software_architect.png'
import developerCoaching from '../../Static/Images/developer_coaching.png'
import hadapiTantanganEkonomiGlobal from '../../Static/Images/hadapi_tantangan_ekonomi_global.png'

export default function About(args) {

	const [certOpen, setCertOpen] = useState(false)
	const [selectedCert, setSelectedCert] = useState({})
	const handleOpenCertification = cert => {
		setSelectedCert(cert)
		setCertOpen(true)
	}

	const handleCertClose = () => setCertOpen(false)

	return (
			<div className='about'>
				<Cert open={certOpen} cert={selectedCert} onClose={handleCertClose.bind(this)} />
				<div className='educations'>
					<div className='title'>Experience</div>
					<div className='list'>
						{experiences.map((experience, index) => (
							<div className='item' key={index}>
								<div className='name'>{experience.name}</div>
								<div className='desc'>{experience.desc}</div>
								<div className='date'>
									<box-icon name='calendar' color='#fff' size='20px' class='icon' />
									<div className='from'>{experience.date.from}</div>
									-
									<div className='to'>{experience.date.to}</div>
								</div>
								<img loading={'lazy'} className='icon' src={experience.icon} alt={'Wiji Fiko Teren - ' + experience.name} title={experience.name} />
							</div>
						))}
					</div>
				</div>

				<div className='educations'>
					<div className='title'>Education's</div>
					<div className='list'>
						{educations.map((education, index) => (
							<div className='item' key={index}>
								<div className='name'>{education.name}</div>
								<div className='desc'>{education.desc}</div>
								<div className='date'>
									<box-icon name='calendar' color='#fff' size='20px' class='icon' />
									<div className='from'>{education.date.from}</div>
									-
									<div className='to'>{education.date.to}</div>
								</div>
								<img loading={'lazy'} className='icon' src={education.icon} alt={'Wiji Fiko Teren - ' + education.name} title={education.name} />
							</div>
						))}
					</div>
				</div>
				

				<div className='certification'>
					<div className='title'>Certification's ({ceritificates.length})</div>
					<div className='items row align-items-center justify-content-center'>
						{ceritificates.map((certificate, index) => (
							<div className='col-lg-3 col-md-4 item' key={index} onClick={handleOpenCertification.bind(this, certificate)}>
								<img className='certificate' title={'Wiji Fiko Teren - ' + certificate.name} src={certificate.image} alt={'Wiji Fiko Teren - ' + certificate.name} />
								<div className='name'>{certificate.name}</div>
								<img title={'Issued by ' + certificate.company} src={certificate.company_image} className='issuer-image' />
								{certificate.desc && (
									<div className='description'>{certificate.desc}</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		)
}

const educations = [
	{
		name: "MTsN 5 Malang",
		desc: 'Information and Communication Technology',
		date: {
			from: '2016',
			to: '2019'
		},
		icon: mtsn5malangImage
	},
	{
		name: 'SMKM 6 Donomulyo',
		desc: 'Network computer Engineering',
		date: {
			from: '2019',
			to: '2022'
		},
		icon: muhendoImage
	}
]

const experiences = [
	{
		name: 'Kampung Songo',
		desc: 'Software Programmer',
		date: {
			from: 'July 2022',
			to: 'Current'
		},
		icon: kampungsongoImage
	}
]



const ceritificates = [
	{
		name: 'Basic Technical Support',
		image: basicItSupportGoogle,
		company: 'Google',
		company_image: googleCompanyImage,
		signed: {
			name: 'Amanda Brophy',
			role: 'Global Director of Google Career Certificates'
		},
		type: 'Course',
		issued: 'May 9, 2022'
	},
	{
		name: 'Student  Digital Innovation Competition (2022)',
		image: kids2022Umm,
		company: 'Universitas Muhammadiyah Malang',
		company_image: ummImage,
		signed: {
			name: 'Christian S.K.Aditya',
			role: 'Lecturer'
		},
		type: 'Competition',
		issued: 'May 9, 2022',
		desc: 'Won 1st place in the national level software development competition organized by UMM (University of Muhammadiyah Malang).'
	},
	{
		name: 'Baparekraf Developer Day 2022',
		image: baparekrafDicoding,
		company: 'Dicoding',
		company_image: dicodingImage,
		type: 'Event',
		signed: {
			name: 'Narenda Wicaksono',
			role: 'Chief Executive Officer'
		},
		issued: 'Apr 2, 2022'
	},
	{
		name: 'Javascript Algorithm and Data Structures',
		image: javascriptalgorithm,
		company: 'freeCodeCamp',
		company_image: freecodecampCompanyImage,
		type: 'Course',
		signed: {
			name: 'Quincy Larson',
			role: 'Executive Director'
		},
		issued: 'Apr 7, 2022'
	},
	{
		name: 'Responsive Web Design',
		image: responsivewebdesignFreecodecamp,
		company: 'freeCodeCamp',
		company_image: freecodecampCompanyImage,
		type: 'Course',
		signed: {
			name: 'Quincy Larson',
			role: 'Executive Director'
		},
		issued: 'Dec 2, 2021'
	},
	{
		name: 'Scientific Computing with Python',
		image: scientificcomputing,
		company: 'freeCodeCamp',
		company_image: freecodecampCompanyImage,
		type: 'Course',
		signed: {
			name: 'Quincy Larson',
			role: 'Executive Director'
		},
		issued: 'Nov 5, 2021'
	},
	{
		name: 'C# Course',
		image: csharpcourseSololearn,
		company: 'SoloLearn',
		company_image: sololearnCompanyImage,
		type: 'Course',
		signed: {
			name: 'Yeva Hyusyan',
			role: 'Chief Executive Officer'
		},
		issued: 'Nov 6, 2021'
	},
	{
		name: 'PHP Course',
		image: phpcourseSololearn,
		company: 'SoloLearn',
		company_image: sololearnCompanyImage,
		type: 'Course',
		signed: {
			name: 'Yeva Hyusyan',
			role: 'Chief Executive Officer'
		},
		issued: 'Nov 9, 2021'
	},
	{
		name: 'IDCamp x Dicoding: Software Architecture',
		image: softwareArchitect,
		company: 'Dicoding',
		company_image: dicodingImage,
		signed: {
			name: 'Narenda Wicaksono',
			role: 'Chief Executive Officer',
		},
		type: 'Event',
		issued: 'Sep 24, 2022'
	},
	{
		name: 'Dicodng Developer Coacing',
		image: developerCoaching,
		desc: 'Tingkatkan performa dan Proses Build Times dengan Modularisasi',
		company: 'Dicoding',
		company_image: dicodingImage,
		signed: {
			name: 'Narenda Wicaksono',
			role: 'Chief Executive Officer'
		},
		type: 'Event',
		issued: 'Okt 21, 2022'
	},
	{
		name: 'Hadapi Tantangan Ekonomi Global dengan Talenta Digital',
		image: hadapiTantanganEkonomiGlobal,
		company: 'Dicoding',
		company_image: dicodingImage,
		signed: {
			name: 'Narenda Wicaksono',
			role: 'Chief Executive Officer'
		},
		type: 'Event',
		issued: 'Okt 29, 2022'
	}
]