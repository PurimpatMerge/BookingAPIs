import "./reserve.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Firststep from "./steps/Firststep";
import Secondstep from "./steps/Secondstep";
import { Button, Steps } from "antd";

const Reserve = (props) => {
  const { startPrice, friPrice, satPrice, sunPrice, poolvilla, poolvillaName } =
    props;
  let totalPrice;
  let datesBook;
  const [bookingTotalPrice, setBookingTotalPrice] = useState("");
  const [bookingDates, setBookingDates] = useState([]);

  const handleClick = async () => {
    try {
      setBookingTotalPrice("");
      setBookingDates([]);
      function getCookie(cname) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      const userStartDate = getCookie("userStartDate");
      const userEndDate = getCookie("userEndDate");
      const formattedDate = userStartDate.replace(/\//g, "-");
      const formattedDateend = userEndDate.replace(/\//g, "-");

      if (friPrice && satPrice && sunPrice) {
        const getBookData = await axios.get(
          `https://api-pool-villa.onrender.com/api/datesBook/bookingPoolvillaDate/${poolvilla}/${formattedDate}/${formattedDateend}/${startPrice}/${friPrice}/${satPrice}/${sunPrice}`
        );
        if (getBookData) {
          totalPrice = getBookData.data.totalPrice;
          datesBook = getBookData.data.datesBook;

          setBookingTotalPrice(totalPrice, ":totalPrice");
          setBookingDates(
            datesBook.map((date) => `{Day: ${date.day} Price: ${date.price}}`)
          );
        }
      }

      if (!friPrice && !satPrice && !sunPrice) {
        const getBookData = await axios.get(
          `https://api-pool-villa.onrender.com/api/datesBook/bookingPoolvillaDate/${poolvilla}/${formattedDate}/${formattedDateend}/${startPrice}`
        );
        if (getBookData) {
          totalPrice = getBookData.data.totalPrice;
          datesBook = getBookData.data.datesBook;

          setBookingTotalPrice(totalPrice, ":totalPrice");
          setBookingDates(
            datesBook.map((date) => `{Day: ${date.day} Price: ${date.price}}`)
          );
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (totalPrice && datesBook) {
      setBookingTotalPrice(totalPrice);
      setBookingDates(
        datesBook.map((date) => `Day: ${date.day} Price: ${date.price}`)
      );
    }
  }, [totalPrice, datesBook]);

  const steps = [
    {
      title: "เลือกวันที่",
      content: (
        <Firststep
          startPrice={startPrice}
          friPrice={friPrice}
          satPrice={satPrice}
          sunPrice={sunPrice}
          poolvilla={poolvilla}
          poolvillaName={poolvillaName}
        />
      ),
    },
    {
      title: "จอง",
      content: (
        <Secondstep
          bookingTotalPrice={bookingTotalPrice}
          bookingDates={bookingDates}
          id={poolvilla}
          poolvillaName={poolvillaName}
        />
      ),
    },
  ];
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleBoth = () => {
    handleClick();
    next();
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className=" z-20  ">
      {/* Step */}
      <>
        <Steps current={current} items={items} />
        <div className="text-center ">{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button onClick={handleBoth}>Next</Button>
          )}

          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
      {/* Step */}
    </div>
  );
};

export default Reserve;
