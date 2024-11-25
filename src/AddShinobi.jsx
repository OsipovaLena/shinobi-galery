import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import ReactPaginate from "react-paginate";
import './App.css';


export const AddShinobi = ({setZhopa, shinobiList, setShinobiList}) => {

    const {register, handleSubmit, reset} = useForm()
    const onSubmit = (data) => postCard(data)



    const postCard = async (e) => {
        const url = 'https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi'

        if (!e.image || e.image.trim() === "") {
            e.image = "https://st.peopletalk.ru/wp-content/uploads/2020/01/enoxukbwwaaewtc.jpg-large-640x455.jpg";
        }

        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e)
            })
            console.log(e)
            console.log(JSON.stringify(e))
            setZhopa(prev => prev + 1)
            reset()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="add-shinobi-container">

            <form onSubmit={handleSubmit(onSubmit)}>

                Name: <input {...register("name")} />
                Village: <input {...register("village")} />
                Abilities: <input {...register("abilities")} />
                Power: <input {...register("power")} />
                Price: <input {...register("price")} />
                Img: <input {...register("image")} />
                <input type="submit"/>


            </form>

            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={change}*/}
            {/*    onChange={handleChange} />*/}

            {/*<p>Value: {change}</p>*/}

            {/*<button onClick={handleAdd}>Add</button>*/}
            {/*<div>{add}</div>*/}
            {/*<button onClick={postCard}>New Shinobi</button>*/}

        </div>
    )
}