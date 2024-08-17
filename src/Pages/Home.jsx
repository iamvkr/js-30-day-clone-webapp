import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Context/MyContext';

const Home = () => {
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
            .then(res => res.json())
            .then(data => {
                setactivitiesList(data)
            })
    }, [])
    const pageStyle = {
        container: {
            height: "90vh"
        },
        leftSideBar: {
            width: "25%"
        }
    }
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

                        {activitiesList.length > 0 && activitiesList.map((act, i) => {
                            return (<div key={i} className="topics border border-white rounded px-1 py-2 my-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name={`checkbox${i}`} checked={completedIndx[i]} onChange={handleCheckboxChange} />
                                    <span><Link to={`/activity/${i + 1}`}>{act.activityName}</Link></span>
                                </div>
                            </div>)
                        })}


                    </div>
                </div>


                <div className="right" style={{ width: "100%" }}>
                    <div className="text-white p-2 rounded overflow-y-auto scroller" style={{ backgroundColor: "GrayText", height: "88vh" }}>
                        <div className="topics border bg-dark rounded px-1 py-2  min-h-100">
                            <h3 className='my-4 text-center'> <u>Welcome to  JS 30 DAY CHALLENGE</u></h3>
                            <p className='my-4 px-2'>Embark on a comprehensive 30-day JavaScript coding challenge designed to elevate your coding skills from beginner to advanced. Each day, tackle progressively complex tasks, starting with the basics of variables, data types, and operators, and advancing to control structures, functions, and arrays. Master essential concepts like DOM manipulation, event handling, and error handling. Dive into advanced topics, including closures, recursion, and data structures like linked lists, stacks, queues, and binary trees.
                            </p>
                            <p className='my-4 px-2'>- Save Your Progress as you Move Forward!</p>
                            <p className='my-4 px-2'>
                            Solve a variety of LeetCode problems, ranging from easy to hard, to sharpen your problem-solving skills. Engage in hands-on projects like building a weather app, movie search app, chat application, task management app, e-commerce website, and a feature-rich social media dashboard. Throughout the course, enhance your applications with dynamic data fetching, user authentication, and responsive UI design.
                            </p>
                            <p className='my-4 px-2'>
                            By the end of this challenge, you will have a solid understanding of JavaScript and be proficient in building complex web applications. This course is perfect for aspiring developers looking to boost their coding skills and gain practical experience through real-world projects. Join us and transform your JavaScript knowledge into expertise!
                            </p>
                            <p className='text-sm text-center'>
                                <Link to={"/activity/1"} className='btn btn-success'>Get Started</Link>
                            </p>
                            <p className='text-sm text-center'>
                                Source: <a href="https://chaicode.com"><u>chaicode.com</u></a>
                            </p>
                            <div className='text-center'>
                            <img src="https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/171024/schoolLogo/1717484020980logo_lyst1717484021001.png" height={150} alt="logo"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home


