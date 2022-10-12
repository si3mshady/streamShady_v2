import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Player.css'
import { Link, useLocation} from 'react-router-dom'

import { Card , Row, Col} from 'antd';


export default function Home() {


  const [videoData,setVideoData] = useState([])

  const url = `http://${process.env.REACT_APP_IPV4}:4000`

  // const url = "http://localhost:4000"


  // const url = "http://54.174.109.85:4000"

 
  useEffect( () => {
    const loadHomePage = async () => {
       const data = await axios.get(url + '/init')
      setVideoData(data.data)
    
    }

    loadHomePage()
      
  },[])


  return (
    <div className='mainContainer'>

      <div className='mainContainer_player'>
          {videoData.map((data,i) => (

            <Row >
                <Col >
                  <Link to={`/player/${data.id}`} state={data} >
                    <Card key={i} title="Now Streaming"  style={{ padding: "20px",margin: "10px" }}>
                        <p>{data.name}</p>
                        <img style={{width: "100% !important"}} src={`${url}${data.thumbnail}/`} />
                      </Card>
                  </Link>
                    
                </Col>

            </Row>
                  
          ))}

{/*  */}


      </div>
    
    </div>
  )
}

