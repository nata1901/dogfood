/* Зачем здесь LS?
Когда я запускаю программу, я сразу хочу видеть данные.
Но сервер говорит - у тебя нет токена, значит тебя нет, значит данных не будет (ИБ).
Я вошла в систему и получила токен, поработала с данными и выключила React.
Когда я зайду снова - мне снова прийдется аторизоваться (чтобы получить токен). Что делать?
Создавать переменную token = "ey1242325..."
При работе с облачными ресурсами (github) можно скомпроментировать свой токен и робот, 
получивший токен может обрушить нам всю БД. Что делать?
Сохранить его в браузер.
localStorage.getItem("token")

UserName и userId в LS можно и не хранить - можно принимать решение о том, что должно, 
а что не должно быть в LS самостоятельно.

Если у меня есть токен и он хранится в переменной, а информация об имени пользователя нужна только в ЛК => 
Открыть страницу профиля и отправляем запрос на получение данных о пользователе, после чего отображаем их
*/


import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

// компоненты (кусочки кода, которые используются многократно)
import {Header, Footer} from "./components/General";
import Modal from "./components/Modal";
import Search from "./components/Search";

// страницы - отдельный компонент со своим набором компонентов
import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";


// TODO: проработать материал с лекции:
// + изменить ссылки на Link внутри Logo и Footer
// + После входа перенаправлять пользователя на страницу профиля (useNavigate)
// + в подвал добавить ссылку на Draft


const App = () => {
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [token, setToken] = useState(localStorage.getItem("rockToken"));
    const [userId, setUserId] = useState(localStorage.getItem("rockId"));
    // Товары из БД
    const [serverGoods, setServerGoods] = useState([]);
//    Товары для поиска и фильтрации
const [goods, setGoods] = useState(serverGoods);
    
    const [modalActive, setModalActive] = useState(false);

    // useEffect - срабатыват каждый раз, когда компонент создался или перерисовался
    useEffect(() => {
        if (token) {
            fetch("https://api.react-learning.ru/products", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setServerGoods(data.products.sort((a, b) => new Date(b.created_at).getTime() - 
                    new Date(a.created_at).getTime()));
                })
        }
    }, [token])

    useEffect(() => {
        if (!goods.length) {
            console.log("=)");
            setGoods(serverGoods);
        }
    }, [serverGoods]);

// useEffect(() => {
//     console.log("Модалка изменилась!")
// }, [modalActive])

useEffect(() => {
    console.log("Change User")
    if (user) {
        setToken(localStorage.getItem("rockToken"));
        setUserId(localStorage.getItem("rockId"));
    } else {
        setToken("");
        setUserId("");
    }
    console.log("u", user);
}, [user]);

    return (
    <>
        <Header 
        user={user} 
        setModalActive={setModalActive}
        serverGoods={serverGoods}
        />
            <main>
                <Search arr={serverGoods} upd={setGoods}/>
                {/* 
           SPA - Single Page Application (одностраничное приложение)   
                */}
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/catalog" element={<Catalog 
                        goods={goods}
                        //  // Когда мы ставим лайк на товар - его нужно обновить в общем массиве с товарами 
                        //  (иначе лайк поставится только в карточке, но после изменения страницы (переходе между страницами) 
                        //  мы его больше не увидим)
                        setServerGoods={setServerGoods}
                        />}/>
                         <Route path="/favorites" element={<Favorites 
                        goods={goods}
                        userId={userId}
                        setServerGoods={setServerGoods}
                    />}/>
                        <Route path="/draft" element={<Draft/>}/>
                        <Route path="/profile" element={
                             <Profile user={user} setUser={setUser} color="yellow"/>
                        }/>
                        <Route path="/product/:id" element={<Product/>}/>
                    </Routes>
            </main>
            <Footer/>
            <Modal 
            active={modalActive} 
            setActive={setModalActive}
            setUser={setUser}
            />
        </>
    )
}

export default App;