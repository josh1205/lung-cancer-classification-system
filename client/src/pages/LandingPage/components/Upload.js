import React, { useState } from "react";

const FileUploadButton = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
    setPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div style={{ backgroundColor: "#82b1ff", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <label
          style={{
            backgroundColor: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Upload File
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
        </label>
        {file && <p>{file.name}</p>}
      </div>
      {previewUrl && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <img
            src={previewUrl}
            style={{ width: "50%", height: "auto", maxWidth: "300px" }}
            alt="Preview"
          />
          <p>
            {file.name.split(".")[0]} This is a CT Scan{" "}
            <span role="img" aria-label="smile">
              -
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUploadButton;
