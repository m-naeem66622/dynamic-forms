function FormChunk({ formData, handleOnChange, index, errors }) {
  return (
    <div className="form mt-4">
      <div className="mb-3">
        <label htmlFor={`first-name-form-${index}`} className="form-label">
          First Name
        </label>
        <input
          name="firstName"
          onChange={handleOnChange}
          type="text"
          className={`form-control form-index-${index} is-${
            errors[index] &&
            (errors[index]?.firstName === false ? "valid" : "invalid")
          }`}
          id={`first-name-form-${index}`}
          value={formData.firstName}
        />
        {errors[index]?.firstName && (
          <div id="" className="invalid-feedback">
            First name is required
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor={`last-name-form-${index}`} className="form-label">
          Last Name
        </label>
        <input
          name="lastName"
          onChange={handleOnChange}
          type="text"
          className={`form-control form-index-${index} is-${
            errors[index] &&
            (errors[index]?.lastName === false ? "valid" : "invalid")
          }`}
          id={`last-name-form-${index}`}
          value={formData.lastName}
        />
        {errors[index]?.lastName && (
          <div id="" className="invalid-feedback">
            Last name is required
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor={`phone-number-form-${index}`} className="form-label">
          Phone Number
        </label>
        <input
          name="phoneNumber"
          onChange={handleOnChange}
          type="text"
          className={`form-control form-index-${index} is-${
            errors[index] &&
            (errors[index]?.phoneNumber === false ? "valid" : "invalid")
          }`}
          id={`phone-number-form-${index}`}
          value={formData.phoneNumber}
        />
        {errors[index]?.phoneNumber && (
          <div id="" className="invalid-feedback">
            Phone number name is required
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor={`email-form-${index}`} className="form-label">
          Email address
        </label>
        <input
          name="email"
          onChange={handleOnChange}
          type="text"
          className={`form-control form-index-${index} is-${
            errors[index] &&
            (errors[index]?.email === false ? "valid" : "invalid")
          }`}
          id={`email-form-${index}`}
          value={formData.email}
        />
        {errors[index]?.email && (
          <div id="" className="invalid-feedback">
            Enter a valid email address
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor={`password-form-${index}`} className="form-label">
          Password
        </label>
        <input
          name="password"
          onChange={handleOnChange}
          type="password"
          className={`form-control form-index-${index} is-${
            errors[index] &&
            (errors[index]?.password === false ? "valid" : "invalid")
          }`}
          id={`password-form-${index}`}
          value={formData.password}
        />
        {errors[index]?.password && (
          <div id="" className="invalid-feedback">
            Password must at least 8 characters
          </div>
        )}
      </div>
    </div>
  );
}

export default FormChunk;
