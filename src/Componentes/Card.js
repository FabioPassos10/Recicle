import React from "react";
import "./Styles/card.css";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";
const Example = (props) => {
  return (
    <>
      <div id="Card1">
        <div>
          <p>
            Lorem ipsum primis vestibulum pretium viverra porttitor potenti, ut
            inceptos elementum aenean netus orci mi eget, dolor fringilla
            faucibus himenaeos nisi mauris. class quisque hendrerit leo eleifend
            neque pretium sit aenean,
          </p>
        </div>
      </div>
      <div id="Card2">
        <div>
          Lorem ipsum primis vestibulum pretium viverra porttitor potenti, ut
          inceptos elementum aenean netus orci mi eget, dolor fringilla faucibus
          himenaeos nisi mauris. class quisque hendrerit leo eleifend neque
          pretium sit aenean,
        </div>
      </div>
      <div id="Card3">
        <div>
          Lorem ipsum primis vestibulum pretium viverra porttitor potenti, ut
          inceptos elementum aenean netus orci mi eget, dolor fringilla faucibus
          himenaeos nisi mauris. class quisque hendrerit leo eleifend neque
          pretium sit aenean,
        </div>
      </div>
    </>
  );
};

export default Example;
