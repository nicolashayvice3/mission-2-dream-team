import React, { useState } from "react";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import secrets from "./secrets"
import axios from 'axios';

const NlpGoogle = () => {
  const [text, setText] = useState('input text to be analyzed');
  const [analyzedText, analyzedSetText] = useState("");
  
  const sending = { "document": {
      "type": "PLAIN_TEXT",
      "language": "en",
      "content": text
    },
    "encodingType": "UTF16"
  }
  
  const handleChange = (e) => {
    setText(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submiting")
      axios.post(`https://language.googleapis.com/v1beta2/documents:analyzeEntities?key=${secrets.googleApiKey}`, sending )
      .then(res => {
        let types = []
        for (let i = 0; i < res.data.entities.length; i++) {
          types.push(res.data.entities[i].type, " ")
        }
        analyzedSetText(types)
        console.log(res.data, "Data");
      })
      
    }
    
  return (
    <>
      <div className="reveal-from-bottom" data-reveal-delay="600">
        <h1>Proccess your <span className="text-color-primary">text</span> below.</h1>
        <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
                >
                See what google's NLP can do, picking up entities. Upload some text using the
                button below...
              </p>
        <ButtonGroup>
        <form>
        <input type="text" onChange={handleChange} name="NLP" placeholder={text} size="50" />
          <Button onClick={handleSubmit} color="primary">
            Upload
          </Button>
        </form>
        </ButtonGroup>
      </div>
      <div>
        <br></br>
        <p>
          types: {analyzedText}
        </p>
      </div>
    </>
  );
};

export default NlpGoogle;