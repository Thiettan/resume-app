import "./App.css";
import { ResumeData } from "./data";
import { useState, useTransition } from "react";

const RESUME_LINK =
  "/assets/documents/Tan-Bui-Web-Developer-Designer-Resume-2025.pdf";

function ContentBody({ data }) {
  return (
    <div className="content-body">
      <h4>
        {data.position} @
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          {data.company}
        </a>
      </h4>
      <p className="year">{data.year}</p>
      <p>{data.content}</p>
      <ul className="content-list">
        {data.bulletPoints.map((item, i) => (
          <li key={`${i}-${item}`}>{item}</li>
        ))}
        <li style={{ listStyle: "none" }}>
          <a href={RESUME_LINK} class="" role="tab">
            Learn More...
          </a>
        </li>
      </ul>
      <div className="skill-list">
        {data.skillsArr.map((skill, i) => {
          return (
            <div className="skill-item" key={`skill-${i}`}>
              {skill}
            </div>
          );
        })}
      </div>
      <a
        className="cta cta-mobile"
        href={RESUME_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Résumé{" "}
        <svg
          class="cta-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Interface / External_Link">
              {" "}
              <path
                id="Vector"
                d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                stroke="#64FFDA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </a>
    </div>
  );
}

function App() {
  const [isPending, startTransition] = useTransition();
  const [index, setIndex] = useState(0);

  function handleClick(e) {
    startTransition(() => {
      setIndex(parseInt(e.target.attributes.index.value));
    });
  }

  return (
    <div className="resume-app container">
      <header className="app-header">
        <h3 className="mb-5 mt-1">My Experience</h3>
      </header>
      <div className="row">
        <div className="col-md-4">
          <nav className="nav-list" role="tablist">
            {ResumeData.map((item, i) => (
              <button
                className={"py-3" + (i == index ? " active" : "")}
                role="tab"
                aria-selected={i == index ? true : false}
                index={i}
                /* tabIndex={i == index ? 0 : -1} */
                key={item.company}
                onClick={handleClick}
              >
                {item.company}
              </button>
            ))}
            <a
              className="cta"
              role="tab"
              href="/assets/documents/Tan-Bui-Web-Developer-Designer-Resume-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Résumé{" "}
              <svg
                class="cta-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / External_Link">
                    {" "}
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#64FFDA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
          </nav>
        </div>
        <div className="col-md-8">
          <ContentBody data={ResumeData[index]} />
        </div>
      </div>
    </div>
  );
}

export default App;
