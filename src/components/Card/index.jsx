import "./style.css"

//{img, name, price} => props (props.img, props.name, props.price)
const Card = ({img, name, price}) => {
return <a className="card">
    <img src={img} alt="Картинка"/>
    <span className="card_name">{name}</span>
    <span className="card_price">{price} $</span>
    <button className="card_btn">В корзину</button>
</a>
}

export default Card;
