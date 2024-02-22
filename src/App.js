import logo from './logo.svg';
import './App.css';
import { ResumeData } from './data';
import { useState } from 'react';

function ContentBody({data}){
  console.log(data)
  return(
    <div className="content-body">
      <h4>{data.position} @{data.company}</h4>
      <p>{data.content}</p>
    </div>
  )
}

function App() {

  const [index,setIndex] = useState(0)

  function handleClick(e){
  setIndex(e.target.tabIndex)
  }

  return (
    <div className="resume-app container">
      <header className="app-header">
        <h3>My Experience</h3>
      </header>
      <div className="row">
        <div className="col-4">
        <nav className='nav-list' role="tablist">
          {ResumeData.map((item,i)=>(
            <button
              className={i == index ? 'active' : ''}
              tabIndex={i} key={item.company}
              onClick={handleClick}>{item.company}
            </button>
          ))}
          </nav>
        </div>
            <div className="col-8"> <ContentBody data={ResumeData[index]} /></div>
       
      </div>
    </div>
  );
}

export default App;
