import Promo from "./components/Promo/Promo";


const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия биологических экспериментов, включавших проведение исследований по возможности полётов на геофизических и космических ракетах живых существ, наблюдение за поведением высокоорганизованных животных в условиях таких полётов, а также, изучение сложных явлений в околоземном пространстве."
text = text.match(/[^\s,.]+/g);
console.log(text);

const rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while (n--) {
    adds.push({
        text: `${text[rand(text.length)]} ${text[rand(text.length)]} ${text[rand(text.length)]}`,
        pic: !!Math.round(Math.random()), // !!0 => false - !!1 => true
        sizes: sizes[rand(sizes.length)]
    })
}

const App = () => {
    return <div>
            <div className="container">
           {adds.map(el => <Promo {...el} type={el.sizes}/>)}
            </div>
        </div>
}

export default App;