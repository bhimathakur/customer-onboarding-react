import React from "react";
import {act, render, screen, waitFor } from "@testing-library/react";
import ValidateAddress from "../ValidateAddress";

import * as getCustomerAddressApi from "../getCustomerAddressApi"

jest.mock("../getCustomerAddressApi");


describe("Validate address", () => {

 test("should have validate address text", () => {

  
  render(<ValidateAddress />);

  const address =  screen.getByTestId("validate-address");
  expect(address).toHaveTextContent("Validate Address");

});


 
  // beforeEach(() => {
  //   fetchMock.resetMocks()
  // })

  // test('renders users when API call succeeds', async () => {
  //   const fakeResponse = {
  //                 address: "killer",
  //                 city: "Delhi",
  //                 state: "New delhi",
  //                 zip: 12345
                  
  //                }
  //   fetchMock.mockResolvedValue({ status: 200, json: jest.fn(() => fakeResponse) })
  //   render(<ValidateAddress />);
  //   await waitFor(() => {
  //     expect(screen.getByText('killer')).toBeInTheDocument()
  //   });

  // })

 // test('renders error when API call fails', async () => {})







//   it("should fetch data", async ()=>{
//     const fakeResponse = {
//             address: "killer",
//             city: "Delhi",
//             state: "New delhi",
//             zip: 12345
            
//            }
//     const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
//         jest.spyOn(getCustomerAddressApi, 'addressApi')
//     .mockResolvedValueOnce(mRes);
//     const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
//     global.fetch = mockedFetch;
//     render(<ValidateAddress/>);
//     await act(async ()=>{
//         await waitFor(() => {
//           //expect(mockedFetch).toHaveBeenCalledTimes(1);
//           //expect(screen.queryByTestId('my-testid').innerHTML).toBe("Hello from address validation");

//           console.log(screen.queryByTestId('my-testid').innerHTML);
//           //expect(baseDom.queryAllByTestId("address").innerHTML).toBe("killer");

        
//         }

//           )
//     });
// })

  
//   it("customer address", async() => {
//     console.log(screen.queryByTestId('my-testid'));
//     const firstMockReturn = {
//       address: "killer",
//       city: "Delhi",
//       state: "New delhi",
//       zip: 12345
      
//     };
//     jest.spyOn(getCustomerAddressApi, 'addressApi')
//     .mockResolvedValueOnce(firstMockReturn);

// //    let baseDom = render(<ValidateAddress />);

// let baseDom = await act( async () => (<ValidateAddress />));
// console.log(screen.queryByTestId('my-testid'));

    
//     // getCustomerAddressApi.addressApi.mockResolvedValue({
//     //   results: [{address: 'killer'}],
//     // });
//     console.log(screen.queryByTestId('my-testid'));
//     await waitFor(() => {
//       //console.log(screen.getByTestId("address1"));

//       //expect(screen.queryByTestId('yess')).toBeInTheDocument()
//       ///console.log(screen.queryByTestId('no'));
//        console.log(screen.queryByTestId('my-testid'));
//       //expect(screen.queryByDisplayValue('killer')).toBeInTheDocument()

//       //expect(baseDom.queryAllByTestId("address").innerHTML).toBe("killer");
//       });
//       console.log(screen.queryByTestId('my-testid'));


//   });
    

})


// jest.mock('../getCardApi');

// it("fetch credit card number", async() => {
  

  // const mockCard = [ {results: {card: 4111111111111111 }}];
  //  const mockResponse = [{ card: 'card' }];
  //   const result = fetchCard.mockReturnValue(mockResponse);

  //     console.log(result);

  //     render(<ValidateCard />);
  //     await waitFor(() => expect(result.card).toBe(4111111111111111));
      
  //       screen.getByText("Validate card");

  // fetch.mockResponseOnce(
  //   JSON.stringify({
  //     card: "credit card number"
  //   })
  // );
  // const { result } = renderHook(() => fetchCard(), {
  //   wrapper: () => (
  //     <ValidateCard />
  //   ),
  // });
 // console.log(await waitFor(result));

//  const { result } = renderHook(() => {
//   fetchCard();
//   <ValidateCard />
// });


//  await waitFor(() => {
  
//   act(() => {
//     console.log(result.current);
//   })
  //expect(result.current).toBe(null)


//   const fakeUsers = [
//     { id: 1, name: 'Joe' },
//     { id: 2, name: 'Tony' },
//   ]
//   const result = fetchCard.mockResolvedValue({ status: 200, json: jest.fn(() => fakeUsers) });
//   render(<ValidateCard />);

// await waitFor(() => {
//   //expect(screen.getByText('Joe')).toBeInTheDocument()
//   console.log(result);
// });

      
// });
