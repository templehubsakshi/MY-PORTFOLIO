
// import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
<section
  id="about"
  className="py-20 md:py-28 px-6 bg-gradient-to-br from-[#04081A] via-[#0A0F2E] to-[#04081A] text-white"
>
  <div className="max-w-5xl mx-auto space-y-14">

    {/* Small Top Label */}
    <p className="text-center text-lg md:text-xl text-cyan-400 uppercase tracking-widest">
      Explorer • Builder • Learner
    </p>

    {/* Heading */}
    <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-wide">
      <span className="inline-block border-b-4 border-cyan-400 pb-2">
        Who I Am
      </span>
    </h2>

    {/* Glass Container with Bullet Points */}
    <div
      className="backdrop-blur-lg bg-white/5 rounded-xl p-8 md:p-10 border border-white/10 shadow-xl"
      data-aos="fade-up"
      data-aos-duration="800"
    >
     <ul className="space-y-4 text-[1.15rem] md:text-[1.25rem] leading-relaxed text-gray-300">
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Third-year Computer Science Engineering student at KIET, building a strong foundation in software development and system design.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Passionate about developing clean, scalable, and user-focused applications using modern web technologies.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Consistently practicing Data Structures and Algorithms on platforms like LeetCode and CodeChef to strengthen problem-solving skills.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Experience working on full-stack projects and collaborating in team-based environments and hackathons.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Actively exploring backend systems, APIs, and modern frameworks to build production-ready applications.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Outside of coding, I enjoy reflective walks, creative thinking, and continuously challenging myself to grow both personally and professionally.
  </li>
</ul>

    </div>
  </div>
</section>







    </>
  );
}
