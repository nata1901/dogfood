import { useState, useContext, useEffect } from "react";

import Card from "../components/Card";
import Pagination from "../components/Pagination";

import usePagination from "../hooks/usePagination";

import Ctx from "../context";

const Catalog = ({setServerGoods}) => {
    const {goods, text} = useContext(Ctx);
    const paginate = usePagination(goods, 20)
    const [sort, setSort] = useState(null)
    const filterSt = {
        gridColumnEnd: "span 4",
        display: "flex",
        gap: "20px"
    }
    useEffect(() => {
paginate.step(1);
    }, [text])

    const sortHandler = (vector) => {
        if (vector === sort) {
            setSort(null)
            // setServerGoods(old => [...old])
            goods.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        } else {
            setSort(vector)
            goods.sort((a, b) => {
                return vector === "up" ? (a.price - b.price) : (b.price - a.price)
            })
        }
    }
    return <div className="container">
         <div style={{gridColumnEnd: "span 4"}}><Pagination hk={paginate} /></div>
        <div style={filterSt}>
            {/* Сортировка по числу price*/}
            <button 
                style={{backgroundColor: sort === "up" ? "orange" : "white"}}
                onClick={() => sortHandler("up")}
            >По возростанию цены</button>
            <button
                style={{backgroundColor: sort === "down" ? "orange" : "white"}}
                onClick={() => sortHandler("down")}
            >По убыванию цены</button>
            {/* Фильтрация */}
            <button>Новинки</button>
            <button>Скидки</button>
        </div>
        {paginate.setDataPerPage().map(g => <Card 
            key={g._id} 
            {...g} 
            img={g.pictures} 
            setServerGoods={setServerGoods}
        />)}   
    </div>
}

export default Catalog;