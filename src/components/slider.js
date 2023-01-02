import React from "react";

function Slider() {
    return (
        <div className="slider-detail" id="home">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="assets/images/slider/slide-01.png" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className=" bounceInDown">Donate Blood & Save a Life</h5>
                            <p className=" bounceInLeft">
                                Lets all come together and give back to our community, <br />
                                Blood donation is important in life, it gives others a hope to survive.<br />
                                It takes just 5-7 minutes to <span className="red"><strong>SAVE A LIFE</strong></span> by donating your blood.
                            </p>
                            <div className=" vbh">
                                <a href="#donate"><div className="btn btn-success bounceInUp"> Donate Now </div></a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="assets/images/slider/slider-02.png" alt="Third slide" />
                        <div className="carousel-caption vdg-cur d-none d-md-block">
                            <h5 className=" bounceInDown">Donate Blood & Save a Life</h5>
                            <p className=" bounceInLeft">
                                Blood donation drive in <span className="red"><strong>Old Raviraj Complex, Jesal Park</strong></span>  <br />
                                in colloboration with Mahatma Gandhi Seva Mandir Blood Bank on the<br />
                                <span className="red"><strong>22nd of Jan, 2023</strong></span> Do join us to CREATE A CHANGE by donating your blood
                            </p>

                            <div className=" vbh">
                                <a href="#donate"><div className="btn btn-success bounceInUp"> Donate Now </div></a>
                            </div>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


        </div>
    )
}

export default Slider;