import { Chip, Hidden, makeStyles, Paper } from "@material-ui/core";
import { Handle } from "react-flow-renderer";
import { ButtonCustom } from "../../../../components/sharedComponents/Buttons/ButtonOutlined";
const useStyles = makeStyles((theme) => ({
    handleStyle: {
        width:'14px',
        height:'14px',
        border:'none',
    
        bottom: '-7px',
        left: '50%',
        top: 'auto',
        transform: 'translate(-50%)',
    },
    handleStyleTop: {
        width:'14px',
        height:'14px',
        border:'none',
    
        top: '-7px',
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
    },
    textWrapper:{
        maxHeight:'60px',
        // height:'60px',
        overflow:'hidden',
        // overflowY: 'scroll',
        textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
        display: '-webkit-box',
        boxOrient: 'vertical',
        lineClamp: 3,
        "&:hover":{
            display:'block',
            overflow:'auto',
        }
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
export const MessageNode = ({ data }) => {
    const classes = useStyles();
    return (
      <div className={classes.customNodeStyles}>
        <div className={classes.nodeHeader}>
            <Chip size='small' label="Node Type" color="secondary" />
            <Chip size='small' label="Number" color="primary" />
        </div>
        <div>
            <Paper>
                <p className={classes.textWrapper}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat at inventore quae illo velit dolorem hic aliquam ea alias voluptas nisi, dolore quam nesciunt error natus animi. Ex culpa ullam magni. Enim illum illo exercitationem inventore dolore nemo officia laboriosam tenetur blanditiis placeat! Voluptate dolore et, esse est recusandae in maxime natus itaque nesciunt aperiam molestiae maiores reprehenderit iusto blanditiis. Voluptate eligendi commodi atque ipsum nostrum doloribus culpa obcaecati cupiditate aliquam beatae suscipit, deleniti assumenda, blanditiis ad optio modi minima totam incidunt veniam officiis aut aspernatur in unde. Ut soluta ducimus earum, deleniti quisquam veia eligendi incidunt error similique, ipsam hic sapiente animi ullam provident ab assumenda repellendus quis ipsa possimus aliquid inventore velit, reprehenderit eum maxime ex! Ab nihil accusamus provident deleniti itaque pariatur quos doloribus architecto obcaecati eaque exercitationem voluptate vel accusantium optio sapiente illum quaerat aspernatur consectetur, qui aliquid quis laboriosam! Recusandae distinctio, voluptas similique maxime adipisci accusantium veritatis nulla vitae vero blanditiis ea reiciendis nobis! Quas asperiores porro cumque blanditiis laudantium! Cum, impedit? Obcaecati provident officia quo! Blanditiis nisi eum ipsum vero ducimus sed nam beatae fugiat accusantium? Qui voluptas blanditiis itaque, optio nesciunt necessitatibus at, aut ipsa, assumenda esse tenetur veritatis illum corporis temporibus dolor sunt et. Harum reiciendis veniam blanditiis fugiat aut dolorum! Laborum, minus officia quam tenetur consequatur praesentium delectus. Unde perferendis ad sit eaque nesciunt. Quia non maxime odit nam accusantium. Temporibus odit sed exercitationem commodi voluptatum ullam nam porro impedit molestias laudantium velit perferendis culpa, iure excepturi, cupiditate iste est debitis aspernatur. Nihil possimus maxime accusamus obcaecati numquam alias repellat quis sapiente vel consequatur. Distinctio iure voluptatum quibusdam?
                </p>
          </Paper>
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