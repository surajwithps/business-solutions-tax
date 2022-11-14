import React from 'react'
import {FaFileInvoiceDollar, FaUserFriends, FaRegClock} from 'react-icons/fa'
import {AiTwotoneReconciliation} from 'react-icons/ai'
import {SiReadthedocs} from 'react-icons/si'
// import { Box, Flex, Spacer, Text, Center } from "@chakra-ui/react"


const Navbar = () => {
  let x = {marginRight:'7px'}
  return (

<div style={{width:'80%', margin:'auto'}}>
  <div className='nav_main'>
    <div><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" alt="logo" /></div>
    <div>
    <ul>
      <li>Product
        <ul className='product_ul'>
          <li className='product_ul_1st_subdrop'>
            <h3>Bonsai Workflow</h3>
             <p>Look Professional, Win More Clients and manage your business from one place</p>
             <div className='product_opt_ch1_sub_menu'>
              <ul>
                <li>
                  <h4>Invoices</h4>
                  <FaFileInvoiceDollar style={x}/>
                  Get paid faster with automatic invoicing, online payments and more
                </li>
                  
                <li>
                   <h4>Proposals</h4>
                  <SiReadthedocs style={x}/>
                   Create client-winning proposals with open receipts, custom packages and electronic approvals
                </li>
                <li>
                  <h4>Contracts</h4>
                  <AiTwotoneReconciliation  style={x}/>
                   Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.
                  </li>
                <li>
                  <h4>Client CRM</h4>
                  <FaUserFriends style={x}/>
                   Add leads, manage existing clients and track projects easily from one place
                </li>
                <li>
                  <h4>Forms &amp; Automations</h4>
                  <FaFileInvoiceDollar style={x}/>
                  Boost client intake and automate feedback with custom web forms and questionnaires
                  </li>
                <li>
                  <h4>Time Tracking</h4>
                  <FaRegClock style={x}/>
                  Stay organized with Bonsai’s all-in-one time tracker, automated timesheets and billing system
                  </li>
                <li>
                  <h4>Accounting</h4>
                  <FaFileInvoiceDollar style={x}/>
                  Manage your finances easily with income reports, expense tracking, tax reminders and more
                  </li>
                <li>
                  <h4>Task Tracking</h4>
                  <FaFileInvoiceDollar style={x}/>
                  Stress-free task management with project templates and integrated timesheets
                </li>
                
              </ul>
                
             </div>
          </li>
             
          <li>
            <h3>Bonsai Tax</h3>
            <p>Track expanses and maximize tax rightoffs and estimate taxes without the headache</p>
          </li>
          <li>
          <h3>Bonsai Cash</h3>
            <p>Bonsai's all-in-one financial hub: and No fees and lighting fast payouts</p>
          </li>
           
        </ul>
      </li>
      <li>Templates</li>
      <li>Pricing</li>
      <li>Reviews</li>
    </ul>
    </div>

    <div>
      <button>Log In</button>
      <button>Start Free</button>
    </div>
  </div>
   
  
 </div>

  )
}

export default Navbar