import React, { useContext } from 'react';
import Footer from '../Footer/Footer';
import './Delivery.css';
import bike from '../../images/delivery.png';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useState } from 'react';
import logo from '../../grillNFishLogo.png'
import { AddressContext } from '../../App';

const getSteps = ()=> {
    return ['Order Placed', 'Food Preparing', 'On the way'];
  }

const Delivery = () => {

    const [activeStep] = useState(1);
    const steps = getSteps();

    const [info]=useContext(AddressContext);
    console.log(info.address);
    return (
        <>
        <div className="deliveryArea">

        <div className="mapArea">
          <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=gulshan+(GrillNFish)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
       
        </div>

            <div className="raider">
                <img src={bike} alt="grillNFish"/>
                <div >
                    <Stepper activeStep={activeStep} className="bar">
                        {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                        })}
                    </Stepper>
                 </div>
                 <h5 id="thanksMsg">Thanks for choosing grillNFish</h5>
                 <img src={logo} alt=""/>
            </div>

        </div>
        <Footer></Footer>
        </>
    );
};

export default Delivery;