export default function StatItemsMobile() {
    return (
      <div className="wrapper pt-10 lg:hidden">
        <div className="container1">
          <i className="fas fa-utensils"></i>
          <span className="num" data-val="400">1500+</span>
          <span className="text">Clients</span>
        </div>
        <div className="container1">
          <i className="fas fa-smile-beam"></i>
          <span className="num" data-val="340">1800+</span>
          <span className="text">Companies formed</span>
        </div>
        <div className="container1">
          <i className="fas fa-list"></i>
          <span className="num" data-val="225">150+</span>
          <span className="text">Countries Served</span>
        </div>
        <div className="container1">
          <i className="fas fa-star"></i>
          <span className="num" data-val="280">5+</span>
          <span className="text">Years of experience</span>
        </div>
      </div>
    );
  }
  