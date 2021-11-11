import { Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import ProgressIcon from '../../assets/images/progress-icon.png'
import { getStepType } from '../../store/selectors/campaignsSelectors'
import './Stepper.css'

export const Stepper = ({percent='1'}) => {
    let addClass = useSelector(state => getStepType(state)) || ''
    return (
        <div className='stepperContainer'>
            <div  className='proggresContainer'>
                <div>
                    <img src={ProgressIcon} alt='progress' /> 
                    <Typography variant='button' component='span'>Progress</Typography> 
                </div>
                <Typography className='progressPercent' variant='h4' component='p'>{percent}%</Typography>
            </div>
            <div className= 'cont'>
                    <div className='contSteps'>
                        <div className='blockOne'>
                            <div className='textBlock'>
                                <div className='textBlockInner'>
                                    <Typography variant='h6' component='h4'> Step 1 </Typography>
                                    <Typography variant='body2' component='p'>Set up your first campaign</Typography>
                                </div>
                            </div>
                        </div>
                        <div className='blockTwo'>
                            <div className='textBlock'>
                                <div className='textBlockInner'>
                                    <Typography variant='h6' component='h4'> Step 2 </Typography>
                                    <Typography variant='body2' component='p'>Set up target audience</Typography>
                                </div>
                            </div>
                        </div>
                        <div className='blockThree'>
                            <div className='textBlock'>
                                <div className='textBlockInner'>
                                    <Typography variant='h6' component='h4'> Step 3 </Typography>
                                    <Typography variant='body2' component='p'>Dispatch first campaign</Typography>
                                </div>
                            </div>
                        </div>
                        <div className={`${addClass}`}>
                        </div>
                    </div>
            </div>
        </div>
    )
}
