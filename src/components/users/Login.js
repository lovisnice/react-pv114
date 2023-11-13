import { Input, FormControl, InputLabel, FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
    // const dataAuthContext= useContext(AuthContext)
    const {setUserName, clearUserName}= useContext(AuthContext)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '', //login => userName
            password: ''
        }
    });
    const onSubmit = data => { 
        console.log(data); 
        // dataAuthContext.setUserName(data.email);
        setUserName(data.email);
    }

    return (
        <form style={{ width: "40vw", margin: "auto" }} onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input {...register("email")} id="email" aria-describedby="email-helper-text" />
                    <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>

                {/* <Divider /> */}

                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input {...register("password")} type="password" id="password" aria-describedby="password-helper-text" />
                    <FormHelperText id="password-helper-text">We'll never share your password.</FormHelperText>
                </FormControl>
                {/* <Divider /> */}
                {/* <FormControl> */}
                    <Button type="submit" variant="contained">Login</Button>
                    <Button type="reset"  variant="contained" onClick={clearUserName}>Clear</Button>
                    {/* <Input type="submit" /> */}

                {/* </FormControl> */}
            </Stack>
        </form>)

}

export default Login;