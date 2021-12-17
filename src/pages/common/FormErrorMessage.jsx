import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const ErrorDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    color: red;
    font-size: 1.4rem;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }

    @media (min-width: 1024px) {
      font-size: 1rem;
    }
`;

const FormErrorMessage = (props) => {
    return (
      <ErrorDiv><i className="fa fa-info-circle"/> {props.message}</ErrorDiv>
  );
};

FormErrorMessage.propTypes = {
  message: PropTypes.string,
};


export default FormErrorMessage;
