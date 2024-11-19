export const sendEmail = async (data) => {
    const url = "https://api.emailjs.com/api/v1.0/email/send"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }

    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`HTTP Error : ${response.status}`)
        }

        // Check if the response is JSON
        const contentType = response.headers.get("content-type")
        let result
        if (contentType && contentType.includes("application/json")) {
            result = await response.json()
        } else {
            // Handle non-JSON response
            result = await response.text() // Read as text if it's not JSON
        }
        console.log(`Email Sent Successfully : ${result}`)
    } catch (error) {
        console.log(`Error Sending mail : ${error}`)
    }
}
