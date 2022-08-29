import React, { useState } from "react";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import axios from 'axios';

// key=AIzaSyDQIvLMqVdiQ268xSfv-pS4MNbapJRuIHE

const NlpGoogle = () => {
  const [text, setText] = useState('input text to be analyzed');
  
  const sending = { "document": {
      "type": "PLAIN_TEXT",
      "language": "",
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
      axios.post(`https://language.googleapis.com/v1beta2/documents:analyzeEntities?key=AIzaSyDQIvLMqVdiQ268xSfv-pS4MNbapJRuIHE`, sending )
      .then(res => {
        console.log(res, "response");
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
                See what google's NLP can do. Upload some text using the
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
      <div
        className="container-xs reveal-from-bottom container_hello"
        data-reveal-delay="700"
        >
      </div>
    </>
  );
};

export default NlpGoogle;