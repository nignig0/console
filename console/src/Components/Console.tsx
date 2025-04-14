import { useState } from 'react'
import '../App.css'



export function Console(){
    const [history, setHistory] = useState<string[]>([]);
    const [backgroundColor, setBackgroundColor] = useState('black');
    const [input, setInput] = useState('');
    const [executing, setExecuting] = useState(false);

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter' && !executing){
            setHistory([...history, `>${input}`]);
            setInput('');
        }
    }
    return (
        <>
        <div className="console" style={{
            backgroundColor: 'black'
        }}>
          {
            history.map((line, idx)=>{
              return (
                <div key = {idx} style={{
                    color: 'white',
                    padding: '10px'
                }}>
                  {line}
                </div>
              );
            })
          }

          <div className='consoleBody'>
            <span style={{
                color: 'white'
            }}> {'>'}</span>
            <input value={input} onChange = {(e)=>{setInput(e.target.value)}}
             onKeyDown={handleOnKeyDown} style={{
                color: 'white',
                backgroundColor: 'transparent',
                width: '90vw',
                border: 'none',
                outline: 'none'
            }} />
          </div>
    
        </div>
        </>
    );
}