import React, { useEffect, useState } from 'react'
import Navbar from './Comps/Navbar';
import Filter from './Comps/Filter';
import Cards from './Comps/Cards';
import { apiUrl, filterData } from './data';
import { toast } from 'react-toastify';
import Spinner from './Comps/Spinner'

const App = () => {
  const [courses, setcourses] = useState(null)
  const [loading, setloading] = useState(true)

  async function fetchData() {
    setloading(true);
    try {
      let response = await fetch(apiUrl)
      let output = await response.json();
      setcourses(output);

    } catch (error) {
      toast.error('ooo')
    }

    setloading(false);

  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          filterData={filterData}
        />
      </div>
      <div>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} />)
        }
      </div>
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default App;