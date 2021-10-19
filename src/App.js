import React,{useState} from 'react'
import './App.css';

const App = ()=>{
  const [inputdata,setinputdata] = useState('');
  const [items,setItems] = useState([]);

  const addData = ()=>{
    if(!inputdata){

    }else{
      setItems([...items,inputdata])  // ...array is a spread operator 
      setinputdata('')
    }
  }
  const deleteinput = (id)=>{
    const updateitem = items.filter((elem,index)=>{
        return index !== id
    })
    setItems(updateitem);

  }
 
  return(
    <div className="App">
          <h1>ToDO list</h1>
          <div className="input-container">
          <input 
            onChange={(e)=>setinputdata(e.target.value)}
            value={inputdata} 
            type="text" 
            className="input" 
          placeholder="Enter your task" />
          <button 
            onClick={addData}
            className="btn" 
            >Add
          </button>
          </div>
      <div className="task-container">
        <ol>
          {
            items.map( (elem,index)=>{
              return(
              <div className="each" key={index}>
                <ul>
                  <li>{elem}<span><i id="trash" className="far fa-trash-alt" onClick={(id)=>deleteinput(index)}></i></span></li>
                </ul>
              </div>
              )
            } )
          }
        </ol>
        
      </div>
    </div>
    
            )
          }
export default App
          // <i class="far fa-trash-alt"></i>