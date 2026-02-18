"use client";

import { useActionState } from "react";
import { submitContactForm } from "./actions";

const initialState = {
    success: false,
    message: "",
};

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    return (
        <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white' }}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white' }}
                />
            </div>
            <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={4}
                required
                style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', resize: 'none' }}
            ></textarea>
            <button
                type="submit"
                className="btn-primary"
                disabled={isPending}
                style={{ width: '100%', marginTop: '1rem', opacity: isPending ? 0.7 : 1 }}
            >
                {isPending ? "Sending..." : "Send Message"}
            </button>

            {state.message && (
                <p style={{ marginTop: '1rem', color: state.success ? 'var(--secondary)' : '#ef4444', textAlign: 'center' }}>
                    {state.message}
                </p>
            )}
        </form>
    );
}
