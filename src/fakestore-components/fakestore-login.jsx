import { useFormik } from "formik";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function FakeStoreLogin() {

    const [userDetails] = useState({ UserId: 'admin', Password: 'admin@123' });

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: ''
        },
        onSubmit: (user) => {
            if (user.UserName === userDetails.UserId && user.Password === userDetails.Password) {
                navigate('/home');
            } else {
                navigate('/invalid');
            }

        }
    })

    return (
        <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
                <h2 className="bi bi-person-fill">User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>password</dt>
                    <dd><input type="password" className="form-control" name="Password" onChange={formik.handleChange} /></dd>
                </dl>
                <button className="form-control w-100 bg-primary">Login</button>
            </form>
        </div>
    )
}