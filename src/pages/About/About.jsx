
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
    Second-year CSE student at KIET, building a strong base in systems and development.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    I bring ideas to life by writing clean, efficient, and scalable code.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Strong grip on DSA, actively solving problems across LeetCode and CodeChef.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Participated in hackathons and coding contests to test skills under pressure.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Always learning — exploring new tech, APIs, and building side projects hands-on.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✦</span>
    Off the screen, I enjoy long walks, deep thinking, and staying creatively curious.
  </li>
</ul>




    </div>
  </div>
</section>







    </>
  );
}
