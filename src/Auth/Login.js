import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";



function Login(){
    const [form, setForm] = useState();
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        const response = await login(form)
        if (response.status == "success") {
            toast.success(response.message);
            setTokenData(response)
            setTimeout(() => {
                navigate("/dashboard")
            }, 1000)
        }
        else {
            toast.error(response.message)
        }
    }
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    



    return(
        <>
            <div className="login">
                <Row className="login_form">
                    <form onSubmit={handleChange}>
                        <input type="email" name="E-mail" placeholder="Enter Your Email Id"/><br/>
                        <input type="Password" name="Password" placeholder="Enter Your Password"/><br/>
                        <button>Login</button>
                    </form>
                </Row>
            </div>
        </>
    )
}

export default Login;