import {useForm} from "react-hook-form";
import './App.module.css';


export const AddShinobi = ({setAddedShinobi, shinobiList, setShinobiList}) => {

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
            setAddedShinobi(prev => prev + 1)
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
        </div>
    )
}