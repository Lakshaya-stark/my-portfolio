import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-[#e8e6e3] flex">
      {/* SIDEBAR SPACE */}
      <div className=" hidden md:block"></div>

      {/* MAIN */}
      <div className="flex-1 flex items-center justify-center px-6">
        {/* CONTAINER */}
        <div className="relative w-full max-w-4xl border border-[#d4af37]/40 rounded-2xl p-10">
          {/* GOLD GLOW */}
          <div className="absolute inset-0 rounded-2xl border border-[#d4af37]/20 shadow-[0_0_40px_rgba(212,175,55,0.2)] pointer-events-none"></div>

          {/* 🔥 PROFILE IMAGE (TOP RIGHT) */}
          <div className="absolute -top-18 -right-18">
            <div className="relative w-40 h-40 rounded-full border-2 border-[#d4af37] overflow-hidden">
              {/* glow ring */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_25px_rgba(212,175,55,0.6)]"></div>

              <img
                src="/profile.jpeg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* HEADER */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold text-[#d4af37] mb-6"
          >
            Contact
          </motion.h1>

          {/* DESCRIPTION */}
          <p className="text-[#e8e6e3]/70 mb-10 max-w-xl">
            Let’s build something meaningful. Whether it’s collaboration,
            development, or just a conversation — feel free to reach out.
          </p>

          {/* FORM */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-[#d4af37]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-[#d4af37]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black border border-[#d4af37]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 border border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37]/10 transition"
            >
              Send Message
            </motion.button>
          </form>

          {/* FOOTER */}
          <div className="mt-10 text-sm text-[#e8e6e3]/50">
            <p>Email: starkLak2104@proton.me</p>
            <p>GitHub: github.com/lak-stark</p>
          </div>
        </div>
      </div>
    </div>
  );
}
