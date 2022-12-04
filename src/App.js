import { useState } from "react";
import './App.css';


function App() {
  let [value, setValue] = useState(0);
  let [position, setPosition] = useState([]);
  const [arr, setArr] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault()
    const num = parseInt(e.target.number.value);

    const array = [];
    for (let i = 0; i < num; i++) {
      array[i] = i;
    }
    setArr(array);
    setPosition(array);

  }
  const handleChange = (e) => {

    const value = e.target.value;
    const index = e.target.name;
    const updateArr = [...arr];
    updateArr[index] = value;
    setArr(updateArr);
  }

  const handleCheckBox = (e) => {
    const checked = e.target.checked;
    const index = e.target.name;


    if (checked) {
      value += parseInt(e.target.value);
      setValue(value);

      position[index] = 'checked';
    }
    else {
      value -= parseInt(e.target.value);
      setValue(value);

      position[index] = index;
    }


  }
  const size = position.filter(n => n === 'checked').length;


  return (
    <div className="bg-info">
      <div className="container">
        <div className="row vh-100 d-flex justify-content-center">
          <div className='col-md-6 mt-5' data-aos="fade-up"
            data-aos-duration="3000">
            <h5 data-aos="fade-left"
              data-aos-duration="3000">Maliha Poly Tex Fiber Industry Limited.</h5>
            <p>Technical Task2</p>

            <form onSubmit={handleSubmit} >
              <div className="d-flex"> <p className="bg-warning py-2 px-3 me-3 rounded" style={{ height: '40px', width: '48%' }}  >Number of Texboxs : </p>
                <input className='form-control' style={{ height: '40px', width: '48%' }} type='number' name='number' /> <br /></div>
              <button className="btn btn-primary mb-3" type='submit'>Add Textbox</button>
            </form>


            {
              arr?.map((n, index) => <div key={index} className="mb-2">
                <input className="me-3" type="checkbox" name={index} value={n} onChange={(e) => handleCheckBox(e)} />
                <input className="rounded form-control-sm" type="number" name={index} onChange={(e) => handleChange(e)} />
              </div>)
            }

            <div className="bg-success text-white rounded p-2 mt-3" data-aos="fade-right"
              data-aos-duration="3000">
              <p>selected <b>{size} items</b> And there position is {
                position.map((n, index) => n === 'checked' && <b>{parseInt(index) + 1} ,</b>)
              } and Total number is: <b>{value}</b></p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;