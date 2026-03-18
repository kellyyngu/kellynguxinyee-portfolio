"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${name || email}`);
    const body = encodeURIComponent(message + "\n\nFrom: " + (name || email));
    window.location.href = `mailto:kellynxy8838@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <div>
        <label className="block text-sm font-medium text-slate-600">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="mt-1"
          placeholder="Write your message..."
        />
      </div>

      <div className="flex items-center gap-3 pt-1">
        <button
          type="submit"
          className="inline-flex items-center rounded-lg bg-[#0f3d5c] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0d334d]"
        >
          Send Message
        </button>
        <button
          type="button"
          onClick={() => {
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="text-sm font-medium text-slate-600 transition hover:text-slate-800"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
