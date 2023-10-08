import  { useEffect, useState } from 'react';
import Cards from './CourseAndServicesCard/Card'

const MiddleBodySection = () => {
    const [servicesData,setServicesData] = useState([])

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
            setServicesData(data.services)
           } )

      }
      useEffect(()=>{
        fetchData()
      },[])

      const cloudImageUrl ="https://media.istockphoto.com/id/1200319569/vector/cute-white-cloud-on-bright-blue-sky-bottom-border-seamless-pattern.jpg?s=612x612&w=0&k=20&c=N-yI85_-AxakW8s5WM2e6Nrp1S2uMybQVGaus2tXJcA="

  return (
    <>
        <div style={{backgroundImage:`url(${cloudImageUrl})`, backgroundSize: "100%" }}>
            <p className="fs-3" style={{textAlign:"center"}}>Services We Offer ?</p>
            <div>
                <Cards  services={servicesData} buttonCount ="1"/>
            </div>
  
        </div>
        <div>
                <h4>How do we prepare our kids for the better future ?</h4>
                <hr/>
                <p className='fs-5' style={{textAlign:"center"}}>Here is a better way to build the mindsets of our kids to lead businesses of the future. This course has been carefully designed to enrich students with the skills needed for them to thrive as creative thinkers, great leaders, public speakers and leading life like “Entrepreneurs”.
                    
                </p>
                <p className='fs-5' style={{textAlign:"center"}}>
                    Each module of the course contains fun & engaging assignments that help our students learn the subject matter better through practical implementation. 
                     This also helps schools and parents assess improvement and see tangible results of the student’s learning.
                </p>
            </div>

    </>
  )
}

export default MiddleBodySection
