"use client";
import {useState} from "react";
export default function ToolClient({slug,name}:{slug:string,name:string}) {
 const [text,setText]=useState(""); const [out,setOut]=useState(""); const [a,setA]=useState(""); const [b,setB]=useState(""); const [n,setN]=useState("10"); const [date,setDate]=useState(""); const [pwlen,setPwlen]=useState("20");
 const copy=()=>navigator.clipboard?.writeText(out);
 function calc(){try{let x=Number(a),y=Number(b);let v=slug==="percentage-calculator"?x*y/100:slug==="calculator"?x+y:NaN;setOut(String(v))}catch{setOut("Invalid input")}}
 function age(){if(!date)return;let birth=new Date(date),now=new Date();let years=now.getFullYear()-birth.getFullYear();if(now.getMonth()<birth.getMonth()||(now.getMonth()===birth.getMonth()&&now.getDate()<birth.getDate()))years--;setOut(String(years)+" years")}
 function password(){let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";let len=Math.min(128,Math.max(4,Number(pwlen)||20));let arr=new Uint32Array(len);crypto.getRandomValues(arr);setOut(Array.from(arr,v=>chars[v%chars.length]).join(""))}
 function run(){if(slug==="word-counter"){let words=text.trim()?text.trim().split(/\s+/).length:0;setOut(`Words: ${words}\nCharacters: ${text.length}\nCharacters (no spaces): ${text.replace(/\s/g,"").length}\nSentences: ${(text.match(/[.!?]+/g)||[]).length}\nReading time: ${Math.ceil(words/200)} min`)}
 else if(slug==="case-converter")setOut(text.toUpperCase()===text?text.toLowerCase():text.toUpperCase());
 else if(slug==="remove-extra-spaces")setOut(text.replace(/\s+/g," ").trim());
 else if(slug==="text-repeater")setOut(text.repeat(Math.min(1000,Math.max(0,Number(n)||0))));
 }
 const textTools=["word-counter","case-converter","remove-extra-spaces","text-repeater"];
 return <div className="card mt-6 space-y-4">{textTools.includes(slug)&&<><textarea className="tool-input min-h-40" placeholder="Enter or paste your text..." value={text} onChange={e=>setText(e.target.value)}/>{slug==="text-repeater"&&<input className="tool-input" type="number" min="0" max="1000" value={n} onChange={e=>setN(e.target.value)} placeholder="Repeat count"/>}<button className="btn" onClick={run}>{slug==="word-counter"?"Count":slug==="case-converter"?"Toggle case":slug==="remove-extra-spaces"?"Clean text":"Repeat text"}</button></>}
 {slug==="password-generator"&&<><label>Password length<input className="tool-input mt-2" type="number" min="4" max="128" value={pwlen} onChange={e=>setPwlen(e.target.value)}/></label><button className="btn" onClick={password}>Generate password</button></>}
 {(slug==="percentage-calculator"||slug==="calculator")&&<><input className="tool-input" type="number" value={a} onChange={e=>setA(e.target.value)} placeholder={slug==="percentage-calculator"?"Value":"First number"}/><input className="tool-input" type="number" value={b} onChange={e=>setB(e.target.value)} placeholder={slug==="percentage-calculator"?"Percentage":"Second number"}/><button className="btn" onClick={calc}>{slug==="percentage-calculator"?"Calculate percentage":"Add numbers"}</button></>}
 {slug==="age-calculator"&&<><label>Date of birth<input className="tool-input mt-2" type="date" value={date} onChange={e=>setDate(e.target.value}/></label><button className="btn" onClick={age}>Calculate age</button></>}
 {out&&<div className="rounded-xl bg-slate-50 p-4 whitespace-pre-wrap break-all"><div>{out}</div><button className="btn btn-secondary mt-3" onClick={copy}>Copy result</button></div>}
 </div>
}