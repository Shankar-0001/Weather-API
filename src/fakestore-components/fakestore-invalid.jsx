import { Link } from "react-router-dom";


export function FakestoreInvalid(){
    return(
        <div>
            <h2 className="text-danger">Invalid Credential</h2>
            <Link to='/'>Try Again</Link>
        </div>
    )
}