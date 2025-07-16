import "../style/header.css"
import {Col, Container, Image} from "react-bootstrap";
import MulanImage from '../assets/name.png';

const Content = () => {
    return (
        <Container>
            <div className="content">
                <Image className="contenImage" src={MulanImage} alt="" />
                <h4>
                    <span>2020</span>
                    <span>12+</span>
                    <span>1h 55min</span>
                    <span>Action</span>
                </h4>
            </div>
        </Container>
    )
}

export default Content;