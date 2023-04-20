const Promo = () => {
    return (
        <div className="promo">
            <div className="promo-pic"></div>
            <h3>Promo text</h3>
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
            <Promo/>
            <Promo/>
            <Promo/>
            <Promo/>
            <Promo/>
        </div>
    )
}

export default App;