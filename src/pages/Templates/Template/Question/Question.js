import React, { useCallback, useEffect, useState } from 'react'
import ReactFlow, { addEdge, ControlButton, Controls, MiniMap, ReactFlowProvider, removeElements } from 'react-flow-renderer';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import BreadcrumbsTemplates from '../../../../components/sharedComponents/Breadcrumbs/BreadcrumbsTemplates'
import { MessageNode, StartNode } from './NodeTypes';
import FormAddNodeDialog from './FormAddNodeDialog';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getTemplateCategoryById } from '../../../../store/selectors/templatesSelectors';
import { addHoveredElementAction, deleteHoveredElementAction, setRFIObjectAction } from '../../../../store/actions/TemplatesActions/templatesActionCreators';
const useStyles = makeStyles((theme) => ({
    headerPage: {
      marginBottom:theme.spacing(3),
    },
    schema:{
      padding:"20px 10px",
      height:'100%'
    },
    inputItem:{
      minWidth:'250px',
    },
    inputsWrapper:{
      display: 'flex',
      flexDirection:'column',
    },
    reactFlow: {
      background: '#ddd',
      height:'100%'
    },
    manageQuestion:{
      height:"80%"
    },
    leftManageQuestion:{
      // height:'80vh'
    },
    rightManageQuestion:{
      height:'80vh'
    },
    fab:{
      marginLeft:theme.spacing(2)
    }
  }));



const nodeTypes = {
  start: StartNode,
  message: MessageNode
}

const Question = () => {
    const classes = useStyles();
    let {category, question } = useParams();
    const templateById = useSelector(state => getTemplateCategoryById(state.templates, category, question))
    const [elements, setElements] = useState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const dispatch = useDispatch()
    const onLoad = (_reactFlowInstance) =>{
      setReactFlowInstance(_reactFlowInstance);
    }
    const onConnect = (params) => {
      setElements((els)=> addEdge(params, els))
    }
    const onElementsRemove = (delSelectedElement) => {
      setElements((els)=> removeElements(delSelectedElement, els))
    }
    useEffect(() => {
      setElements(templateById.elements)
      
    },[templateById, reactFlowInstance])
    useEffect(() => {
      dispatch(setRFIObjectAction(reactFlowInstance?.toObject()))
    },[dispatch, onLoad, reactFlowInstance])
   
    const onNodeMouseEnter = (event, node) =>{
      dispatch(addHoveredElementAction(node.id))
    }
    const onNodeMouseLeave = (event, node)=> {
      dispatch(deleteHoveredElementAction())
    }
    
    return (
      <ReactFlowProvider>
        <div className = "wrapper">
          <div className={classes.headerPage}>
            <BreadcrumbsTemplates />
            <Typography variant='subtitle1' component='p'>
              Template interactions
            </Typography>
          </div>
          <Grid container className={classes.manageQuestion}>
              <Grid item xs={12} sm={9} className={classes.rightManageQuestion}>
                <ReactFlow 
                  nodeTypes={nodeTypes} 
                  onConnect={onConnect}
                  onElementsRemove={onElementsRemove}
                  deleteKeyCode={46}
                  className = {classes.reactFlow}
                  elements={elements}
                  onNodeMouseEnter = {onNodeMouseEnter}
                  onNodeMouseLeave = {onNodeMouseLeave}
                  onLoad={onLoad}
                >
                  <Controls>
                    <ControlButton onClick={() => console.log('action')}>
                     B
                    </ControlButton>
                    <ControlButton onClick={() => console.log('another action')}>
                      A 
                    </ControlButton>
                  </Controls>
                  <MiniMap
                    nodeColor={(node) => {
                      switch (node.type) {
                        case 'input':
                          return 'red';
                        case 'default':
                          return '#00ff00';
                        case 'output':
                          return 'rgb(0,0,255)';
                        default:
                          return '#eee';
                      }
                    }}
                    nodeStrokeWidth={3}
                  />
                </ReactFlow>
              </Grid>
              <Grid item xs={12} sm={3} className={classes.leftManageQuestion}>
                <Paper className={classes.schema} >
                      <FormAddNodeDialog elements={elements}/>
                </Paper>
              </Grid>
          </Grid>
      </div>
    </ReactFlowProvider>
    )
}

export default Question
