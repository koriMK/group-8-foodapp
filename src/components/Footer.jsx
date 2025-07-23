const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-[var(--primary)] cursor-pointer">About Us</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Careers</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Glovo Business</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Partnership</h3>
            <ul className="space-y-2">
              <li className="hover:text-[var(--primary)] cursor-pointer">Add your restaurant</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Add your store</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Become a courier</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="hover:text-[var(--primary)] cursor-pointer">Help Center</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Glovo Clone. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-[var(--primary)] cursor-pointer">Terms</span>
            <span className="hover:text-[var(--primary)] cursor-pointer">Privacy</span>
            <span className="hover:text-[var(--primary)] cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer