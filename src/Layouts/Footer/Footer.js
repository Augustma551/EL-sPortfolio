import './Footer.scss';

const Footer =() =>{
    return(
        <div className='Footer bg-black'>
            <div className='d-flex flex-column gap-3 align-items-center justify-content-center'>
           
                <a className="btn btn-lg btn-light mt-5 rounded-5 text-center" href="https://cloning-disguised-gg-evbd.vercel.app/" role="button" style={{width:'10%'}}>See Github</a>
                
                <a className='mt-4 text-light text-decoration-none' href="https://www.linkedin.com/in/cherellenio/" >
                    Connect with me on Linkedin
                </a>
                <p className='text-light active'>
                    @2024 | EL
                </p>
            </div>
        </div>
    )
}

export default Footer