import "./EditHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { hotelInputs } from "../../formSource";
import axios from "axios";

const NewHotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  console.log(files);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dwwfqdl79/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const updatehotel = {
        ...data,
        ...info,
        photos: data.photos.concat(list),
      };

      await axios.put(`/hotels/${id}`, updatehotel);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Product {data.name}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {/* <img src={pic} alt=""/> */}
            {/* <p>upload picture : {data.photos?.length} / 10</p> */}
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput"></div>
              <div className="formInput">
                <h2>Poolvilla requriments</h2>
              </div>
              <div className="formInput"></div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    contenteditable="true"
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={`${data[input.id]}`}
                  />
                </div>
              ))}
              <div className="formInput"></div>
              <div className="formInput">
                <h2> Option</h2>
              </div>
              <div className="formInput">
                <h2> </h2>
              </div>
              <div className="formInput">
                <label>Swimming Pool</label>
                <select id="swimmingPool" onChange={handleChange}>
                  <option value="No" selected={data.swimmingPool === false}>
                    No
                  </option>
                  <option value="Yes" selected={data.swimmingPool === true}>
                    Yes
                  </option>
                </select>
                <label>slider</label>
                <select id="slider" onChange={handleChange}>
                  <option value="No" selected={data.slider === false}>
                    No
                  </option>
                  <option value="Yes" selected={data.slider === true}>
                    Yes
                  </option>
                </select>
              </div>
              <div className="formInput">
                <label>Rubber Ring</label>
                <select id="rubberRing" onChange={handleChange}>
                  <option value="No" selected={data.rubberRing === false}>
                    No
                  </option>
                  <option value="Yes" selected={data.rubberRing === true}>
                    Yes
                  </option>
                </select>
                <label>Karaoke</label>
                <select id="karaoke" onChange={handleChange}>
                  <option value="No" selected={data.karaoke === false}>
                    No
                  </option>
                  <option value="Yes" selected={data.karaoke === true}>
                    Yes
                  </option>
                </select>
              </div>
              <div className="formInput">
                <label>Allowed Animal</label>
                <select id="animal" onChange={handleChange}>
                  <option value="No" selected={data.animal === false}>
                    No
                  </option>
                  <option value="Yes" selected={data.animal === true}>
                    Yes
                  </option>
                </select>
                <div className="formInput">
                  <label>Snooker</label>
                  <select id="snooker" onChange={handleChange}>
                  <option value="No" selected={data.snooker === false}>
                    No
                  </option>
                  <option value="Yes" selected={data.snooker === true}>
                    Yes
                  </option>
                </select>
                </div>
              </div>
              <div className="formInput">
                <label>Disco Light</label>
                <select id="discoLight" onChange={handleChange}>
                  <option value="No" selected={data.discoLight === false}>
                    No
                  </option>
                  <option value="Yes" selected={data.discoLight === true}>
                    Yes
                  </option>
                </select>
                <label>Kitchen Equipment</label>
                <select id="kitchenEquipment" onChange={handleChange}>
                  <option value="No" selected={data.kitchenEquipment === false}>
                    No
                  </option>
                  <option value="Yes" selected={data.kitchenEquipment === true}>
                    Yes
                  </option>
                </select>
              </div>
              <div className="formInput">
                <label>Free wifi</label>
                <select id="wifi" onChange={handleChange}>
                  <option value="No" selected={data.wifi === false}>
                    No
                  </option>
                  <option value="Yes" selected={data.wifi === true}>
                    Yes
                  </option>
                </select>
              </div>
              <div className="formInput">
                <h2> </h2>
              </div>

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
