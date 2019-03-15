import React from "react";

const BookInfo = props => {

  return (
    <container>
      <div className="col-md-2" style={{ float: "left", marginTop: "20px" }}>
        <p><img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></p>

      </div>
      <div className="col-md-10" style={{ float: "right", marginTop: "20px" }}>
        <p style={{ fontSize: "30px" }}>{props.title}</p>
        <p><strong>Author(s):</strong> {props.authors}</p>

        <p style={{ marginBottom: "30px" }}><strong>Description:</strong> {props.description}</p>
        <a href={props.link} target={"_blank"} ><button className="btn btn-primary" style={{ marginBottom: "30px" }}>
          View
              </button></a>
        <button onClick={props.handleSaveBook} className="btn btn-primary" style={{ marginBottom: "30px", marginLeft: "20px" }}>
          Save
              </button>

      </div>
      <hr style={{ clear: "both" }} />
    </container>
  );
}


export default BookInfo;
