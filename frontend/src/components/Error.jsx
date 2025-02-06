function Error({ errorMessage }) {
  return (
    <div className="errorContainer">
      <p className="error">
        <span>💥</span>
        {errorMessage}
      </p>
    </div>
  );
}

export default Error;
