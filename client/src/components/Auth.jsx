import { useState } from "react"
import { useHttp } from "../hooks/http.hook"

const Auth = () => {
    const [formdata, setFormData] = useState({ email: '', password: '' })
    const { request } = useHttp()

    const onDataChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }

    const register = async () => {
        try {
            const data = await request('http://localhost:5000/api/auth/register', 'POST', { ...formdata })
            console.log(data)
        } catch(e) {}
    }

    const login = async () => {
        try {
            const data = await request('http://localhost:5000/api/auth/login', 'POST', { ...formdata })
            console.log(data)
        } catch(e) {}
    }

    return (
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input name='email' type="text" value={formdata?.email} onChange={onDataChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input name='password' type="password" value={formdata?.password} onChange={onDataChange} />
            </div>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Auth
