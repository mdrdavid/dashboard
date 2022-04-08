import React from 'react'
import './SideBar.css'
import {AiOutlineClose} from 'react-icons/ai'
import{MdDashboard} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdReportGmailerrorred} from 'react-icons/md'
import {AiOutlineOrderedList} from 'react-icons/ai'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import logo from '../../images/logo.jpg'
import MainSection from '../mainContent/MainSection'
import RightSection from '../rightSection/RightSection'

const LeftSideMenu =()=>{
    return (
        <div className='container'>
            <aside className=''>
            <div className='top'>
                <div className='log'>
                    <img src={logo} alt='logo' width={100}></img>
                    <h2>EG <span className='danger'>ATOR </span></h2>
                </div>
                <div className='close' id='close-btn'>
                <span class="material-icon"><AiOutlineClose/></span>
                </div>
                </div>
                <div className='sidebar'>
                    < a href='#'>
                    <span className='material-icon'><MdDashboard/> </span>
                    <h3>Dashboard</h3></a>
                    < a href='#' className='active'>
                    <span className='material-icon' ><BsFillPersonFill/> </span>
                    <h3 >Customers</h3></a>
                    < a href='#'>
                    <span className='material-icon'><AiOutlineOrderedList/> </span>
                    <h3>Orders</h3></a>
                    < a href='#'>
                    <span className='material-icon'><BsFillPersonFill/> </span>
                    <h3>Analytics</h3></a>
                    < a href='#'>
                    <span className='material-icon'><BiMessageRoundedDetail/> </span>
                    <h3>Messages</h3><span className='message-count'>26</span></a>
                    < a href='#'>
                    <span className='material-icon'><BsFillPersonFill/> </span>
                    <h3>Products</h3></a>
                    < a href='#'>
                    <span className='material-icon'><MdReportGmailerrorred/> </span>
                    <h3>Reports</h3></a>
                    < a href='#'>
                    <span className='material-icon'><FiSettings/> </span>
                    <h3>Settings</h3></a>
                    < a href='#'>
                    <span className='material-icon'><BsFillPersonFill/> </span>
                    <h3>Add Products</h3></a>
                    < a href='#'>
                    <span className='material-icon'><BsFillPersonFill/> </span>
                    <h3>Logout</h3></a>
                    
               
            </div></aside>
            <main>
                <MainSection/>
            </main>
                <RightSection/>

        </div>
    )
}
export default LeftSideMenu