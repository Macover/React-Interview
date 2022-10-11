const Image = ({src, handleLoad}) =>{
    return (
        <div className="container__image-container">
            <img alt="gif" onLoad={handleLoad} id="img" className="image-container__img" src={src}/>
        </div>
    )
}
export default Image