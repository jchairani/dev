import BIC from "../../images/bic_logo.png";
import { Link } from "react-router-dom";
import "../adminPost/adminPostStyle.css";
import "react-datepicker/dist/react-datepicker.css";
import { useAlert } from 'react-alert-with-buttons';
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import instance from "../../utils/api_instance";

export default function AdminEdit() {
  const [description, setDescription] = useState();
  const [reading, setReading] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const alert = useAlert();
  const location = useLocation();
  const id = location.state.id;

  const resetForm = () => {
    setReading('');
    setTitle('');
    setDescription('');
    setDate(Date.now());
    setData({
      reading: '',
      title: '',
      description: '',
      dates: new Date().toISOString().substring(0, 10)
    });
  };

  const editForm = async () => {
    setData({
      reading: reading,
      title: title,
      description: description,
      dates: date
    })

    var newData = JSON.stringify({
      "title": title,
      "reading": reading,
      "description": description,
      "dates": date
    });

    var config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `/reads/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: newData
    };

    await instance(config)
      .then(function () {
        alert.open({
          message: "Post successfuly edited",
          buttons: [
            {
              label: "OK",
              onClick: () => {
                alert.close();
              },
              style: {
                backgroundColor: "blue",
                borderRadius: 20,
                color: "white"
              }
            }
          ]
        })
        navigate("/adminMain");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const fetchData = async () => {
    try {
      await instance.get(`/reads/${id}`)
        .then(res => setData(res.data))
    } catch (err) {
      console.log(err);
    }
  }

  const styleBigBox = () => {
    const myText = document.getElementById("contentText");
    myText.style.cssText = `height: ${myText.scrollHeight}px; overflow:hidden`;
    myText.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = `${this.scrollHeight}px`;
    });
  }

  useEffect(() => {
    styleBigBox();
    fetchData();
  }, []);

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
                viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </a>
            <h5 className="pt-2">Hi, Eddy</h5>
          </div>
        </div>
        <hr></hr>
      </header>

      <div className="container">
        <button className="mb-3 mx-2 btn btn-outline-dark" onClick={() => resetForm(data._id)}>Reset</button>
        <button className="mb-3 mx-2 btn btn-outline-dark" onClick={() => editForm(data._id)}>Edit</button>
        <p>{reading}</p>
        <form className="row">
          <div className="form-group">
            <input
              type="text"
              className="col-7 form-control-lg mb-4 border border-dark rounded"
              id="readingText"
              placeholder="Reading"
              defaultValue={data.reading}
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
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input type="date"
              className="col-7 form-control-lg mb-4 border border-dark rounded"
              onChange={(e) => e.target.value}
              defaultValue={data.dates}
            />

          </div>
          <div className="form-group grow-wrap">
            <textarea
              rows="4"
              className="col-7 form-control-lg mb-4 border border-dark rounded"
              id="contentText"
              placeholder="Description"
              defaultValue={data.description}
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
