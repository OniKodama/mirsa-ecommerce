import './PageNotFound.scss'
import errorRobot from './assets/scienerc-404-error-.png'
const PageNotFound = () => {
  return (
    <div className='notFound'>
        <div className='errorTitle'>
            404 Page Not Found
        </div>
        <div className='errorImg'>
            <img src= {errorRobot} alt='ERROR'/>
        </div>
    </div>
  )
}

export default PageNotFound