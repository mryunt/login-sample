import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { login } from "../../redux/Auth/action";

const Login = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("data : ", data)
        dispatch(login(data.email, data.password));
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="m-2">
                    <Label style={{ width: "100px" }} for="email">Email</Label>
                    <input style={{ marginLeft: "2rem" }}
                        {...register("email")}
                        type="email"
                        placeholder="please enter your email" />
                </FormGroup>
                <FormGroup className="m-2">
                    <Label style={{ width: "100px" }} for="password">Password</Label>
                    <input style={{ marginLeft: "2rem" }}
                        {...register("password")}
                        type="password"
                        placeholder="please enter your password" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Login
