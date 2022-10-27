import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-three-column">


                    <div className="service-1">
                        <div>
                            <TbTruckDelivery className='icon' />
                            <h3>Super fast and free Delivery</h3>
                        </div>
                    </div>


                    <div className="service-2">
                        <div className="service-column-2">
                            <div>
                                <MdSecurity className='icon' />
                                <h3>Super Secure Payment System</h3>
                            </div>
                        </div>
                        <div className="service-column-2">
                            <div>
                                <GiReceiveMoney className='icon' />
                                <h3>Super Secure Payment System</h3>
                            </div>
                        </div>
                    </div>


                    <div className="service-3">
                        <div>
                            <RiSecurePaymentLine className='icon' />
                            <h3>Super Secure Payment System</h3>
                        </div>
                    </div>


                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
padding:9rem 0;
.grid{
    grid-gap:4.8rem;
}
.icon{
    width: 7.4rem;
    height: 7.4rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color:  #bb84e8;
}
h3 {
    margin-top: 1.4rem;
    font-size: 1.6rem;
  }
.service-1,
.service-2,
.service-3{
    width:auto;
    display:flex;
    height:25rem;
    text-align: center;
    border-radius: 4rem;
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.service-2{
    gap:4rem;
    background-color:transparent;
    box-shadow:none;

    .service-column-2{
        background: ${({ theme }) => theme.colors.bg};
        display:flex;
        flex-direction:row;
        flex:1;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

        div{
            display:flex;
            justify-content: center;
            align-items: center;
            gap:1rem;
            flex-direction:row;

            
        }
  
    }
}

`

export default Services