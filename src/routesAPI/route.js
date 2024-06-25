export async function sendEmail(url, data) {
    const res = fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => { return response; })
    .catch(error => console.log("Error sending email: ", error));

    return res;
}