import { Avatar, Chip, IconButton, makeStyles, Paper } from "@material-ui/core";
import { Handle } from "react-flow-renderer";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from "react-redux";
import { getStateHoveredElement, getStateRFInstObj } from "../../../../store/selectors/templatesSelectors";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { updateSetElementsForQuestionAction } from "../../../../store/actions/TemplatesActions/templatesActionCreators";
const useStyles = makeStyles((theme) => ({
    handleStyle: {
        width:'12px',
        height:'12px',
        border:'none',
    
        bottom: '-6px',
        left: '50%',
        top: 'auto',
        transform: 'translate(-50%)',
    },
    handleStyleTop: {
        width:'12px',
        height:'12px',
        border:'none',
    
        top: '-6px',
        left: '50%',
        bottom: 'auto',
        transform: 'translate(-50%)',
    },
    startNodeStyles: {
        background: '#eee',
        color: '#000',
        padding: "50px",
        border:'1px #aaa solid',
        borderRadius:'50%'
    },
    customNodeStyles: {
        background: '#efefef',
        color: '#000',
        padding: "10px 20px",
        border:'1px red solid',
        borderRadius:'6px',
        maxWidth:'250px',
      },
    nodeHeader:{
        display:'flex',
        width:'200px',
        justifyContent:'space-between',
        position:'relative',
      },
      textWrapper:{
        maxHeight:'60px',
        overflow:'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        boxOrient: 'vertical',
        lineClamp: 3,
        "&:hover":{
          display:'block',
          overflow:'auto',
        }
      }, 
      numberStyle:{
      width:'40%'
    },
    hoverOptions:{
      display:'flex',
      position:'absolute',
      width:'100%',
      justifyContent:'space-between',
      top:'-300%',
      left:'-7px',
    }
  }));

export const StartNode = () => {
    const classes = useStyles();
    return (
      <div className={classes.startNodeStyles}>
        <div>Start</div>
        <Handle
          type="source"
          position="bottom"
          id="b"
          className={classes.handleStyle}
        />
      </div>
    );
  };
export const MessageNode = ({ id, number, data }) => {
    const classes = useStyles();
    let {category, question } = useParams();
    const dispatch = useDispatch()
    const RFInstObj = useSelector(state => getStateRFInstObj(state.templates))
    const deleteElemHandler = ()=>{
      dispatch(updateSetElementsForQuestionAction({categoryId: category, templateId:question, elements:RFInstObj.elements.filter(
        (element)=>{
          if (element?.target===id || element?.source===id) {
            return false
          } 
          if(element.id===id){
            return false
          }
          return true
        }
      )}))
    }
    const [hoveredElementId, setHoveredElementId] = useState(null)
    const hoveredElement = useSelector(state => getStateHoveredElement(state.templates))
    useEffect(() => {
      setHoveredElementId(hoveredElement)
      
    }, [hoveredElement])
    console.log("Node hoveredElementId", hoveredElementId);
    return (
      <div className={classes.customNodeStyles}>
        <div className={classes.nodeHeader}>
          {(hoveredElementId===id) &&
            <div className={classes.hoverOptions}>
                            <IconButton edge="end" aria-label="delete">
                                <Avatar aria-label="recipe" className={classes.deleteIconPrimary}>
                                    <EditIcon />
                                </Avatar>
                            </IconButton>
                            <IconButton onClick={deleteElemHandler} edge="end" aria-label="delete">
                                <Avatar aria-label="recipe" className={classes.deleteIconPrimary}>
                                    <DeleteIcon />
                                </Avatar>
                            </IconButton>
            </div>
            }
            <Chip size='small' label={data.nodeType} color="secondary" />
            <Chip className={classes.numberStyle} size='small' label={id} color="primary" />
        </div>
        <div>
            <Paper>
                <p className={classes.textWrapper}>
                    {data.message}
                </p>
          </Paper>
          {data.options.map(option=>(
            <Chip label={option.optionText} />
          ))}
        </div>
        {!data.first && <Handle
          type="target"
          position="top"
          id="a"
          className={classes.handleStyleTop}
        />}
        
        <Handle
          type="source"
          position="bottom"
          id="b"
          className={classes.handleStyle}
        />
      </div>
    );
  };