function Story() {
  return (
    <>
     <div className="story__pictures">
        <img src="img/story-1.jpeg" alt="Couple" className="story__img--1" />
        <img src="img/story-2.jpeg" alt="House" className="story__img--2" />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our life&rdquo;
        </h2>
        <p className="story__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          repellendus nesciunt aperiam omnis nobis ipsam perspiciatis doloremque
          est deleniti, placeat tempora deserunt iste asperiores odit adipisci
          officiis! Ipsa, autem quae.
        </p>
        <button className="btn">Find your own home</button>
      </div>
     
    </>
  );
}

export default Story;
