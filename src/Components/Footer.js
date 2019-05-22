import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer" style={{backgroundImage:"url('images/back_4.png')"}}>
        <div className="container">
            <div className="row">
                <nav className="footer-nav">
                    <ul>
                        <li><a href="https://i-d.vice.com/en_us/article/8xnxbp/clarian-north-is-the-transcendental-house-producer-that-gives-the-best-interview-ever" target="_blank" rel="noopener noreferrer">Creative Clarian</a></li>
                        <li><a href="https://soundcloud.com/clariannorth" target="_blank" rel="noopener noreferrer">Soundcloud</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Licence_to_Kill" target="_blank" rel="noopener noreferrer">Licenses</a></li>
                    </ul>
                </nav>
                <form className="form-inline ml-auto">
                        <div className="form-group has-white">
            
            </div>
            </form>
                <div className="credits ml-auto">
                    <span className="copyright" >
                        © <script>document.write(new Date().getFullYear())</script>, made with <i className="fa fa-heart heart"></i> by <a href="https://www.facebook.com/Yosei.Gorazu" target="_blank" rel="noopener noreferrer">  Clarian </a>
                    </span>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer 