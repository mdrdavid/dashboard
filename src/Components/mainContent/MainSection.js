import React from 'react'
import './mainsection.css'
// import './SideBar.css'
import {SiGoogleanalytics} from 'react-icons/si'

const MainSection=() =>{
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='date'><input type='date'></input></div>
      <div className='insights'>
        <div className='sales'>
          <span><SiGoogleanalytics/> </span>
          <div className='middle'>
            <div className='left'>
              <h3>Total Sales</h3>
              <h1>$25,024</h1>
            </div>
            <div className='progress'>
              <svg>
                <circle cx='38'cy='38' r='36'></circle>
              </svg>
              <div className='number'>
                <p>81%</p>
              </div>
            </div>
          </div>
            <small className='text-muted'>Last 24 Hours</small>
        </div>
        {/* --------------------------END OF SALES---------------- */}
        <div className='expenses'>
          <span><SiGoogleanalytics/> </span>
          <div className='middle'>
            <div className='left'>
              <h3>Total Expense</h3>
              <h1>$14,679</h1>
            </div>
            <div className='progress'>
              <svg>
                <circle cx='38'cy='38' r='36'></circle>
              </svg>
              <div className='number'>
                <p>62%</p>
              </div>
            </div>
          </div>
            <small className='text-muted'>Last 24 Hours</small>
        </div>
        {/* ---------------------END OF EXPENSES--------------------- */}
        <div className='income'>
          <span><SiGoogleanalytics/> </span>
          <div className='middle'>
            <div className='left'>
              <h3>Total Income</h3>
              <h1>$10,864</h1>
            </div>
            <div className='progress'>
              <svg>
                <circle cx='38'cy='38' r='36'></circle>
              </svg>
              <div className='number'>
                <p>44%</p>
              </div>
            </div>
          </div>
            <small className='text-muted'>Last 24 Hours</small>
        </div>
      </div>
      <div className='recent-orders'>
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Faldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
            <tr>
              <td>Faldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
            <tr>
              <td>Faldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
            <tr>
              <td>Faldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
            <tr>
              <td>Faldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
            <tr>
              <td>Faldable Mini Drone</td>
              <td>85631</td>
              <td>Due</td>
              <td className='warning'>Pending</td>
              <td className='primary'>Details</td>
            </tr>
          </tbody>
        </table>
        <a href='#'>Show All</a>
      </div>
    </div>
  )
}
export default MainSection
