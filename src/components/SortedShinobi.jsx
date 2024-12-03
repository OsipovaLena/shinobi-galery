import s from './SortedShinobi.module.css'

export const SortedShinobi = ({ shinobi, setShinobi }) => {

    const handleSortShinobi = (event) => {
        const sortType = event.target.value;
        console.log(event.target.value)

        let sortedShinobi;
        if (sortType === "price") {
            sortedShinobi = [...shinobi].sort((a, b) => a.price - b.price)
        } else if (sortType === "priceLow") {
            sortedShinobi = [...shinobi].sort((a, b) => b.price - a.price)
        } else if (sortType === "power") {
            sortedShinobi = [...shinobi].sort((a, b) => a.power - b.power)
        } else if (sortType === "powerLow") {
            sortedShinobi = [...shinobi].sort((a, b) => b.power - a.power)
        } else if (sortType === "id") {
            sortedShinobi = [...shinobi].sort((a, b) => a.id - b.id)
        } else if (sortType === "idLow") {
            sortedShinobi = [...shinobi].sort((a, b) => b.id - a.id)
        } else
        {
            return;
        }

        setShinobi(sortedShinobi)
        console.log(shinobi)
    }

    return (
        <div className={s.sort}>
            <select onChange={handleSortShinobi} defaultValue="">
                <option value="" disabled hidden>Сортировать по</option>
                <option value="price">возрастанию цены</option>
                <option value="priceLow">убыванию цены</option>
                <option value="power">возрастанию силы</option>
                <option value="powerLow">уменьшению силы</option>
                <option value="id">сначала старые</option>
                <option value="idLow">сначала новые</option>
            </select>
        </div>
    )
}