import { RxCheckCircled } from "react-icons/rx";

const AuthSuccessPage: React.FC = () => {
  return (
    <div className="auth-success-page">
      <div className="auth-success-card">
        <div className="auth-success">
          <RxCheckCircled className="icon" />

          <p>{"Success! Please check your email inbox for sign in link."}</p>
        </div>
        <div>
          <p>
            {
              "Didn't receive an email? To go back to the sign-in page and try again, "
            }

            <a
              href="/api/auth/signin"
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccessPage;
