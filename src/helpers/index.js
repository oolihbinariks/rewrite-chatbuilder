import { useSelector } from "react-redux"
import { getAuthToken } from "../store/selectors/authSelectors"
// import { useHistory } from "react-router-dom";


// export const redirectTo = (to) => {
//     // let history = useHistory();
//     history.push(to);
// }
export const useToken = ()=>{
    const token = useSelector(state => getAuthToken(state))
    return({...token})
}