import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Create() {

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button color="warning">Chirp IT out</Button>{' '}
            </Form>
        </>
    )
}

export default Create