import React from 'react'
import useFetch from './useFetch';

const data = () => {
    const {data,loading}=useFetch("https://jsonplaceholder.typicode.com/todos/1");


  return (
    <div>
        {loading?<p>Loading</p>:<p>{JSON.stringify(data)}</p>}
    </div>
  )
}

export default data