import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Activity, PersonFill } from 'react-bootstrap-icons';
import Capture from '../assets/images/Capture.PNG';
import Menu from './headerMenu/Menu';
import MenuItem from './headerMenu/MenuItem';
import Search from './headerMenu/Search';
import LoginPage from '../pages/LoginPage';
import navNewPost from '../assets/images/navNewPost.avif'
import navNewDiscussion from '../assets/images/navNewDiscussion.avif'

const Header = () => {
    const body = [
        {
            title: "New Product",
            icon: navNewPost,
            description: "launch your product in product hunt"
        },
        {
            title: "New discution",
            icon: navNewDiscussion,
            description: "launch your product in product hunt"
        }

    ]

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={Capture} alt="icon" />
                </Navbar.Brand>
                <image src='../assets/images/Capture.PNG' alt="icon" />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Search />
                        <Menu />
                    </Nav>
                    {body.map((item, index) => {


                    })}
                    <MenuItem title='Submit' href="new" body={body}
                    />


                    <Activity rounded='true' />

                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li" >
                            <Nav.Link onClick={() => {
                                <LoginPage />
                            }}>Sign in</Nav.Link>
                        </Nav.Item>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <PersonFill rounded='true' />

                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1" >Profile</Dropdown.Item>
                                <Dropdown.Item href="/product-list">My product</Dropdown.Item>
                                <Dropdown.Item href="/product-list">My collectetion</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">My topic</Dropdown.Item>
                                <Dropdown.Item href="login">Logout</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;