import React from "react";
import Card from "./card";
import "./card.css";
import  ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCancel} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button type="cancel" onClick={props.onCancel}>
          Okay
        </button>
      </footer>
    </Card>
  );
};

const Error = (props) => {
  return (
    // <React.Fragment>   This is fragment(solution of the jsx problem)
    // <>   this is fragment (solution of the jsx problem)

    <>
      {/* <div className="backdrop" onClick={props.onCancel}>
        <Card className="modal">
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.message}</p>
          </div>
          <footer className="actions">
            <button type="cancel" onClick={props.onCancel}>
              Okay
            </button>
          </footer>
        </Card>
      </div> */}
      {ReactDOM.createPortal(<Backdrop onCancel={props.onCancel}/>, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onCancel={props.onCancel}/>, document.getElementById('overlay'))}
    </>
  );
};

export default Error;
