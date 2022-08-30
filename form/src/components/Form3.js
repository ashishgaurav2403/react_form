import React from "react";

function Form3({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Mobile No."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Linked In"
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
    </div>
  );
}

export default Form3;