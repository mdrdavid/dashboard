import React from 'react'
import '../mainContent/mainsection.css'
import logo from '../../images/logo.jpg'
import {BiMenu} from 'react-icons/bi'
import {BsFillMoonFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import {FcShop} from 'react-icons/fc'
import {IoMdAdd} from 'react-icons/io'
import {BsPersonFill} from 'react-icons/bs'


const RightSection=()=> {
  return (
    <div>
        <div className='right'>
              <div className='top'>
                  <button id='munu-btn'>
                      <span><BiMenu /></span>
                  </button>
                  <div className='theme-toggler'>
                      <span className='material-icons active'><BsFillMoonFill /></span>
                      <span className='material-icons'><BsFillSunFill /></span>
                  </div>
                  <div className='profile'>
                      <div className='info'>
                          <p>Hey, <b>David</b></p>
                          <small className='text-muted'>Admin</small>
                      </div>
                      <div className='profile-photo'>
                          <img src={logo} alt='profile-photo' width={50} height={50} />
                      </div>
                  </div>
              </div>
                {/* ===== END OF TOP==== */}
                <div className='recent-updates'>
                    <h2>Recent Updates</h2>
                    <div className='updates'>
                        <div className='profile-photo'>
                        <img src={logo} alt='profile-photo' width={50} height={50}/>
                        </div>
                        <div className='message'>
                            <p><b> Charles Kato</b> received his order OF
                            Night Lion tech GPS drone</p>
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                        <div className='update'>
                        <div className='profile-photo'>
                        <img src={logo} alt='profile-photo' width={50} height={50}/>
                        </div>
                        <div className='message'>
                            <p><b> Nabusai Mary</b> received her order OF
                            Techno Spark 8 Phone</p>
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className='update'>
                        <div className='profile-photo'>
                        <img src={logo} alt='profile-photo' width={50} height={50}/>
                        </div>
                        <div className='message'>
                            <p><b> david Matovu</b> received his order OF
                            Dello  smart laptop</p>
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>
                    </div>
                </div>
                {/* ======END OF RECENT UPDATES===== */}
                <div className='sales-analytics'>
                    <h2>Sales Analytics</h2>
                    <div className='item online'>
                        <div className='icon'>
                            <span className='material-icon'><BsPersonFill/></span>
                        </div>
                        <div className='right'>
                            <div className='info'>
                                <h3>NEW CUSTOMERS</h3>
                                <small className='text-muted'>Last 24 Hours</small>
                            </div>
                            <h5 className='success'>+25%</h5>
                            <h3>849</h3>
                        </div>
                    </div>
                    <div className='item customers'>
                        <div className='icon'>
                            <span className='material-icon'><FiShoppingCart/></span>
                        </div>
                        <div className='right'>
                            <div className='info'>
                                <h3>ONLINE ORDERS</h3>
                                <small className='text-muted'>Last 24 Hours</small>
                            </div>
                            <h5 className='success'>+39%</h5>
                            <h3>3849</h3>
                        </div>
                    </div>
                    <div className='item online'>
                        <div className='icon'>
                            <span className='material-icon'><FcShop/></span>
                        </div>
                        <div className='right'>
                            <div className='info'>
                                <h3>OFFLINE ORDERS</h3>
                                <small className='text-muted'>Last 24 Hours</small>
                            </div>
                            <h5 className='danger'>-17%</h5>
                            <h3>1100</h3>
                        </div>
                    </div>
                    <div className='item add-product'>
                        <div>
                            <span className='material-icon add'><IoMdAdd/></span>
                            <h3>Add Products</h3>
                        </div>
                    </div>
                </div>
        </div>
       </div>
  )
}
export default RightSection
