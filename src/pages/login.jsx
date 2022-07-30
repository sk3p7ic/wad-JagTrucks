import { Container, Button, Form} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

export function FoodTruckLogin(){
    return(
    <Container className=" d-flex flex-column justify-content-center align-items-center" >
        <Form style= {{width:"fit-content"}}>  {/*className = "w-50vh"*/}
            <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button> {' '}
            <Button variant="primary" size='md' href="/newUser">New User</Button>
        </Form>
    </Container>
    );
}
{/*We also need a log out button. Can we make it dynamic to also allow for a button to swap to signout?*/}
{/* Probably making this way more complicated than needed but should we also have a list going that can grow as we 
get more food trucks coming in or does the database take care of all of that? */}