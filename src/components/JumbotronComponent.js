import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";

const JumbotronComponent = (props) => {
    return(
        <div className="p-2">
            <h3>{props.title}</h3>
            <p className="lead">
                <Button color="dark"><FontAwesomeIcon icon={faInfo} />Learn More</Button>
            </p>
        </div>
    );
}

export default JumbotronComponent;