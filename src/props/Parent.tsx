// import {Child} from './Child';
import { ChildAsFC } from './Child';

const Parent = () => {
    return (
        <ChildAsFC color="green" onClick = {() => console.log('Clicked!') }> 
            Jesus
        </ChildAsFC>
    )
};

export default Parent;