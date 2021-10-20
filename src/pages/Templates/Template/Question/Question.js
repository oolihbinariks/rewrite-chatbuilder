import { Checkbox, FormControlLabel, FormGroup, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import BreadcrumbsTemplates from '../../../../components/sharedComponents/Breadcrumbs/BreadcrumbsTemplates'
import { StyledInput } from '../../../../components/sharedComponents/Inputs/InputCustom';
const useStyles = makeStyles((theme) => ({
    headerPage: {
      marginBottom:theme.spacing(3),
    },
    schema:{
      padding:"20px 10px",
    },
    inputItem:{
      minWidth:'250px',
    },
    inputsWrapper:{
      display: 'flex',
      flexDirection:'column',
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
    value:'singleChoiceWithImg',
    label:'Single Choice With Image'
  },
  {
    value:'multipleChoice',
    label:'Multiple Choice'
  },
  {
    value:'date',
    label:'Date'
  },
    {
      value:'dateTime',
      label:'Date & Time'
    },
  {
    value:'video',
    label:'Youtube/Instagram Video'
  },
  {
    value:'gifImg',
    label:'Gif image'
  },
  {
    value:'captureImg',
    label:'Capture image'
  },
  {
    value:'captureMeter',
    label:'Capture meter'
  },
]

const Question = () => {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    return (
        <div className = "wrapper">
          <div className={classes.headerPage}>
            <BreadcrumbsTemplates />
            <Typography variant='subtitle1' component='p'>
              Template interactions
            </Typography>
          </div>
          <div>
              <Paper className={classes.schema} >
                  Your schema
                  <form>
                    <div className={classes.inputsWrapper}>
                      <div>
                        <StyledInput 
                        className={classes.inputItem}
                          type='text'
                          variant='outlined' 
                          multiline 
                          size='small'
                          minRows='5' 
                          maxRows='5' 
                          fullWidth 
                          label='Compose message' 
                        />
                      </div>
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
                        <Typography>
                        This Interaction appears when
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
          </div>
      </div>
    )
}

export default Question
