import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import ReactPaginate from "react-paginate";


export const AddShinobi = ({setZhopa}) => {

    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => postCard(data)



    const postCard = async (e) => {
        const url = 'https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi'

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
            setZhopa(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                Name: <input {...register("name")} />
                Village: <input {...register("village")} />
                Abilities: <input {...register("abilities")} />
                Power: <input {...register("power")} />
                Price: <input {...register("price")} />
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