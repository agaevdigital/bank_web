import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";


const CommonButton = withStyles({
 root: {
     background: '#FF9B0F',
     borderRadius: 50,
     border: 0,
     color: 'white',
     //height: 36,
     padding: '2px 10px 2px 10px',
     transition: 'box-shadow 0.2s linear',
     margin: '5px 5px 5px 5px',
     '&:hover': {
         boxShadow: '0 0 2px 5px #FFECD2',
         background: '#FF9B0F',
     },
 },
 label: {
     textTransform: 'none',
     fontSize: 18
 },
})(Button);

export default CommonButton;