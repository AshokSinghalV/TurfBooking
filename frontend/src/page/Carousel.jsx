
import carousel3 from "../images/turf-new.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel3} className="d-block w-100" 
           style={{
            borderRadius: "15px",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
            transition: "transform 0.5s ease, box-shadow 0.5s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1) translateZ(20px) rotateY(10deg)";
            e.target.style.boxShadow = "10px 10px 30px rgba(0, 0, 0, 0.7)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1) translateZ(0) rotateY(0)";
            e.target.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.5)";
          }}
          alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="..." 
          style={{
            borderRadius: "15px",
            boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.6)",
            transform: "perspective(1200px) rotateX(10deg) rotateY(-5deg)",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "perspective(1200px) rotateX(10deg) rotateY(-5deg)";
            e.target.style.boxShadow = "10px 10px 30px rgba(0, 0, 0, 0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1.05)";
            e.target.style.boxShadow = "15px 15px 40px rgba(0, 0, 0, 0.8)";
           
          }}
          />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="..." 
          style={{
            borderRadius: "15px",
            boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.6)",
            transform: "perspective(1200px) rotateX(10deg) rotateY(-5deg)",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "perspective(1200px) rotateX(10deg) rotateY(-5deg)";
            e.target.style.boxShadow = "10px 10px 30px rgba(0, 0, 0, 0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1.05)";
            e.target.style.boxShadow = "15px 15px 40px rgba(0, 0, 0, 0.8)";
           
          }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
