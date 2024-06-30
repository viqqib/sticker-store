'use client'
export default function Footer() {
    return(
        <footer className="bg-footercolor text-white py-8 mt-auto">
        <div className="container mx-auto text-center space-y-4">
          {/* Short Description */}
          <p className="text-sm">
            Stickoala
          </p>
  
          {/* Links to Important Pages */}
          <div className="text-sm">
            <a href="/about" className="hover:underline mx-2">About Us</a>
            <a href="/contact" className="hover:underline mx-2">Contact Us</a>
            <a href="/faq" className="hover:underline mx-2">FAQ</a>
            <a href="/terms" className="hover:underline mx-2">Terms of Service</a>
            <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
          </div>
  
          {/* Social Media Links */}
          <div className="text-sm">
            Follow us on 
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mx-2">Twitter</a>, 
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">Facebook</a>, and 
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline mx-2">Instagram</a>.
          </div>
  
          {/* Contact Information */}
          <div className="text-sm">
            <p>Contact us: <a href="mailto:support@stickoala.com" className="hover:underline">support@stickoala.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
          </div>
  
          {/* Copyright Information */}
          <p className="text-sm">&copy; {new Date().getFullYear()} Stickoala - Sticker & Pin Store. All rights reserved.</p>
        </div>
      </footer>
    )
}