import React from 'react'
import ReactFlow, { addEdge, removeElements } from 'react-flow-renderer';
import { Checkbox, Fab, FormControlLabel, FormGroup, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import BreadcrumbsTemplates from '../../../../components/sharedComponents/Breadcrumbs/BreadcrumbsTemplates'
import { StyledInput } from '../../../../components/sharedComponents/Inputs/InputCustom';
import { MessageNode, StartNode } from '../../../../store/actions/QuestionsActions/NodeTypes/NodeTypes';
import AddIcon from '@material-ui/icons/Add';
// import { setElements } from 'react-flow-renderer/dist/store/actions';
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
  }));



const responseType = [
  {
    value:'mesage',
    label:'Message'
  },
  {
    value:'inputText',
    label:'Text Input'
  },
  {
    value:'singleChoice',
    label:'Single Choice'
  },
  {
    value:'condition',
    label:'Condition step'
  },
]
const initialState = [
  {
    id: '1',
    type: 'start', // input node
    position: { x: 600, y: 0 },
  },
  {
    id: '2',
    type: 'message', // input node
    data: { 
      label: 'Input Node',
    },
    position: { x: 540, y: 200 },
  },
  {
    id: '3',
    type: 'message', // input node
    data: { 
      label: 'Input Node',
    },
    position: { x: 540, y: 400 },
  },
  
];



const nodeTypes = {
  start: StartNode,
  message: MessageNode
}

const Question = () => {
    const classes = useStyles();
    const [elements, setElements] = React.useState(initialState);
    // const handleChange = (event) => {
    //   setSelectedValue(event.target.value);
    // };
    const onConnect = (params) => {
      setElements((els)=> addEdge(params, els))
    }
    const onElementsRemove = (elementsToRemove) => {
      setElements((els)=> removeElements(elementsToRemove, els))
    }
    return (
        <div className = "wrapper">
          <div className={classes.headerPage}>
            <BreadcrumbsTemplates />
            <Typography variant='subtitle1' component='p'>
              Template interactions
            </Typography>
          </div>
          <Grid container className={classes.manageQuestion}>
              <Grid item xs={12} sm={3} className={classes.leftManageQuestion}>
                <Paper className={classes.schema} >
                    Add step dialog <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
                    <form>
                      <div className={classes.inputsWrapper}>
                        <div>
                          <Typography>
                            Choose type of response
                          </Typography>
                          <StyledInput 
                          className={classes.inputItem}
                            type='text'
                            variant='outlined' 
                            size='small'
                            SelectProps={{
                              native: true,
                            }}
                            select
                          >
                              {responseType.map(response=>(
                                <option key={response.value} value={response.value} >
                                  {response.label}
                                </option>
                              ))}
                          </StyledInput>
                        </div>
                        <div>
                        <FormGroup aria-label="position" row>
                          <FormControlLabel
                            value="endAction"
                            control={<Checkbox color="primary" />}
                            label="This is last interaction"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="endAction"
                            control={<Checkbox color="primary" />}
                            label="Send response to email"
                            labelPlacement="end"
                          />
                        </FormGroup>
                        </div>
                      </div>
                    </form>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={9} className={classes.rightManageQuestion}>
                <ReactFlow 
                  nodeTypes={nodeTypes} 
                  onConnect={onConnect}
                  onElementsRemove={onElementsRemove}
                  className = {classes.reactFlow}
                  elements={elements} 
                />
              </Grid>
          </Grid>
      </div>
    )
}

export default Question
