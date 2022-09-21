import React, { useState } from "react";
import "/var/www/html/React_project/image_gallary/src/App.css";
// import car from './cars/Cycle2.png'
const Test = () => {
  const Data = [
    {
      id: 1,
      image: "/static/media/car1.3fd516e220135538c64b.jpeg",
      category: "Car",
    },
    {
      id: 2,
      image: "/static/media/car2.12d33fac1fb4026ae72b.jpeg",
      category: "Car",
    },
    {
      id: 3,
      image: "/static/media/car3.b7148747ebbae2832b0a.jpeg",
      category: "Car",
    },
    {
      id: 4,
      image: "/static/media/car4.ba658a5129978b556b45.jpeg",
      category: "Car",
    },
    {
      id: 5,
      image: "/static/media/car5.a693ce70f56d47390412.jpeg",
      category: "Car",
    },
    {
      id: 6,
      image: "/static/media/Bike1.f9316ef42c6538136862.jpeg",
      category: "Bike",
    },
    {
      id: 7,
      image: "/static/media/Bike3.209ccc50aa02cb5052f9.jpg",
      category: "Bike",
    },
    {
      id: 8,
      image: "/static/media/Cycle1.5545db8d1b4fed77159e.jpg",
      category: "Cycle",
    },
    {
      id: 9,
      image: "/static/media/Cycle3.86f28d5296d63b717520.jpg",
      category: "Cycle",
    },
    {
      id: 10,
      image: "/static/media/Cycle2.1d786b68f2b3cba2b412.png",
      category: "Cycle",
    },
  ];

  const [item, setItem] = useState(Data);
  const[selected, setSelected]=useState(false);

  const filter = (e) => {
    if (e) {
      const update = Data.filter((Cele) => {
        return Cele.category === e;
      });
      setItem(update);
    } else {
        setItem(Data);
    }
  };

  const handleDeleteAll=()=>{
    if(selected)
    setItem([])
  }


  const handelDelete = (id) => {
    let arr=[]
    item.map((ele) => {
      if(ele.id !== id){
        arr.push({
          id: ele.id,
          image: ele.image,
          category: ele.category,
        })
      }
    })
    setItem(arr)
  }
  return (
    <>
      <div className="App">
        {/* <img src={car}/> */}
        <h1>Image Gallary</h1>
        <hr />
        <div className="img_div">
          <button onClick={() => filter("Car")}>Cars</button>
          <button onClick={() => filter("Bike")}>Bike</button>
          <button onClick={() => filter("Cycle")}>Cycle</button>
          <button onClick={() => setItem(Data)}>Show All</button>
        </div>
        <div>
        <input id="delete" type="checkbox" onClick={()=>setSelected(!selected)}/>
        <label for='delete'>Selec all</label>
        <br></br>
        <button type="submit" onClick={()=>handleDeleteAll()}>Delete All</button>

        </div>
      </div>

      {item.map((ele) => {
        const { id, image } = ele;

        return (
          <div className="Body" key={id}>
            <div>
              <img src={image} alt="img" className={selected ? "border border-primary" : " "}/>
            <button onClick={() => handelDelete(id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Test;