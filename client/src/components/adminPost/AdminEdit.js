import BIC from "../../images/bic_logo.png";
import { Link } from "react-router-dom";
import "../adminPost/adminPostStyle.css";
import DatePicker, { setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {AlertProvider, useAlert} from 'react-alert-with-buttons';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';
export default function AdminEdit() {
  const [description, setDescription] = useState();
  const [reading, setReading] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();

  const [data,setData] = useState([]);

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
      url: 'http://localhost:8000/api/reads/create',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
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
      navigate("/");
    })
    .catch(function (error) {
      console.log(error);
    });

    
  }


//BENERIN unDEFINED VALUE karena kecepetan fetch before this function is finished
  const fetchData = async() => {
    try{
        await axios.get(`/reads/${localStorage.getItem('editKey')}`)
        .then(res => setData(res.data));
    }catch(err){
        console.log(err);
    }
  }


  useEffect(() => {
    const myText = document.getElementById("contentText");
    myText.style.cssText = `height: ${myText.scrollHeight}px; overflow:hidden`;
    myText.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = `${this.scrollHeight}px`;
    });
    fetchData();

    if(data != null){
      let moveDate = data.dates;
      console.log(dayjs(moveDate).format('DD/MM/YYYY'));
      setDate("hello");
    }

  },[0]);

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

        <button className="mb-3 mx-2 btn btn-outline-dark" onClick={submitForm}>Edit</button>
        <form className="row">
          <div className="form-group">
            <input
              type="text"
              className="col-7 form-control-lg mb-4 border border-dark rounded"
              id="readingText"

              defaultValue={data.reading || ''}
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
              defaultValue={data.title || ''}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <DatePicker
              selected={date}
              className="col-7 form-control-lg mb-4 border border-dark rounded"
              portalId="root-portal"
              defaultValue={date || new Date()}
              onChange={(date) => setDate(date)}
            />
          </div>
          <div className="form-group grow-wrap">
            <textarea
              rows="4"
              className="col-7 form-control-lg mb-4 border border-dark rounded"
              id="contentText"

              defaultValue={data.description || ''}
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
