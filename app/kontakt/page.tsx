"use client";

import { FormEvent, useState } from "react";

export default function Kontakt() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          result.error || "Die Nachricht konnte nicht gesendet werden.",
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Die Nachricht konnte nicht gesendet werden.");
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-3 text-3xl font-bold">Kontakt</h1>

        <p className="mb-8 text-neutral-300">
          Du möchtest uns etwas mitteilen oder hast eine Anfrage? Schreib uns
          einfach über das Kontaktformular.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block font-medium">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-medium">
              E-Mail-Adresse
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-medium">
              Nachricht
            </label>

            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              rows={8}
              className="w-full resize-y rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute -left-[9999px] -top-[9999px]"
          >
            <label htmlFor="website">Website</label>

            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <p className="text-sm text-neutral-400">
            Mit dem Absenden werden die von dir eingegebenen Daten zur
            Bearbeitung deiner Anfrage verarbeitet. Weitere Informationen
            findest du in unserer{" "}
            <a href="/datenschutz" className="underline hover:text-emerald-400">
              Datenschutzerklärung
            </a>
            .
          </p>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
          </button>

          {status === "success" && (
            <p className="rounded-lg border border-emerald-700 bg-emerald-950/40 p-4">
              Deine Nachricht wurde erfolgreich gesendet.
            </p>
          )}

          {status === "error" && (
            <p className="rounded-lg border border-red-700 bg-red-950/40 p-4">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
