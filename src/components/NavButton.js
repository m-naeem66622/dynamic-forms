function NavButton({ formData, activeForm, index, handleOnClickRemoveForm }) {
  return (
    <li className="nav-item" role="presentation">
      <button
        type="button"
        className={`nav-link add-form-btn ${
          formData.id === activeForm ? "active" : ""
        }`}
        id={`${formData.id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${formData.id}-tab-pane`}
        role="tab"
        aria-controls={`${formData.id}-tab-pane`}
        aria-selected="true"
      >
        <span>Form {index + 1}</span>
        <span
          onClick={() => handleOnClickRemoveForm(formData.id)}
          className="delete-form-btn"
        >
          <i className="bi bi-x-circle-fill"></i>
        </span>
      </button>
    </li>
  );
}

export default NavButton;
