import React, { useState } from 'react'
import './FilterButtons.css'
export default function FilterButtons({onFilterChange}) {
    const[isActive,setIsActive]=useState('all');
  return (

   <>
    <section id="filter-btns">
            <div className="container">
                <button onClick={() =>{onFilterChange('all'); setIsActive('all')} } className={isActive === 'all' ? 'active' : ''}>ALL</button>
                <button onClick={() => {onFilterChange('Smartwatch'); setIsActive('Smartwatch')}}className={isActive === 'Smartwatch' ? 'active' : ''}>Smart watch</button>
                <button onClick={() => {onFilterChange('BluetoothSpeaker'); setIsActive('BluetoothSpeaker')}}className={isActive === 'BluetoothSpeaker' ? 'active' : ''}>Bluetooth Speaker</button>
                <button onClick={() => {onFilterChange('WirelessEarbuds'); setIsActive('WirelessEarbuds') }}className={isActive === 'WirelessEarbuds' ? 'active' : ''}>Wireless Earbuds</button>
            </div>
        </section>
   </>
  )
}