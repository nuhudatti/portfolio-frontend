import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Get In Touch</h1>
        <ContactForm />
      </main>
    </div>
  )
}