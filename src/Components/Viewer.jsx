import React, { useEffect, useRef, useState } from 'react'

const Viewer = ({content}) => {
    const [c, setc] = useState("");
    const ref  = useRef();
    useEffect(() => {
        if (content) {
            ref.current.innerHTML = content
        }
    }, [content])

    return content ? (<div className='bg-white' ref={ref}></div>):<p className='text-center pt-4'>404 Not Found</p>

}

export default Viewer