import React from 'react';
import './First.css';
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'
import img4 from './images/img4.jpeg'
import img5 from './images/img5.jpeg'
import img6 from './images/img6.jpeg'
import img7 from './images/img7.jpeg'
import img8 from './images/img8.jpeg'
import img9 from './images/img9.jpeg'
import img10 from './images/img10.jpeg'
import img11 from './images/img11.jpeg'
import img12 from './images/img12.jpeg'
import img13 from './images/img13.jpeg'



const First = () => {
    return (
        <div className="profile-page">
         <nav className="navbar">
            <img src={img1} alt="logo" className="imf"></img>
            <input type="text" placeholder="Search...." className="search"></input>
            <div className="b">
                <img src={img2} alt="im" className="im"></img>
                <p className="n">Find Work</p>
            </div>
            <div className="b">
                <img className="im" src={img3} alt="talent"></img>
                <p className="n">Find Talent</p>
            </div>
            <div className="b">
                <img className="im" src={img4} alt="talent"></img>
                <p className="n">Connections</p>
            </div>
            <div className="b">
                <img className="im1" src={img5} alt="talent"></img>
                <p className="n">Messages</p>
            </div>
            <div className="b">
                <img className="im" src={img6} alt="talent"></img>
                <p className="n">Notifications</p>
            </div>
            <div className="pro">
                <div className="c1"></div>
                <p className="p">me</p>
            </div>
         </nav>
         <main className="main">
            <div className="boxx">
                <div className="boxx1">
                    <img src={img12} alt="back-ground" className="back1"></img>
                     <div className="profile2"></div>
                     <div className="intro">
                        <div className="intro1">
                            <h2 className="names">Shreya Bhoir</h2>
                        </div>
                        <p className="py">Python Enthusiast | Frontend Developer</p>
                        <p className="address">Mumbai, India</p>
                        <div className="skill">
                            <button className="btn1">Freelancer</button>
                            <button className="btn2">Contact</button>
                        </div>
                     </div>
                    <div className="con">
                    <div className="in2">
                        <img className="ho1" src={img9}></img>
                        <div className="box">
                            <h3 className="mumbai">Mumbai University</h3>
                            <p className="year">2023-2027</p>
                        </div>
                     </div>
                     <div className="in2">
                        <img className="ho1" src={img10}></img>
                        <div className="box">
                            <h3 className="mumbai">Apple Inc.</h3>
                            <p className="year">2023-2027</p>
                        </div>
                     </div>
                    </div>
                    <div className="logo">
                        <img className="img1" alt="linkein" src={img7}></img>
                        <img className="img1" alt="linkein" src={img8}></img>
                    </div>
                </div>
                <div className="boxx2">
                    <div className="pjq">
                    <h3 className="project">Project Gallery</h3>
                    <div className="bb1">
                     <a href="" className="link1">Link GitHub</a>
                    <img className="img9" src={img13}></img>
                    </div>
                    </div>
                    <div className="images">
                        <div className="bxxx1">
                            <img src={img11} className='imgs'></img>
                            <p className="web">Website Clones</p>
                        </div>
                        <div className="bxxx1">
                            <img src={img11} className="imgs"></img>
                            <p className="web">Project 1</p>
                        </div>
                        <div className="bxxx1">
                            <img src={img11} className="imgs"></img>
                            <p className="web">Project 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxx4">
                <h4 className="grow">Grow Your Network</h4>
                <div className="s1">
                <div className="circles"></div>
                <div className="info">
                    <h4 className="inf1">Dhru Burte</h4>
                    <p className="paras">Anything here</p>
                </div>
                <div className="plus">+</div>
                </div>
                <div className="s1">
                <div className="circles"></div>
                <div className="info">
                    <h4 className="inf1">Sahil Khan</h4>
                    <p className="paras">Anything here</p>
                </div>
                <div className="plus">+</div>
                </div>
                <div className="s1">
                <div className="circles"></div>
                <div className="info">
                    <h4 className="inf1">Batul chougule</h4>
                    <p className="paras">Anything here</p>
                </div>
                <div className="plus">+</div>
                </div>
                <div className="s1">
                <div className="circles"></div>
                <div className="info">
                    <h4 className="inf1">Shreya Bhoir</h4>
                    <p className="paras">Anything here</p>
                </div>
                <div className="plus">+</div>
                </div>
            </div>
         </main>
        </div>
    );
};
 
export default First;