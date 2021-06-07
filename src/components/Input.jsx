import React, { useState } from "react";
import marked from "marked";
import "bootstrap/dist/css/bootstrap.min.css";

function Input() {
  const initialState = `This is a paragraph! 
  **This is bolded text**
  # Heading`;
  const [text, setText] = useState(initialState);

  const markdown = marked(text);

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <div>
      <h1 className="text-center mt-4">Convert Markdown</h1>
      <div className="row">
        <div className="col-6 mt-4">
          <textarea
            className="form-control"
            id="editor"
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="col-6 preview" id="preview">
          <div
            className="preview rounded"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Input;
