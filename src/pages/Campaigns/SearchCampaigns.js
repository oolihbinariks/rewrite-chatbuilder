import React from 'react'
import { makeStyles, MenuItem, Paper } from '@material-ui/core'
import { StyledInput } from '../../components/sharedComponents/Inputs/InputCustom'
import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined';
const useStyles = makeStyles((theme)=> ({
    wrapperSearch:{
        padding:'40px 0',
        background:'#e6e6e6',
        marginBottom:theme.spacing(2),
        boxShadow:theme.shadows[5],
        borderRadius:'15px',
    },
    wrapperInputs:{
        padding:`0 ${theme.spacing(1)}px`,
        display:'flex',

        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexDirection:'column',
        },
    },
    inputItem:{
        [theme.breakpoints.down('sm')]:{
            marginBottom:theme.spacing(1),
        },
        marginRight:theme.spacing(1),
    },
}))
const statuses = [
    {
      value: 'Status',
      label: 'Status',
    },
    {
      value: 'Active',
      label: 'Active',
    },
    {
      value: 'Schedule',
      label: 'Schedule',
    },
    {
      value: 'Dispatched',
      label: 'Dispatched',
    },
  ];

const sortes = [
    {
        value:'Sort',
        label:'Sort'
    },
    {
        value:'NameAsc',
        label:'Name Ascending'
    },
    {
        value:'NameDesc',
        label:'Name Descending'
    },
    {
        value:'DateAsc',
        label:'Date Ascending'
    },
    {
        value:'DateDesc',
        label:'Date Descending'
    },
]

const SearchCampaigns = () => {
    const classes = useStyles()
    const [status, setStatus] = React.useState('Status');
    const [sort, setSort] = React.useState('Sort');

    const handleStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleSort = (event) => {
        setSort(event.target.value);
    };
    return (
        <Paper className={classes.wrapperSearch} elevation={5}>
                <form noValidate>
                    <div className = {classes.wrapperInputs}>
                        <StyledInput 
                            fullWidth 
                            className={classes.inputItem} 
                            size = 'small' 
                            id="sss" 
                            type="search" 
                            label='Search' 
                            variant="outlined" 
                        />
                
                        <StyledInput 
                            fullWidth 
                            className={classes.inputItem} 
                            size = 'small'  
                            select 
                            id="outlined-search" 
                            value={status} 
                            type="select" 
                            variant="outlined" 
                            onChange={handleStatus}>
                            {statuses.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </StyledInput>
                
                        <StyledInput 
                            fullWidth 
                            className={classes.inputItem}
                            variant='outlined' 
                            id="date"
                            size='small'
                            label="From"
                            type="date"
                            format="dd/MM/yyyy"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <StyledInput 
                            fullWidth 
                            className={classes.inputItem}
                            variant='outlined' 
                            id="date"
                            size='small'
                            label="To"
                            type="date"
                            format="dd/MM/yyyy"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <StyledInput 
                            fullWidth 
                            className={classes.inputItem} size = 'small'  
                            select 
                            id="outlined-search" 
                            value={sort} 
                            type="select" 
                            variant="outlined" 
                            onChange={handleSort}
                        >
                            {sortes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </StyledInput>
                        <ButtonCustom variant='contained'  color='secondary'>Search</ButtonCustom>
                    </div>               
                </form>
            </Paper>
    )
}

export default SearchCampaigns
