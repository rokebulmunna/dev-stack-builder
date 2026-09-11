import logoText from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 text-gray-600">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between mb-12">
          
          <div className="w-1/3">
            <div className="mb-3">
              <img src={logoText} alt="Dev Stack Logo" className="h-8" />
            </div>
            <p className="text-xs text-gray-400 mb-4 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-gray-500">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">PRODUCT</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">COMPANY</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">LEGAL</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-6 flex justify-between text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;