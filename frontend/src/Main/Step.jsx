import React from 'react'
import './Step.css'
import Step1 from '../Assests/image/Step1.jpeg'
import Step2 from '../Assests/image/Step2.jpeg'
import Step3 from '../Assests/image/Step3.jpeg'
import Step4 from '../Assests/image/Step4.jpeg'

const Step = () => {
  return (
    <div className='Step'>
        <h1>How Online Doctor Consultation Works ?</h1>
        <div className='Step1'>
            <div className='Step-image'>
                <img src={Step1} alt="" />
            </div>
            <div className='Step-text'>
                <h1>0 1</h1>
                <h2>Start a Session</h2>
                <p>Identification of disease as per the symptoms</p>
            </div>
        </div>
        <div className='Step2'>
            <div className='Step-text'>
                <h1>0 2</h1>
                <h2>Tell Us What's Troubling You</h2>
                <p>Getting Online or digital prescription as per the disease identified</p>
            </div>
            <div className='Step-image'>
                <img src={Step2}  alt="" />
            </div>
        </div>
        <div className='Step1'>
            <div className='Step-image'>
                <img src={Step3}  alt="" />
            </div>
            <div className='Step-text'>
               <h1>0 3</h1>
                <h2>Connect With The Doctor</h2>
                <p>Now According to The Disease identified prescribe a proper doctor online</p>
            </div>
        </div>
        <div className='Step2'>
            <div className='Step-text'>
              <h1>0 4</h1>
              <h2>Follow Up With Your Doctor</h2>
                <p>Keeping Touch With the doctors until the medical force paid is over</p>
            </div>
            <div className='Step-image'>
                <img src={Step4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Step