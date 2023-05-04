import './WhatsappIcon.scss'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsappIcon = () => {
  return (
    <div className='whatsappIconContainer'>
        <div className='whatsappIcon'><a href='https://www.whatsapp.com/' target='_blank' rel="noreferrer"><WhatsAppIcon className='wp'/></a></div>
    </div>
  )
}

export default WhatsappIcon