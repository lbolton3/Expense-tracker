import { useEffect, useState } from "react"



export const WindowSize = () =>{
    const [size,setSize] = useState([0,0])

    useEffect(() =>{
        const reSize = () =>{
            setSize([window.innerWidth,window.innerHeight])
        }
        window.addEventListener('resize',reSize)

        return () => window.removeEventListener('resize', reSize)

    },[])
    return{
        width: size[0],
        height: size[1]
    }
}