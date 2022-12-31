import { useEffect, useState } from "react";
import {Container, TextCursor} from "./animation"

export function TypeWriter({ value } : any) {
    const [text, setText] = useState('');
  
    const typeWriter = (text: any, i = 0) => {
      if (i < value.length) {
        setText(text.slice(0, i + 1));
        setTimeout(() => {
          typeWriter(text, i + 1);
        }, 130);
      }
    };
  
    useEffect(() => {
      typeWriter(value);
    }, []);
  
    return (
      <Container>
        <h3 className="subtitle_2">{text}</h3> 
        <TextCursor />
      </Container>
    );
  }