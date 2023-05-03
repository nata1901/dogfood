import { useState } from "react";
import "./style.css";

const Modal = () => {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [testPwd, setTestPwd] = useState("");

	const testAccess = {
		color: pwd === testPwd ? "forestgreen" : "crimson"
	}

    const switchAuth = (e) => {
		e.preventDefault()
		setAuth(!auth);
	}
	// Зарегистрироваться
	// Создать аккаунт
    return <div className="modal-wrapper">
        <div className="modal">
            <button>Закрыть окно</button>
            <h3>Авторизация</h3>
            <form>
            {!auth && <label>
					Имя пользователя
					<input 
						type="text" 
						value={name} 
						onChange={(e) => setName(e.target.value)}
					/>
				</label>}
				<label>
					Электронный адрес
					<input 
						type="email" 
						value={email} 
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Пароль
					<input 
						type="password" 
						value={pwd} 
						onChange={(e) => setPwd(e.target.value)}
					/>
				</label>
				{!auth && <label>
					Повторить пароль
					<input 
						type="password" 
						value={testPwd} 
						onChange={(e) => setTestPwd(e.target.value)}
						style={testAccess}
						// style={{border: "1px solid", backgroundColor: "blueviolet"}}
					/>
				</label>}
				<div className="modal-ctl">
					<button 
						className="modal-btn"
						// Если кнопка формы регистрации, то проверяем наличие соответствия паролей, но они не должы быть пустыми
						disabled={!auth && (!pwd || pwd !== testPwd)}
					>
						{auth ? "Войти" : "Создать аккаунт" }
					</button>
					<a 
						className="modal-link"
						onClick={switchAuth}
					>
						{auth ? "Регистрация" : "Войти"}
					</a>
				</div>
			</form>
		</div>
	</div>
}

export default Modal;