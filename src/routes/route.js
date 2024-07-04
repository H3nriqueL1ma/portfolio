export default async function sendEmail(url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(response => { return response; })
    .catch(error => console.log("Error updating data: ", error));

    return res;
}