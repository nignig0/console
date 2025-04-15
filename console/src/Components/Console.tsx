import { useEffect, useRef, useState } from 'react'
import '../App.css'
import { commands, introText, StateChange } from '../commands';



export function Console(){
    const [history, setHistory] = useState<string[]>([]);
    const [backgroundColor, setBackgroundColor] = useState('black');
    const [textColor, setTextColor] = useState('white');
    const [input, setInput] = useState('');
    const [executing, setExecuting] = useState(false);
    const [executingText, setExecutingText] = useState('');
    const consoleRef = useRef<HTMLDivElement>(null);

    const [introducing, setIntroducing] = useState(false);
    const [introductionText, setIntroductionText] = useState('');


    useEffect(()=>{
      var index = 0;
      setIntroducing(_introducing => true);
      const interval = setInterval(()=>{
        if(index == introText.length){
          clearInterval(interval);
          setIntroducing(_introducing=> false);
          setIntroductionText(_t=> '');
          setHistory(_history => [introText])
          return;
        }

        const text = introText.slice(0, index);
        setIntroductionText(_t => text);
        index++;
      }, 50);
    }, [])

    useEffect(()=>{
      if(consoleRef.current) consoleRef.current.scrollTo(0, consoleRef.current.scrollHeight);
    }, [history, executingText]);

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter' && !executing){
            setHistory(history => [...history, `> ${input}`]);
            getResponse(input);
            setInput(_input => '');
        }
    }

    const getResponse = (command: string)=>{
      if(!commands.has(command.trim())){
        setHistory(history => [...history, "This command does not exist!"])
      }else{
        changeStateBasedOnResponse(commands.get(command)!);
      }
    }


    const changeStateBasedOnResponse = (change: StateChange)=>{
      if(change.backgroundColor) setBackgroundColor(_bColor=> change.backgroundColor!)
      if(change.textColor) setTextColor(_tColor => change.textColor!)

      setExecuting(_executing => true);
      var index = 0;
      const interval = setInterval(()=>{
        if (index == change.text.length){
          clearInterval(interval);
          
          setHistory(history => [...history, change.text])
          setExecutingText(_text=> '')
          setExecuting(_executing => false);
          return;
        } 
        
        const slice = change.text.slice(0,index);
        setExecutingText( _text=> slice)
        index++;
      }, 50);

      
      
    }
    return (
        <>
        {}
        <div className="console" style={{
            backgroundColor: backgroundColor
        }} ref={consoleRef}>

          {introductionText && <div style={{
            color: textColor,
            fontSize: '20px',
            padding: '10px'
          }}> {introductionText} </div>}
          {
            history.map((line, idx)=>{
              return (
                <div key = {idx} style={{
                    color: textColor,
                    padding: '10px'
                }}>
                  {line}
                </div>
              );
            })
          }

          {executingText && <div style={{
            color: textColor,
            fontSize: '20px',
            padding: '10px'
          }}>{executingText}</div>}
          <div className='consoleBody'>
            <span style={{
                color: textColor
            }}> {'> '}</span>
            <input value={input} onChange = {(e)=>{setInput(e.target.value)}}
              disabled = {executing || introducing}
             onKeyDown={handleOnKeyDown} style={{
                color: textColor,
                backgroundColor: 'transparent',
                width: '90vw',
                border: 'none',
                outline: 'none',
                fontFamily: 'VT323',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px'
            }} />
          </div>
    
        </div>
        </>
    );
}