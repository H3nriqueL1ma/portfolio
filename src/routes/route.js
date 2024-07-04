export default async function sendEmail(url, data) {
    try {
        const res = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    
        const responseData = (await res).json();

        if (!(await res).ok) {
            throw new Error(`HTTP error! status: ${(await res).status}`);
        }

        return (await res).status;
    } catch (error) {
        console.log("Error sending email: ", error);
        return 500;
    }
}