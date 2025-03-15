import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <p>This application provides general information regarding infant sleep, feeding and output under conditions that are considered within the range of normal.</p> <p> However, all cases are different and may not apply to every family and infant. If families have any reason for concern -- they should seek care from their health provider, pediatrician and IBCLC.</p>
            <p>© {new Date().getFullYear()} <a href="/about">Breastfeeding Application</a> by Rachel Burkhardt</p>
        </footer>
    </div>
  )
}

export default Footer
