import React, { useState } from "react"
import "./SignUp.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
        pack: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword, pack } = user
        if (name && email && password && (password === reEnterPassword && pack) ) {
            axios.post("http://localhost:9002/post_name", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>

            
                <div class="col-12">
                <select class="select form-control-lg"
                          value={user.pack}
                          onSelect={(e) => {
                            const selectPack = e.target.value;
                            handleChange(selectPack);
                          }}
                        >
                        <option value="Subject 1">Subject 1 fdfdfsfsref</option>
                        <option value="Subject 2">Subject 2 fdfdfsfsref</option>
                        <option value="Subject 3">Subject 3 fdfdfsfsref</option>

                    </select>
                    <label class="form-label select-label">Choose option</label>
            </div>

            <div className="button" onClick={register} >Register</div>

        </div>

    )
}

export default Register