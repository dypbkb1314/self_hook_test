
import {useSelector} from 'react-redux';
function Self(){
    const name = useSelector(state => state.name)
    return (
        <span>{name}</span>
    )
}
export default Self