import { Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

const RegisterPage = () => {
    const [name,setName] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [role,setRole] = useState<string>("");

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }
    const handlePasswordChange = (event)=>{
        setPassword(event.target.value);
    }
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }
    const handleRoleChange = (event)=>{
        setRole(event.target.value);
    }

    const handleRegister =async (event:any)=>{
        event.preventDefault();
        console.log(email,name,password);
        const response = await axios.post("localhost:1234/reg",{name,email,password,role});
        

    }
  return (
    <div>
        <form onSubmit={handleRegister}>
            <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"} gap={2}>
            <TextField
            label = "Name"
            type="text"
            value={name}
            onChange={handleNameChange}

            />
            <TextField
            label = "Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}

            />
            <TextField
            label="Email"
            type="text"
            value={email}
            onChange={handleEmailChange}

            />
            <Select value={"User"} onChange={handleRoleChange}>
                <MenuItem>
                    User
                </MenuItem>
                <MenuItem>
                    Admin
                </MenuItem>
            </Select>
            <Button variant="contained" type="submit" >
                Submit
            </Button>
            </Stack>
        </form>
    </div>
  )
}

export default RegisterPage