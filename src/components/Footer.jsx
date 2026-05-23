import React from 'react';

 function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-150 px-6 py-12 md:py-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-4">
        
        {/* CHAP TOMON: Logotip va Shior */}
        <div className="max-w-sm">
          {/* Logotip */}
          <div className="text-blue-600 font-bold text-2xl tracking-wider cursor-pointer mb-4 select-none active:scale-95 transition-transform inline-block">
            MORENT
          </div>
          {/* Shior matni */}
          <p className="text-gray-500/90 text-sm md:text-base font-normal leading-relaxed">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* O'NG TOMON: Linklar bo'limi (Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          
          {/* About Ustuni */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 tracking-wide">About</h3>
            <ul className="space-y-4 text-gray-500 text-sm md:text-base">
              <li>
                <a href="#how-it-works" className="hover:text-blue-600 hover:underline transition-colors">How it works</a>
              </li>
              <li>
                <a href="#featured" className="hover:text-blue-600 hover:underline transition-colors">Featured</a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-blue-600 hover:underline transition-colors">Partnership</a>
              </li>
              <li>
                <a href="#business-relation" className="hover:text-blue-600 hover:underline transition-colors">Bussiness Relation</a>
              </li>
            </ul>
          </div>

          {/* Community Ustuni */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 tracking-wide">Community</h3>
            <ul className="space-y-4 text-gray-500 text-sm md:text-base">
              <li>
                <a href="#events" className="hover:text-blue-600 hover:underline transition-colors">Events</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-600 hover:underline transition-colors">Blog</a>
              </li>
              <li>
                <a href="#podcast" className="hover:text-blue-600 hover:underline transition-colors">Podcast</a>
              </li>
              <li>
                <a href="#invite-friend" className="hover:text-blue-600 hover:underline transition-colors">Invite a friend</a>
              </li>
            </ul>
          </div>

          {/* Socials Ustuni */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-gray-900 font-bold text-lg mb-6 tracking-wide">Socials</h3>
            <ul className="space-y-4 text-gray-500 text-sm md:text-base">
              <li>
                <a href="#discord" target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:underline transition-colors">Discord</a>
              </li>
              <li>
                <a href="#instagram" target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:underline transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#twitter" target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:underline transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#facebook" target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:underline transition-colors">Facebook</a>
              </li>
            </ul>
          </div>

        </div>

      </div>

   

    </footer>
  );
}

export default Footer