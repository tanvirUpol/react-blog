import { useState,useRef } from 'react';
import { useHistory } from 'react-router-dom';


import {projectFirestore} from '../../firebase/config'

// styles
import './Create.css'

const Create = () => {

    const [title,setTitle] = useState('')
    const [method,setMethod] = useState('')
    const [cookingTime,setCookingTime] = useState('')
    const [newIngredient,setNewIngredient] = useState('')
    const [ingredients,setIngredient] = useState([])
    const ingredientInput = useRef(null)
    const history = useHistory()

    // const {postData,data} = useFetch('http://localhost:8000/recipes','POST')


    const handleSubmit = async (e)=>{
        e.preventDefault()
       const doc =({title,ingredients,method,cookingTime: cookingTime + 'minutes' })

       try{
            await projectFirestore.collection('recipes').add(doc)
            // redirect the user when we get response
            history.push('/')
       }
       catch(err){
        console.log(err);
       }
    }

    const handleAdd = (e) =>{
        e.preventDefault()
        const ing = newIngredient.trim()
        if(ing && !ingredients.includes(ing)){
            setIngredient(prevIngredients => [...prevIngredients,ing])
        }

        setNewIngredient('')
        ingredientInput.current.focus()
    }

    


    return ( 
        <div className='create'>
           <h2 className='page-title'>Add a New Blog</h2>

           <form onSubmit={handleSubmit}>
                <label>
                    <span>Blog title:</span>
                    <input 
                        type="text" 
                        onChange={(e)=> setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Blog Tags</span>
                    <div className="ingredients">
                        <input 
                            type="text"
                            onChange={(e)=>setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className='btn'>add</button>
                    </div>
                </label>
                <p>Given tags: {ingredients.map(i=> <em key={i}>{i},</em>)}</p>

                <label>
                    <span>Blog body: </span>
                    <textarea
                        onChange={(e)=>{setMethod(e.target.value)}}
                        value={method}
                        required
                    />
                </label>

                {/* <label>
                    <span>Cooking Time (minutes):</span>
                    <input 
                        type="number" 
                        onChange={(e)=>setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label> */}

                <button className='btn submit-btn'>submit</button>
           </form>
        </div>
     );
}
 
export default Create;