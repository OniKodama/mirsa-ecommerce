import './Footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='footer'>
        <div className = "wrapper">
            <div className='left'>
            <a href = "#home" className = "link"><h1>MIRSA</h1></a>
            </div>
            <div className='right'>
                <div className='iconsContainer'>
                    <div className='facebook'><a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><FacebookIcon /></a></div>
                    <div className='twitter'><a href='https://www.twitter.com/' target='_blank' rel="noreferrer"><TwitterIcon /></a></div>
                    <div className='instagram'><a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><InstagramIcon /></a></div>
                    <div className='whatsapp'><a href='https://www.whatsapp.com/' target='_blank' rel="noreferrer"><WhatsAppIcon /></a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer