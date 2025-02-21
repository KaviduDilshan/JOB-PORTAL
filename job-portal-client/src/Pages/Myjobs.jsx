import React,{useEffect,useState} from 'react'

const Myjobs = () => {
    const [jobs,setJobs] = useState([])
    const [searchText, setSerachText] = useState("")
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:3000/my-jobs/dilshank404@gmail.com").then(res => res.json()).then(data => {
          setJobs(data)
        })
    },[])



  return (
    <div className='max-w-2xl container ma-auto xl:px-24 px-4'>Myjobs:{jobs.length}</div> 
  )
}

export default Myjobs