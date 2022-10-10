import {Link, Router,Route, Routes} from 'react-router-dom'
import { FaPlay ,FaHome, FaRegHandPeace,FaInfinity, FaVolumeMute, FaVolumeUp,FaPause} from 'react-icons/fa';

import React, { useRef, useState } from 'react'; 
import Home from './components/Home'
import Player from './components/Player'
import './App.css';
import { Layout,Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {

    const videoRef = useRef(null)
    const [sound,setSound] = useState(false)
    const [loop,setLoop] = useState(false)
  
    const playVideo = () => {
      videoRef.current.play()
    }
    const pauseVideo = () => {
      videoRef.current.pause()
    }
  
  


    return(
        <Layout className='container_prime'>
                <Header style={{textAlign: "center", borderBottom: "1px white solid"}} className='container_prime_header'>
                <p style={{color:"white", fontSize: "1.8rem"}}>Str <i style={{fontSize:'2rem', color: 'white'}} class='fa-solid fa-e'></i> am Shady</p>
               
                </Header>

                <Layout className='container_prime_layer1'>


                <Sider>   
                        
                        <Menu   theme="dark">
                            <Menu.Item><FaPlay onClick={playVideo} className='button-play'/></Menu.Item>
                            <Menu.Item><FaPause onClick={pauseVideo} className='button-pause'/></Menu.Item>
                            <Menu.Item><FaVolumeUp onClick={() => setSound(false)} className='button-volup'/></Menu.Item>
                            <Menu.Item><FaVolumeMute onClick={() => setSound(true)} className='button-voldown'/></Menu.Item>
                            <Menu.Item><FaInfinity onClick={() => setLoop(!loop)} className='button-loop'/></Menu.Item>
                            <Menu.Item> <FaHome onClick={() => window.location.href = '/'} className='button-loop'/> </Menu.Item>
                
                        </Menu>
                </Sider>

                <Content style={{backgroundColor:"black", overflow: "auto"}}>
                
                <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/player/:id" element={ <Player sound={sound} loop={loop} videoRef={videoRef}/>} />

                </Routes>
                </Content>

                
                </Layout>


                <Footer>Footer</Footer>
        </Layout>

    )


}





export default App;

                                                           