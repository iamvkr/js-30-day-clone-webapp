import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context/MyContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const {completedIndx, setcompletedIndx} = useContext(MyContext);
    const [activitiesList, setactivitiesList] = useState([])

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
      fetch("./data.json")
      .then(res=>res.json())
      .then(data=>{
        //   console.log(data);
          setactivitiesList(data)
      })
    }, [])
    
    return (activitiesList &&
        <>
            <div className="offcanvas offcanvas-start " tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header bg-dark text-white">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">JS 30 DAY CHALLENGE</h5>
                    <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-white" style={{ backgroundColor: "GrayText" }}>
                    {/* topics */}
                    <div className="topics border border-white rounded px-1 py-2 my-3 cursor-pointer">
                        <div className="form-check">
                            {/* <input className="form-check-input" type="checkbox" /> */}
                            <span><Link to={"/"}>Getting Started</Link></span>
                        </div>
                    </div>
                    {/* topics 2*/}

                    {activitiesList.length > 0 && activitiesList.map((act,i)=>{
                        return (<div key={i} className="topics border border-white rounded px-1 py-2 my-3 cursor-pointer">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name={`checkbox${i}`}  checked={completedIndx[i]} onChange={handleCheckboxChange}/>
                                <span data-bs-dismiss="offcanvas"><Link to={`/activity/${i+1}`}>{act.activityName}</Link></span>
                            </div>
                        </div>)
                    })}

                </div>
            </div>
        </>
    )
}

export default Sidebar