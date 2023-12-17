import React from 'react'

export default function carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                {/* <div className="carousel-caption" id='carousel'> */}

                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="carousel-inner" id="anhCarousel">
                        <div className="carousel-item active">
                            <img src="https://th.bing.com/th/id/R.20b9ae028ac1a7f4902387337d49bf60?rik=2h1j06C865hA6Q&pid=ImgRaw&r=0" className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..." />
                        </div>
                        <div className="carousel-item">     
                            <img src="https://source.unsplash.com/random/900x700/?novel" className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?cake" className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..." />
                        </div>
                    </div>
                {/* </div> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

        </div>
    )
}
