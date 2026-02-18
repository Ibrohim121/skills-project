"use server";

export async function submitContactForm(prevState: any, formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Form submission received:", { name, email, message });

    return {
        success: true,
        message: "Thank you for your message! Our team will get back to you soon.",
    };
}
