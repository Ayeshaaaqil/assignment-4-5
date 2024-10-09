
export default function Responsive() {
    return(
        <div className="parentContainer">
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img 
            src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg" alt="pic01" />
          </div>
           <h1 className="title"></h1>
          <p className="description">
            "Every flower is a soul blossoming in nature."
          </p>
          <button className="readMore">Read More</button>
        </div>
  
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg" alt="profile2" />
          </div>
          <h1 className="title"></h1>
          <p className="description">
            "Where flowers bloom so does hope."
            </p>
          <button className="readMore">Read More</button>
        </div>
  
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hieu-697259.jpg&fm=jpg" alt="profile03 "/>
          </div>
          <h1 className="title"></h1>
          <p className="description">
            "Love is the flower you have got to let grow."
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="data:image/jpeg;base64,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" alt="pro 04" />
          </div>
          <h1 className="title"></h1>
          <p className="description">
            "A flower does not think of competing with the flower next to it.It just blooms."
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg" alt="pro 05" />
          </div>
          <h1 className="title"></h1>
          <p className="description">
            "Happiness held is the seed;happiness shared is the flower."
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hieu-697259.jpg&fm=jpg" alt="pro 06" />
          </div>
          <h1 className="title"></h1>
          <p className="description">
            "The earth laughs in flowers."
          </p>
          <button className="readMore">Read More</button>
        </div>
      </div>
    );
};
      
    