// import { useFetch } from '../../hooks/useFetch'
import {projectFirestore} from '../../firebase/config'
import { useEffect, useState } from 'react';

// styles
import './Home.css'

//components
import BlogList from '../../components/BlogList';

const Home = () => {
    // const { data, isPending, error } = useFetch('http://localhost:8000/recipes')
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [error,setError] = useState(false)

    useEffect(() => {
        setIsPending(true)

      const unsub =  projectFirestore.collection('recipes').onSnapshot((snapshot)=>{
            // console.log(snapshot);
            if(snapshot.empty){
                setError('Nothing to Load')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc =>{
                    results.push({id: doc.id, ...doc.data()})
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
          })

          return () => unsub()

    }, []);

    return ( 
        <div className='home'>
           {error && <p className='error'>{error}</p>}
           {isPending && <p className='loading'>Loading</p>}
            {data && <BlogList blogs= {data}></BlogList>}
        </div>
     );
}
 
export default Home;