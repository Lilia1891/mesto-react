function Card({ data }) {
  return (
    <li className="gallery__element" key={data.id}>
      <img src={data.link} className="gallery__element-image" alt={data.name} />
      <div className="gallery__element-description">
        <h2 className="gallery__element-title">{data.name}</h2>
        <div className="gallery__element-like-container">
          <button
            type="button"
            className="gallery__element-like gallery__element-like"
          ></button>
          <div className="gallery__element-like-counter">
            {data.likes.length}
          </div>
        </div>
      </div>
      <button type="button" className="gallery__element-delete"></button>
    </li>
  );
}
export default Card;
