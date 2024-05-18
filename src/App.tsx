import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz';

function App() {
  const [numberOfQ, setNumberOfQ] = useState("10");
  const numQ = [
    {
      num: "10",
      style: "btn-primary",
    },
    {
      num: "15",
      style: "btn-secondary",
    },
    {
      num: "20",
      style: "btn-accent",
    },
  ]


  return (
    <>
      <section className='flex items-center justify-center h-[100vh]'>
        {/* <div>
          <p className='text-center'>Number of questions {numberOfQ} </p>
          <div className='flex flex-col items-center gap-3'>
            {
              numQ.map((num, index) => (
                <button key={index} onClick={(e: React.MouseEvent<HTMLButtonElement>) => { setNumberOfQ((e.target as HTMLButtonElement).innerText) }}
                  className={`btn btn-wide ${num.style}`} >{num.num}
                </button>
              ))
            }
            <hr />
          </div>
          <button className='btn btn-wide btn-neutral'>Next</button>
        </div> */}

        <Quiz />
      </section>
    </>
  )
}

export default App
