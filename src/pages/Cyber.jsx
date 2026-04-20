import { motion } from "framer-motion";
import { themes } from "../data/theme";
import { useState } from "react";
import CyberIntro from "../components/CyberIntro";
import ToolModal from "../components/ToolModal";
import Donut from "../components/Donut";
import AnimatedText from "../components/AnimatedText";

export default function Cyber() {
  const [activeTool, setActiveTool] = useState(null);
  const theme = themes.cyber;
  const [showIntro, setShowIntro] = useState(true);

  const tools = [
    {
      title: "Nmap",
      description:
        "Advanced network scanning tool used for host discovery, port scanning, service enumeration, and OS fingerprinting. Frequently used in reconnaissance and attack surface mapping.",
    },
    {
      title: "Wireshark",
      description:
        "Packet analysis tool for deep inspection of network traffic. Used to analyze protocols, detect anomalies, and debug network-level issues in real time.",
    },
    {
      title: "Metasploit",
      description:
        "Powerful exploitation framework used to develop, test, and execute exploits against vulnerable systems. Supports payload generation, post-exploitation, and automation.",
    },
    {
      title: "Burp Suite",
      description:
        "Web security testing platform used for intercepting, modifying, and analyzing HTTP requests. Useful for identifying vulnerabilities like XSS, SQL injection, and auth flaws.",
    },
    {
      title: "BeEF",
      description:
        "Browser Exploitation Framework used to assess client-side vulnerabilities. Enables control over hooked browsers for testing real-world attack scenarios.",
    },
    {
      title: "Netcat",
      description:
        "Versatile networking utility used for port listening, banner grabbing, reverse shells, and manual interaction with services during testing.",
    },
    {
      title: "Hydra",
      description:
        "Fast password cracking tool used for brute-force attacks against various protocols such as SSH, FTP, and HTTP authentication systems.",
    },
    {
      title: "Aircrack-ng",
      description:
        "Wireless security auditing toolset used for capturing packets, analyzing Wi-Fi networks, and cracking weak encryption protocols like WEP/WPA.",
    },
    {
      title: "John the Ripper",
      description:
        "Password cracking tool used for testing password strength and recovering weak credentials through dictionary and brute-force attacks.",
    },
    {
      title: "Custom Python Tools",
      description:
        "Developed custom scripts for automation, scanning, and exploitation workflows including port scanners, brute-force tools, and packet analysis utilities.",
    },
    {
      title: "Networking",
      description:
        "Strong understanding of TCP/IP, DNS, HTTP/HTTPS, routing, and packet flow. Able to analyze and troubleshoot real-world network behavior.",
    },
    {
      title: "Linux / Kali",
      description:
        "Experienced with Linux environments, especially Kali Linux, for penetration testing, tool usage, and system-level operations.",
    },
  ];

  if (showIntro) {
    return <CyberIntro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div
      className={`${theme.bg} ${theme.text} min-h-screen relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.05),transparent_40%)]"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 space-y-32">
        <section className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="w-10 h-[2px] bg-green-500 mb-6"></div>

            <AnimatedText
              text="Cybersecurity"
              className="text-4xl md:text-6xl font-bold"
            />

            <AnimatedText
              text="I work extensively with network analysis, vulnerability assessment, and exploitation workflows using real-world security tools.  My approach focuses on understanding systems at a deeper level—how they communicate, where they fail, and how those weaknesses can be identified and leveraged.
"
              className="mt-6 text-green-300/80"
            />
          </motion.div>

          <div className="relative flex items-center justify-center">
            <div className="absolute w-[350px] h-[350px] bg-green-500/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10  rounded-[50%] p-4">
              <Donut />
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-10">Tools & Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.title} className="relative group cursor-pointer">
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-green-500/40 to-transparent">
                  <div className="bg-[#111827] rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-green-500/10 blur-2xl"></div>

                    <h3 className="text-lg font-semibold relative z-10">
                      {tool.title}
                    </h3>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-64 opacity-1 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  <div className="bg-black border border-green-500/30 rounded-xl p-4 shadow-xl relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-3 bg-black rotate-45 border-r border-b border-green-500/30"></div>

                    <h4 className="text-green-400 font-semibold text-sm">
                      {tool.title}
                    </h4>

                    <p className="text-green-300/80 text-xs mt-2 leading-relaxed ">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">What I Do</h2>

          <p className="text-green-300/80 max-w-3xl leading-relaxed">
            I explore system vulnerabilities, analyze network traffic, and build
            custom tools to automate security workflows. My focus is on
            practical, real-world security rather than theory.
          </p>
        </motion.section>
      </div>
      <ToolModal tool={activeTool} onClose={() => setActiveTool(null)} />
    </div>
  );
}
