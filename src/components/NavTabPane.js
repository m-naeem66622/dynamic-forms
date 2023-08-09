import FormChunk from "./FormChunk";

function NavTabPane({ formData, handleOnChange, activeForm, index, errors }) {
  return (
    <div
      className={`tab-pane fade ${
        formData.id === activeForm ? "active show" : ""
      }`}
      id={`${formData.id}-tab-pane`}
      role="tabpanel"
      aria-labelledby={`${formData.id}-tab`}
      tabIndex="0"
    >
      <FormChunk
        handleOnChange={handleOnChange}
        formData={formData}
        index={index}
        errors={errors}
      />
    </div>
  );
}

export default NavTabPane;
