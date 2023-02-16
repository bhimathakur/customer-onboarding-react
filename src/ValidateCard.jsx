import { useState } from "react";
import fetchCard from "./getCardApi";

const ValidateCard = () => {

  const [creditCard, setCreditCard] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [formValues, setFormValues] = useState({
    creditscore: ""
   
  });

  const [formErrors, setFormErrors] = useState({
    creditscore: ""
   
  });

  const handleChange = (event) => {
   // alert(event.target);

    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {}
    if(!values.creditscore) {
      errors.creditscore = "Credit score is required";
    }
   
    return errors;
  }

  const handleSubmit =  async(e) => {
    e.preventDefault();
    
    setFormErrors(validate(formValues));
    if((Object.keys(formErrors).length) > 0) {
      return false
    }

    let username = document.getElementById("username").value;
    let cScore = document.getElementById("creditscore").value;


    const response  = await fetchCard(username, cScore);
    if(response.success) {
      setErrorMsg(null);
      setCreditCard(response.card);      
    } else {
      setCreditCard(response.card);
      setErrorMsg(response.message);

    }
    
    
  }

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100" data-testid="creditcard">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5"><span data-testid="validate">Validate Card</span></h3>
                  {errorMsg != null ? (
                    <h6 className="error-message">{errorMsg}</h6>) : ''}

                  <form name="registration" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="htmlForm-outline">
                          <label className="htmlForm-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            type="text"
                            name="username"
                            value="bhimathakur"
                            id="username"
                            className="htmlForm-control htmlForm-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="htmlForm-outline">
                          <label className="htmlForm-label" htmlFor="cardscore">
                            Credit Score
                          </label>
                          <input
                            type="text"
                            name="creditscore"
                            onChange={handleChange}
                            value={formValues.creditscore}
                            
                            id="creditscore"
                            className="htmlForm-control htmlForm-control-lg"
                          />
                          <label className="error-message">{formErrors.creditscore}</label>

                        </div>
                      </div>

                      {creditCard ? (
                      <div className="col-md-6 mb-4">
                        <div className="htmlForm-outline">
                          <label className="htmlForm-label" htmlFor="creditCard">
                            Credit Card Number:
                          </label>
                          <input
                            type="text"
                            name="creditCard"
                            value={creditCard}
                            id="creditCard"
                            className="htmlForm-control htmlForm-control-lg"
                            readOnly
                          />
                        </div>
                      </div>
                      ):''}
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Get Credit Card No."
                        data-testid="submit-button"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValidateCard;
