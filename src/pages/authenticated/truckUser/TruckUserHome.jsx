import { useJagTrucksAuthentication } from "../../../contexts/AuthenticationContext";

const AccountPendingPage = () => {
  return (
    <div className="flex-grow-1 d-flex flex-column gap-4 justify-content-center align-items-center text-center">
      <h1 className="display-1 font-oswald">
        Sorry, but your account is still marked as pending.
      </h1>
      <h1 className="font-vollkorn">
        Be sure to check back later for updates!
      </h1>
    </div>
  );
};

const AccountInvalidPage = () => {
  return (
    <div className="flex-grow-1 d-flex flex-column gap-4 justify-content-center align-items-center text-center">
      <h1 className="display-1 font-oswald">
        Sorry, but your account has been marked as{" "}
        <span className="text-danger">INVALID</span>.
      </h1>
      <h1 className="font-vollkorn">
        Please contact{" "}
        <a href="mailto:truck.manager@jagtrucks.com" className="text-dark">
          truck.manager@jagtrucks.com
        </a>{" "}
        if you believe this is an error.
      </h1>
    </div>
  );
};

const AccountActivePage = () => {
  return <div className="flex-grow-1">Active</div>;
};

export const TruckUserHome = () => {
  const { jagTrucksAuth } = useJagTrucksAuthentication();
  return (
    <>
      {jagTrucksAuth.accountStatus === "pending" && <AccountPendingPage />}
      {jagTrucksAuth.accountStatus === "invalid" && <AccountInvalidPage />}
      {jagTrucksAuth.accountStatus === "active" && <AccountActivePage />}
    </>
  );
};
