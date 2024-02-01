import "./Work.scss";
import Images3 from "../../Assets/Work/disguised.png";
import Video from "../../Assets/Work/3DVideo.mp4";
import Video2 from "../../Assets/Work/NorteraVideo.mp4";

const Work = () => {
  return (
    <div className="Work bg-black" id="Work">
      <div className="row row-cols-1 row-cols-md-2 ">
        <div className="col">
          <div
            className="card text-light border-0 rounded-0"
            style={{ width: 720 }}
          >
            <video
              src={Video}
              className="card-img-top"
              type="video/mp4"
              loop
              muted
              autoPlay
              controls=""
              alt="Video"
            />
            <div className="card-body bg-dark">
              <h5 className="card-title text-start p-4">Cloning WebPage</h5>
              <p className="card-text p-4">
                A landing page with 3d mesh, i was inspired from Dribble and
                decided to tried to cloned with some modification, i am using
                HTML, Vanilla CSS and Javascript and also some javascript
                library such as three, gsap and locomotive scroll.
              </p>

              <a
                className="btn btn-light text-start mb-2"
                href="https://github.com/Augustma551/Cloning3DPage"
                role="button"
              >
                See Github
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card text-light border-0 rounded-0"
            style={{ width: 720 }}
          >
            <video
              src={Video2}
              className="card-img-top"
              type="video/mp4"
              loop
              muted
              autoPlay
              controls=""
              alt="Video"
            />
            <div className="card-body bg-dark">
              <h5 className="card-title text-start p-4">Cloning WebPage</h5>
              <p className="card-text text-start p-4">
                A cloned WebPage from https://www.norterafoods.com/, i am using
                HTML, Tailwind CSS and Javascript to clone the WebPage.{" "}
              </p>
              <a
                className="btn btn-light mt-4 text-start mb-2"
                href="https://github.com/Augustma551/Cloning-Nortera-WebPage"
                role="button"
              >
                See Github
              </a>
            </div>
          </div>
        </div>
        <div className="col text-center mx-auto align-items-center">
          <div
            className="card text-light border-0 rounded-0 mt-5"
            style={{ width: 720 }}
          >
            <img src={Images3} className="card-img-top" alt="..." />
            <div
              className="card-body bg-dark"
              href="https://cloning-disguised-gg-evbd.vercel.app/"
            >
              <h5 className="card-title text-start p-4">Cloning WebPage</h5>
              <p className="card-text text-start p-4">
                A cloned WebPage from https://www.disguised.gg/, i am using
                React Js to cloned the WebPage.
              </p>
              <a
                className="btn btn-light mt-3 mb-2 text-start"
                href="https://cloning-disguised-gg-evbd.vercel.app/"
                role="button"
              >
                See Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
