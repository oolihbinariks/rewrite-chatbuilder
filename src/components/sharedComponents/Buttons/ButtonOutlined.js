import React, { useState } from 'react'
import { Button } from '@material-ui/core'
const styleBtn = {
    buttonOutlined:{
        textTransform: "capitalize",
        backgroundColor:'transparent',
        border: "solid 2px #fe579d",
        borderRadius: "30px",
        
    }, 
    buttonOutlinedHover:{
        textTransform: "capitalize",
        borderRadius: "30px",
        backgroundColor: "#fe579d",
        border: "solid 2px #fe579d",
    },
    buttonContained:{
        textTransform: "capitalize",
        color: "#000",
        borderRadius: "30px",
    },
    buttonContainedHover:{
        textTransform: "capitalize",
        borderRadius: "30px",
        backgroundColor: "#000",
        color: "#fff",
      },
}

export const ButtonCustom = (props) => {
    const [hover, setHover] = useState(false);
    const variant = props.varianttrig;
    return (
            <Button 
                {...props} 
                style={(hover && variant==="outlined")? styleBtn.buttonOutlinedHover: (hover && variant==="contained")? styleBtn.buttonContainedHover: (variant==="contained")? styleBtn.buttonContained: (variant==="outlined")? styleBtn.buttonOutlined: null}
                onMouseEnter = {()=>setHover(true)}  
                onMouseLeave = {()=>setHover(false)}  
            > {props.children} </Button>
    )
}
