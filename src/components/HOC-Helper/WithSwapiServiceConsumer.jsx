import React from 'react'
import {SwapiServiceConsumer} from '../SwapiServiceContext/SwapiServiceContext'

const WithSwapiServiceConsumer = (Wrapped) => {
    return (props) => {
        return(
                <SwapiServiceConsumer>
                    {
                        (SwapiService) => {
                            return (
                                <Wrapped {...props} SwapiService={SwapiService}/>
                            )
                        }
                    }
                </SwapiServiceConsumer>
            )  
    }
}
export default WithSwapiServiceConsumer