
const fetchCard = async(username, cScore) => {
    const requestRes = await fetch(`http://localhost:5000/api/getcard?username=${username}&cscore=${cScore}`);
    const response = await requestRes.json();
    if(requestRes.ok) {
      return response;
    }
}

export default fetchCard;
