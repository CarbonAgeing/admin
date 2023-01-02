import React from "react";
import { Row, Col } from "react-bootstrap";




function Header(){
    
    return(
        <>
            <div className="header">
                <Row className="header_row">
                    <Col className="logo" md={12}><a href="">LOGO</a></Col>
                </Row>
            </div> 
            <div className="dash_body">
                <Row>
                    <Col md={12}>
                        <p>WELCOME TO THE ADMIN PAGE</p>
                    </Col>
                </Row>
            </div>
            
        </>
    )
}

export default Header;