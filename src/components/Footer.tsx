export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111111] text-white px-10 py-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-16">

        <div className="space-y-6">

          <h2 className="text-3xl font-medium">
            Tagsecure Agro
          </h2>

          <p className="text-white/65 leading-7">
            Premium cashew processing and export-focused operations
            built on quality, hygiene, and trust.
          </p>

        </div>

        <div>
          <h3 className="text-lg mb-6 font-medium">
            Navigation
          </h3>

          <div className="space-y-4 text-white/65">

            <p>Home</p>
            <p>Products</p>
            <p>Processing</p>
            <p>Export</p>
            <p>Contact</p>

          </div>
        </div>

        <div>
          <h3 className="text-lg mb-6 font-medium">
            Contact
          </h3>

          <div className="space-y-4 text-white/65">

            <p>info@tagsecureagro.com</p>
            <p>+91 XXXXX XXXXX</p>
            <p>Navsari, Gujarat, India</p>

          </div>
        </div>

        <div>
          <h3 className="text-lg mb-6 font-medium">
            Business
          </h3>

          <div className="space-y-4 text-white/65">

            <p>Premium Cashews</p>
            <p>Export Operations</p>
            <p>Quality Processing</p>
            <p>Packaging Solutions</p>

          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-20 pt-8 flex flex-col lg:flex-row justify-between gap-4 text-sm text-white/45">

        <p>
          © 2026 Tagsecure Agro Private Limited
        </p>

        <p>
          Designed with premium industrial aesthetics.
        </p>

      </div>

    </footer>
  );
}