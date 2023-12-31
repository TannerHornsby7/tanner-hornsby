import { ContactForm } from '@/components/ui/contact-form';
import '@fontsource/slackey/400.css'

export default function Contact() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen -mt-28'>
            <h1 className='text-2xl p-4 text-center' style={{fontFamily:'Slackey'}}>Contact</h1>
            <ContactForm />
        </div>
    )
}