const Image = ({src}) =>{
    return (
        <div className="container__image-container">
            <img className="image-container__img" src={src}/>
        </div>
    )
}
export default Image