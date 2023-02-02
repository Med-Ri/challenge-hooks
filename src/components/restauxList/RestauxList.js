import React from 'react'
import AddModal from '../AddModal'
import RestauxCard from '../RestauxCard/RestauxCard'
import './resteauxList.css'

const RestauxList = ({filtredRestaux}) => {
  return (
    <>
    <div className='lista'>
        {filtredRestaux.map((el)=> <RestauxCard el={el} ></RestauxCard>)}
        
    </div>
   
     </>
  )
}

export default RestauxList