import { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Facebook, Google } from 'react-bootstrap-icons';
import kitty from '../assets/images/kitty.avif';


const LoginPage = () => {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <Container clo>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton >
                    < Col md={{ offset: 4 }}>
                        <img src={kitty} alt="icon" />
                    </Col>
                </Modal.Header>
                <Col md={{ span: 6, offset: 3 }}>
                    <h5>Sign up on Product Hunt</h5>
                </Col>
                <Modal.Body>
                    <Col>
                        <p>
                            join our community of friendly folks discovering
                            and sharing the latest products in tech.
                        </p> <br />
                    </Col>
                    < Col md={{ span: 6, offset: 3 }}>
                        <Button ><Google />  Sin in Whith Google</Button><br />
                    </Col><br />
                    <Row >
                        <Col md={{ span: 3, offset: 4 }}>
                            {/* <Button><Twitter /></Button> */}
                            {/* <Button><Apple /></Button> */}
                            <Button ><Facebook /></Button>
                        </Col>
                    </Row>
                </Modal.Body>
                <Col>
                    <Modal.Footer>
                        we'll never post to any of your accouunts without your permission
                    </Modal.Footer>
                </Col>
            </Modal>
        </Container >
    );
};
export default LoginPage;