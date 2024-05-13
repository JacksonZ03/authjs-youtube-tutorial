"use client";

import { SignInButton } from "@/src/components/sign-in-button";

const Home: React.FC = () => {
  return (
    <div>
      <div className="home-page">
        <h2>Home</h2>
        <div>
          <SignInButton className="signin-button" />
        </div>
      </div>
    </div>
  );
};

export default Home;
