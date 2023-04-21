import Promo from "./components/Promo/Promo"; //Promo.jsx
import Card from "./components/Card"; //index.jsx
import cardsData from "./assets/data" //data.json


const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия, включавших проведение исследований по возможности полётов на геофизических и космических ракетах живых существ, наблюдение за поведением животных в условиях таких полётов, а также, изучение сложных явлений в пространстве."
text = text.match(/[^\s,.]+/g);
console.log(text);

const rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while (n--) {
    adds.push({
        text: `${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)}`,
        pic: !!Math.round(Math.random()), // !!0 => false - !!1 => true
        sizes: sizes[rand(sizes.length)]
    })
}

const App = () => {
    return <div>
            <div className="container">
           {/* <Card 
                 img={cardsData[0].pictures}
                 name={cardsData[0].name}
                 price={cardsData[0].price}
                 /> */}
                 {cardsData.map((el, i) => <Card
                 key={i}
                 img={el.pictures}
                 name={el.name}
                 price={el.price}
                 />)}
                {adds.map((el, i) => <Promo key={i} {...el} type={el.sizes}/>)}
            </div>
        </div>
}

export default App;