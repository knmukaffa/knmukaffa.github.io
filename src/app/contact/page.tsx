export default function Contact() {
  return (
    <section className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-3xl font-bold text-brand-navy">Contact</h1>
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="mt-6 grid gap-4"
      >
        <input type="text" name="name" required placeholder="Your name" className="rounded-xl border p-3" />
        <input type="email" name="_replyto" required placeholder="Your email" className="rounded-xl border p-3" />
        <textarea name="message" required rows={6} placeholder="Your message" className="rounded-xl border p-3" />
        <input type="text" name="_gotcha" className="hidden" />
        <button className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}
