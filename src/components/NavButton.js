function NavButton({ formData, activeForm, index }) {
  return (
    <li className="nav-item" role="presentation">
      <button
        type="button"
        className={`nav-link ${formData.id === activeForm ? "active" : ""}`}
        id={`${formData.id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${formData.id}-tab-pane`}
        role="tab"
        aria-controls={`${formData.id}-tab-pane`}
        aria-selected="true"
      >
        Form {index + 1}
      </button>
    </li>
  );
}

export default NavButton;
