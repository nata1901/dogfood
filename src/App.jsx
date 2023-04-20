const Promo = (props) => {
    // props - это объект, в который можно передать разные свойства для компонента
    let name = "promo";
    switch (props.type) {
        case "lg": name = "promo big"; break;
        case "sm": name = "promo small"; break;
        default: name = "promo";
    }
   
    return (
        <div className={name}>
            <div className={props.pic ? "promo-pic" : "promo-pic pic2"}></div>
                <h3>{props.text}</h3>
        </div>
    )
}

const App = () => {
    return (
        <div title="Doggy">
            <h1>Hello!</h1>
            <hr />
            <i>i</i>
            <i />
            <h2>
                <mark>React</mark>
            </h2>
            <div className="container">
            <Promo text="My Promo" type="lg"/>
            <Promo text="^_^"/>
            <Promo text="Doggy" pic={false}/>
            <Promo type="sm"/>
            <Promo text="The Dogs" type="sm"/>
            </div>
        </div>
    )
}

export default App;