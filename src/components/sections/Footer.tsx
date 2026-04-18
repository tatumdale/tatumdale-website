'use client'

interface FooterProps {
  design: 'bold' | 'clean' | 'dark'
}

export default function Footer({ design }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/tatumbisley' },
    { label: 'Twitter', url: 'https://twitter.com/tatumdale' },
  ]

  if (design === 'bold') {
    return (
      <footer className="py-12 bg-[#01285C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src="/assets/logos/logo-light.png" alt="Tatumdale" className="h-8" />
            <p className="text-white/60 text-sm">© {currentYear} Tatumdale Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              {socialLinks.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
  }

  if (design === 'clean') {
    return (
      <footer className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src="/assets/logos/logo-dark.png" alt="Tatumdale" className="h-8 opacity-60" />
            <p className="text-[#01285C]/60 text-sm">© {currentYear} Tatumdale Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              {socialLinks.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#01285C]/60 hover:text-[#F02878] text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // Dark design
  return (
    <footer className="py-12 bg-[#011a3a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="/assets/logos/logo-light.png" alt="Tatumdale" className="h-8" />
          <p className="text-white/40 text-sm">© {currentYear} Tatumdale Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            {socialLinks.map(link => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#F02878] text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
