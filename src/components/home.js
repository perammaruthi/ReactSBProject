import React from 'react';

class Home extends React.Component {
  
    render () {
        return (
            <div>
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
            <li style={{backgroundImage: '../images/image1.jpg'}}>
                    <div className="layout" />
                            <h1>Hi! <br />I'm Jackson</h1>
                            <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                            <p><a className="btn btn-primary btn-learn">Download CV <em className="icon-download4" /></a></p>
                </li>
            </div>
            </section>
            </div>
        )
    }
}
 export default Home;