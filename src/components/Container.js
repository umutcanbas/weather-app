import React from 'react'
import DayList from './DayList'
import DropDown from './DropDown'

export const Container = ({ children }) =>{
  return (
    <div>
        <DropDown/>
        <DayList/>
    </div>
  )
}

export default Container