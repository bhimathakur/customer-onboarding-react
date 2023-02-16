import { useEffect, useState } from "react";
import { addressApi } from "./getCustomerAddressApi";

const ValidateAddress = () => {
  const [address, setAddress] = useState([]);
  const [message, setMessage] = useState(null);
  const [errorMessageClass, setErrorMessageClass] = useState();
  const [checkMark, setCheckMark] = useState(false);

  const fetchAddress = async () => {    
    const result = await addressApi();
    setAddress(result);
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const address = document.getElementById("address").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zipcode").value;
    const requestRes = await fetch(`http://localhost:5000/api/validateaddresses?address=${address}&state=${state}&zip=${zip}`);
    const response = await requestRes.json();
    if(requestRes.ok && response.success) {
      setErrorMessageClass("success-message");
      setCheckMark(true);
      setMessage(response.message);
    
    } else {
      setErrorMessageClass("error-message");
      setMessage("Something went wrong !!");
      setCheckMark(false);
    }   

  }
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5" ><span data-testid="validate-address">Validate Address</span>
                  </h3>
                  {message != null ? (
                    <h6 className={errorMessageClass}>{checkMark === true ? (<span className="bi bi-check">&#10003;</span>):''}{message}</h6>) : ''}
                  <form name="registration" onSubmit={handleSubmit}> 
                    <div className="row" >
                      <div className="col-md-6 mb-4">
                        <div className="htmlForm-outline">
                          <label  className="htmlForm-label" htmlFor="address">
                            Address
                          </label>
                          <input
                            type="text"
                            value={address.address}
                            name="address"
                            id="address"
                          
                            className="htmlForm-control htmlForm-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="htmlForm-outline">
                          <label className="htmlForm-label" htmlFor="city">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={address.city}
                            id="city"
                            className="htmlForm-control htmlForm-control-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="htmlForm-outline">
                          <label className="htmlForm-label" htmlFor="state">
                            State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </label>
                          <input
                            type="text"
                            id="state"
                            value={address.state}
                            name="state"
                            className="htmlForm-control htmlForm-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="htmlForm-outline">
                          <label className="htmlForm-label" htmlFor="zipcode">
                            Zip code
                          </label>
                          <input
                            type="text"
                            id="zipcode"
                            value={address.zip}
                            name="zipcode"
                            className="htmlForm-control htmlForm-control-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Validate"
                        name="validate"
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

export default ValidateAddress;
