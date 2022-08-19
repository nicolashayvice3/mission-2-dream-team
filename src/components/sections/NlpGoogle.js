import React, { useState } from "react";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import axios from 'axios';


const NlpGoogle = () => {
  const [text, setText] = useState('input text to be analyzed');
  
  const handleChange = (e) => {
    setText(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      axios.post(`https://language.googleapis.com/v1beta2/documents:analyzeEntities`, { text })
      .then(res => {
        console.log(res);
        console.log(res.data);
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

// const language = require('@google-cloud/language');
// const client = new language.LanguageServiceClient();
// const document = {
//     content: text,
//     type: 'PLAIN_TEXT',
// };

// const text = "hello world"

// const [result] = await client.analyzeSentiment({document});
// const sentiment = result.documentSentiment;

// console.log(`  Magnitude: ${sentiment.magnitude}`);
// console.log('Document sentiment:');
// console.log(`  Score: ${sentiment.score}`);

export default NlpGoogle;