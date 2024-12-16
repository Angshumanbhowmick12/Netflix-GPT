const Footer = () => {
    return (
      <footer className="bg-black text-gray-500 py-8">
        <div className="container mx-auto px-6 md:px-12">
          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Column 1 */}
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Investor Relations</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Speed Test</a></li>
              </ul>
            </div>
  
            {/* Column 2 */}
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Jobs</a></li>
                <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
                <li><a href="#" className="hover:underline">Legal Notices</a></li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Account</a></li>
                <li><a href="#" className="hover:underline">Ways to Watch</a></li>
                <li><a href="#" className="hover:underline">Corporate Information</a></li>
                <li><a href="#" className="hover:underline">Only on Netflix</a></li>
              </ul>
            </div>
  
            {/* Column 4 */}
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Media Center</a></li>
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>
  
          {/* Language Selection */}
          <div className="mt-6">
            <select
              className="p-2 border border-gray-500 bg-black text-gray-500 rounded"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
  
          {/* Copyright */}
          <div className="mt-6 text-sm">
            <p>© 2024 Netflix, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  