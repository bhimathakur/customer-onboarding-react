export const addressApi = async () => {
    const response = await fetch(`http://localhost:5000/api/addresses`);
    return await response.json();
}