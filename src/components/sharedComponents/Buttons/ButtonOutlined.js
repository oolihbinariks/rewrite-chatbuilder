import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root:{
        // fontWeight: "700",
        // lineHeight:'1.3em',
        // textDecoration: "none",
        textTransform: "capitalize",
        // padding: "5px 40px",
        // '&:hover':{
        //     textDecoration: "none",
        // }
    },
    buttonOutlined:{
        color: "#fff",
        backgroundColor:'transparent',
        border: "solid 2px #fe579d",
        borderRadius: "30px",
        '&:hover':{
          backgroundColor: "#fe579d",
          color: "#fff",
          border: "solid 2px #fe579d",
        },
    }, 
    buttonContained:{
        color: "#000",
        borderRadius: "30px",
        '&:hover':{
            backgroundColor: "#000",
            color: "#fff",
          }
    },
}))

// export const ButtonCustom = withStyles({
//     root:{
//         // fontWeight: "700",
//         // lineHeight:'1.5em',
//         // textDecoration: "none",
//         // textTransform: "capitalize",
//         // padding: "5px 40px",
//         // '&:hover':{
//         //     textDecoration: "none",
//         // }
//     },
//     buttonOutlined:{
//         color: "#fff",
//         backgroundColor:'transparent',
//         border: "solid 2px #fe579d",
//         borderRadius: "30px",
//         '&:hover':{
//           backgroundColor: "#fe579d",
//           color: "#fff",
//           border: "solid 2px #fe579d",
//         },
//     }, 
//     buttonContained:{
//         color: "#000",
//         borderRadius: "30px",
//         '&:hover':{
//             backgroundColor: "#000",
//             color: "#fff",
//           }
//     },
//   })(Button)

export const ButtonCustom = (props) => {
    const classes = useStyles()
    const variant = props.variant;
    const classVariant = (variant==="outlined") ? classes.buttonOutlined : (variant==="contained")  ? classes.buttonContained : "";
    const classButton = `${classes.root} ${classVariant} ${props.className}`;
    return (
            <Button {...props} className={classButton} > {props.children} </Button>
    )
}
