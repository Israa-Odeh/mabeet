import error404Image from "@assets/Error/404-error.png";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img
        className="error-page__image"
        src={error404Image}
        width={580}
        height={580}
        alt="Illustration of three people holding the numbers 404, indicating a page not found error"
      />
    </div>
  );
};

export default ErrorPage;
