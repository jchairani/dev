import BIC from "../../images/bic_logo.png";
import { Link } from "react-router-dom";
import "../adminPost/adminPostStyle.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {AlertProvider, useAlert} from 'react-alert-with-buttons';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


export default function AdminPost() {
  const [description, setDescription] = useState();
  const [reading, setReading] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState(new Date().toISOString().substring(0,10));

  const navigate = useNavigate();
  const alert = useAlert();

  const resetForm = () => {
    setReading("");
    setTitle("");
    setDate(new Date());
    setDescription("");
  };

  const submitForm = () => {
    var data = JSON.stringify({
      "title": title,
      "reading": reading,
      "description": description,
      "dates": date
    });
    
    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: '/reads/create',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data,
      withCredentials: true,
    };
    
    axios(config)
    .then(function (response) {
      alert.open({
        message: "Post successfuly created",
        buttons: [
          {label: "OK",
        onClick: () => {
          alert.close();
        },
      style: {
        backgroundColor: "blue",
        borderRadius : 20,
        color : "white"
      }}
        ]
      })
      navigate("/adminLanding");
    })
    .catch(function (error) {
      console.log(error);
    });

    
  }


  useEffect(() => {
    const myText = document.getElementById("contentText");
    myText.style.cssText = `height: ${myText.scrollHeight}px; overflow:hidden`;
    myText.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = `${this.scrollHeight}px`;
    });

    if(!document.cookie){
      navigate("/login");
    }
    
  });

  return (
    <div className="text-center">
      <header className="py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="#"></a>
          </div>
          <div className="col-4 text-center">
            <Link to="/">
              <img src={BIC} className="img-fluid " />
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center my-3">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search mx-3"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </a>
            <h5 className="pt-2">Hi, Eddy</h5>
          </div>
        </div>
        <hr></hr>
      </header>
      
      <div className="container">
        <button className="mb-3 mx-2 btn btn-outline-dark" onClick={resetForm}>
          Reset
        </button>

        <button className="mb-3 mx-2 btn btn-outline-dark" onClick={submitForm}>Post</button>
        <form className="row">
          <div className="form-group">
            <input
              type="text"
              className="col-7 form-control-lg mb-4 border border-dark rounded"
              id="readingText"
              value={reading}
              placeholder="Reading"
              onChange={(e) => {
                setReading(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="col-7 form-control-lg mb-4 border border-dark rounded"
              id="titleText"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input type="date"
            value={date}
            className="col-7 form-control-lg mb-4 border border-dark rounded"
            
            onChange={((e) => setDate(e.target.value))} />
            {/* <DatePicker
              dateFormat="dd//MM/yyyy"
              selected={date}
              portalId="root-portal"
              onChange={(date) => setDate(date)}
            /> */}
          </div>
          <div className="form-group grow-wrap">
            <textarea
              rows="4"
              value={description}
              className="col-7 form-control-lg mb-4 border border-dark rounded"
              id="contentText"
              placeholder="Say Something..."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
