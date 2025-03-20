import React from "react";
import ReactDOM from "react-dom";
import FeedbackForm from "../pages/FeedbackForm";

const FeedbackFormPortal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const portalRoot = document.getElementById("portal");
    return ReactDOM.createPortal(
        <FeedbackForm onClose={onClose}/>,
        portalRoot
    );
};

export default FeedbackFormPortal;