import  { useEffect, useState } from 'react';
import Cards from './CourseAndServicesCard/Card';


const BottomBodySection = () => {
    const [courseData,setCourseData] = useState([])

    const fetchData = ()=>{
        fetch("Data.json",{
            headers:{
              'Content-Type':'application/json',
              'Accept':'application/json'
            }
          })
          .then((response) =>{ 
            return response.json()
          })
          .then((data) => {
            setCourseData(data.courses)
           } )

      }

      useEffect(()=>{
        fetchData()
      },[])

  return (
    <div style={{marginTop:"3%"}}>
        <div>
            <h2>Our Courses</h2>
        </div>
      <div style={{marginTop:"3%"}}>
        <Cards  data={courseData} buttonCount ="2"/>
      </div>
    </div>
  )
}

export default BottomBodySection
