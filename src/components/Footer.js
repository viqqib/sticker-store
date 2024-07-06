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