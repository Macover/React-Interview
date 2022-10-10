const Button = ({handleClick}) =>{
    return (
        <div className="container__button">
            <button id="button" className="button onclick" onClick={handleClick}></button>
        </div>
    )
}
export default Button