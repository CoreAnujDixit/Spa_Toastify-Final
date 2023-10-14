import React, { useEffect, useState } from "react";
import Navbar from "./Comps/Navbar";
import Filter from "./Comps/Filter";
import Cards from "./Comps/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Comps/Spinner";

const App = () => {
  const [courses, setcourses] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        let response = await fetch(apiUrl);
        let output = await response.json();
        setcourses(output.data);
      } catch (error) {
        toast.error("Oops"); // Check if toast is properly configured
      }
      setloading(false);
    };

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
    </div>
  );
};

export default App;
