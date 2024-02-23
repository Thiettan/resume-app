import logo from './logo.svg';
import './App.css';
import { ResumeData } from './data';
import { useState } from 'react';

function ContentBody({data}){
  return(
    <div className="content-body">
      <h4>{data.position} @<a href={data.url} target="_blank" rel="noopener noreferrer">{data.company}</a></h4>
      <p className="year">{data.year}</p>
      <p>{data.content}</p>
      <ul className="content-list">{data.bulletPoints.map((item,i)=>(
        <li key={`${i}-${item}`}>{item}</li>
        ))}</ul>
      <div className="skill-list">
        {data.skillsArr.map((skill,i)=>{
          return (
            <div className="skill-item" key={`skill-${i}`}>{skill}</div>
          )
        })}
      </div>
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
        <h3 className="mb-5 mt-1">My Experience</h3>
      </header>
      <div className="row">
        <div className="col-4">
          <nav className='nav-list' role="tablist">
            {ResumeData.map((item,i)=>(
              <button
                className={'py-3' + (i == index ? ' active' : '')}
                tabIndex={i} key={item.company}
                onClick={handleClick}>{item.company}
              </button>
            ))}
              <a
                className='cta'
                href="/assets/documents/Tan-Bui-Web-Developer-Designer-Resume-2024.pdf" 
                target='_blank'>View Full Résumé
                </a>
            </nav>
        </div>
            <div className="col-8">
              <ContentBody data={ResumeData[index]} />
            </div>
      </div>
    </div>
  );
}

export default App;
