import Logo from "./Logo";
import { Link } from "react-router-dom";


const Footer = () => {
    return <footer>
        <div className="footer__cell">
            <Logo/>
            <div>©{new Date().getFullYear()}</div>
        </div>
        <div className="footer__cell footer__menu">
            {/* <a href="">Каталог</a>
            <a href="">Избранное</a>
            <a href="">Корзина</a> */}
             <Link to="">
                Каталог
                </Link>
                <Link to="">
                    Избранное
                </Link>
                <Link to="">
                    Корзина
                </Link>
                <Link to="/draft">
                    Черновик
                </Link>

        </div>
    </footer>
}

export default Footer;