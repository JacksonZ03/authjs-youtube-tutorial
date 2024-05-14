"use client";

import { SignOutButton } from "@/src/components/sign-out-button";
import { getAccountLinkStatus } from "@/src/lib/auth/getAccountLinkStatusServerAction";
import { handleGoogleSignIn } from "@/src/lib/auth/googleSignInServerAction";
import { unlinkGoogleAccount } from "@/src/lib/auth/unlinkGoogleAccountServerAction";
import { useEffect, useState } from "react";

export const DashboardPage: React.FC = () => {
  const [isAccountLinked, setIsAccountLinked] = useState(false);

  useEffect(() => {
    const accountLinkStatus = async () => {
      try {
        const accountLinkStatus = await getAccountLinkStatus();
        setIsAccountLinked(accountLinkStatus);
      } catch (error) {
        console.error("Failed to get account link status:", error);
      }
    };
    accountLinkStatus();
  }, []);

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <div className="dashboard-card">
        <div>
          <button
            className="link-account-button"
            onClick={
              isAccountLinked
                ? async () => {
                    await unlinkGoogleAccount().then(() => {
                      setIsAccountLinked(false);
                    });
                  }
                : async () => {
                    await handleGoogleSignIn().then(() => {
                      setIsAccountLinked(true);
                    });
                  }
            }
          >
            {isAccountLinked
              ? "Disconnect Google Account"
              : "Connect Google Account"}
          </button>
        </div>
        <div>
          <SignOutButton className="signout-button" />
        </div>
      </div>
    </div>
  );
};
