import React, { useEffect, useMemo, useState } from "react";
import { Assignment1 } from "./Assignment1";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array
/*

const words = ["hy", "your", "name", "saifu", "is", "not", "possible", "shri", "are", "great", "ansh", "brother"]
const TOTAL_LINES = 500;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        console.log("without space", sentence)
        sentence += " "
        console.log("with space", sentence)
    }
    ALL_WORDS.push(sentence);
}
export function Assignment2() {
    const [sentences, SetSentences] = useState(ALL_WORDS)
    const [filter, setFilter] = useState("");
    const filteredSentences = useMemo(() => sentences.filter(x => x.toLowerCase().includes(filter.toLowerCase())), [sentences, filter])
    return (
        <div>
            <input type="text" onChange={(e) => {
                setFilter(e.target.value)
            }}></input>
            {filteredSentences.map(word => <div>
                {word}
            </div>)}
        </div>
    )
}

*/




const words = ['hy','hello','my','name','not','good','brother']
const lines = 200;
const all_words = [];
for(let i=0;i<lines;i++){
    let sentence = '';
    for(let j=0;j<words.length;j++){
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += ' ';
    } 
    all_words.push(sentence)
}
export function Assignment2(){
    const [sentences, setSentences] = useState(all_words)
    const [filter, setFilter] = useState('');
    const filteredSentences = useMemo(()=>{
        return sentences.filter(x => x.includes(filter));
    },[sentences, filter])
    return( <div>
        <input  type="text" onChange={(e)=>{
            setFilter(e.target.value)
        }}></input>
        {filteredSentences.map(word =><div>{word}</div>
        )}
    </div>)
}
