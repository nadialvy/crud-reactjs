import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { Link } from "react-router-dom";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const BackComponent = () => {
  return (
    <Row className='mb-2'>
        <Col>
            <Link to={"/"}>
                <Button color="info" className="mr-2" icon={faArrowLeft}>
                    Back
                </Button>
            </Link>
        </Col>
    </Row>
  )
}
