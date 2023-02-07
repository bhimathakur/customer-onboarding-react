import onboardingImg from "./CustomerOnboarding.png";
const Onboarding = () => {
  return (
    <>
      <div className="welcome" data-testid="unique-id" >Welcome to ABC Bank Onboarding</div>
      <div className="onboarding">
        <img data-testid="onboarding" src={onboardingImg} alt="onboarding" width="1000" height="500" />
      </div>
    </>
  );
};

export default Onboarding;
