import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MyContext } from '../Context/MyContext';

const Activity = () => {
    const pageStyle = {
        container: {
            height: "90vh"
        },
        leftSideBar: {
            width: "25%"
        }
    }
    const {completedIndx, setcompletedIndx} = useContext(MyContext);
    const [activitiesList, setactivitiesList] = useState([]);
    const {actId} = useParams()

    const handleCheckboxChange = (e)=>{
        const cid = e.target.name.split("checkbox")[1];
        let todo = false;
        console.log(e.target.checked);
        if (e.target.checked) {
            todo = true;
        }
        const obj = completedIndx.map((value,id)=> {
            if (id == cid) {
                return todo;
            }
            return value;
        })
        // console.log(todo);
        // console.log(obj);
        setcompletedIndx(obj);
        // save to local storage;
        localStorage.setItem("savedCompletedStatus", JSON.stringify(obj))
    }
    
    useEffect(() => {
      fetch("/data.json")
      .then(res=>res.json())
      .then(data=>{
          setactivitiesList(data)
      })
    }, [])
    return (
        <div className='container bg-dark' style={pageStyle.container}>
            <div className="d-flex gap-2">
                <div className="left-side-bar" style={{ width: "25%" }}>
                    <div className="text-white p-2 rounded overflow-y-auto scroller" style={{ backgroundColor: "GrayText", height: "88vh" }}>
                        {/* topics */}
                        <div className="topics border border-white rounded px-1 py-2 my-3">
                            <div className="form-check">
                                {/* <input className="form-check-input" type="checkbox" /> */}
                                <span><Link to={"/"}>Getting Started</Link></span>
                            </div>
                        </div>
                        
                        {activitiesList.length > 0 && activitiesList.map((act,i)=>{
                            return (<div key={i} className="topics border border-white rounded px-1 py-2 my-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name={`checkbox${i}`} checked={completedIndx[i]} onChange={handleCheckboxChange}/>
                                    <span><Link to={`/activity/${i+1}`}>{act.activityName}</Link></span>
                                </div>
                            </div>)
                        })}
                        

                    </div>
                </div>


                <div className="right" style={{width:"100%"}}>
                <div className="text-white p-2 rounded overflow-y-auto scroller" style={{ backgroundColor: "GrayText", height: "88vh" }}>
                        
                        <div className="topics border bg-dark rounded px-1 py-2 d-flex justify-content-between">
                            <span>{activitiesList.length > 0 ? activitiesList[(actId-1)].activityName : "Loading.."}</span>
                            {activitiesList.length > 0 && activitiesList[(actId-1)].activitySolution ? (<a href={activitiesList[(actId-1)].activitySolution} target="_blank">
                            <span className='cursor-pointer'>Solution
                            <i className="bi bi-play"></i>
                            </span></a>)
                            :
                            <span>Comming Soon</span>}
                        </div>

                        <div className="activities-list h-100 my-2 bg-black">
                            {activitiesList.length > 0 && activitiesList[(actId-1)].activityLink ? <iframe src={activitiesList[(actId-1)].activityLink} width={"100%"} 
                            height={"100%"} frameBorder="0"></iframe>
                        :
                        <p className='text-center pt-4'>404 Not Found</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity