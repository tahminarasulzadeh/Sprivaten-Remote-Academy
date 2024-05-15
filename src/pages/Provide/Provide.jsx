import '../Provide/Provide.css'
import video from '../../assets/videoplayback.mp4'

const Provide = () => {
  return (
    <div className="provide">
      <div className="container provide-content">
        <h2 className='title'>We are providing best <br /> business service.</h2>
        <p className='text'> Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics  </p>
        <div className="provide-video">
          {/* <video  controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <iframe
            src={video}>
          </iframe>

        </div>

      </div>
      <div className="provide-bg"></div>
    </div>
  )
}

export default Provide;