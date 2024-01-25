import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label, } from 'reactstrap';

export default class FormDemo1 extends Component {
    state = { userName: '', userSurname: '', email: '', password: '', description: '', city: '', }
    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        alertify.success(this.state.userName + " Added successfully!");
        alertify.success(this.state.userSurname + " Added successfully!");
        alertify.success(this.state.email + " Added successfully!");
        alertify.success(this.state.password + " Added successfully!");
        alertify.success(this.state.description + " Added successfully!");
        alertify.success(this.state.city + " Added successfully!");
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <FormGroup>
                        <Label for='userName'>User Name</Label>
                        <Input name='userName' type='text' placeholder='Name' onChange={this.onChangeHandler}></Input>

                        <Label for='userSurname'>User Surname</Label>
                        <Input name='userSurname' type='text' placeholder='Surname' onChange={this.onChangeHandler}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>User Name</Label>
                        <Input name='email' type='email' placeholder='E-mail' onChange={this.onChangeHandler}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input name='password' type='password' placeholder='Password' onChange={this.onChangeHandler}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input name='description' type='textarea' placeholder='Description' onChange={this.onChangeHandler}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input name='city' type='select' placeholder='City' onChange={this.onChangeHandler}>
                            <option></option>
                            <option>Ankara</option>
                            <option>Antalya</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Malatya</option>
                            <option>Samsun</option>
                            <option>Sivas</option>
                        </Input>
                    </FormGroup>
                    <Button type='submit'>Save</Button>
                </Form>
            </div>
        )
    }
}
