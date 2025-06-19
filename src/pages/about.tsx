import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const introVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1, 
      },
    },
  };

  const introItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const [missionVisionRef, missionVisionInView] = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  const missionVisionSectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2, 
      },
    },
  };

  const missionVisionItemVariants: Variants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const missionVisionTextItemVariants: Variants = {
    hidden: { opacity: 0, x: 50 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  const teamSectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren", 
        staggerChildren: 0.15, 
      },
    },
  };

  const teamCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        variants={introVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.h1
          variants={introItemVariants}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          About DevCore
        </motion.h1>
        <motion.p
          variants={introItemVariants}
          className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground"
        >
          We are a passionate team of developers, designers, and strategists
          dedicated to building high-quality digital products that drive
          business growth.
        </motion.p>
      </motion.div>

      <motion.div
        ref={missionVisionRef}
        variants={missionVisionSectionVariants}
        initial="hidden"
        animate={missionVisionInView ? "visible" : "hidden"}
        className="mt-16 grid md:grid-cols-2 gap-16 items-center py-24"
      >
        <motion.div variants={missionVisionItemVariants}>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
            alt="Our team at work"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div variants={missionVisionTextItemVariants} className="space-y-8">
          <motion.div variants={missionVisionTextItemVariants}>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-2 text-muted-foreground">
              To empower businesses of all sizes with innovative and reliable
              technology solutions, helping them to thrive in an increasingly
              digital world. We believe in the power of code to solve complex
              problems and create meaningful impact.
            </p>
          </motion.div>
          <motion.div variants={missionVisionTextItemVariants}>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="mt-2 text-muted-foreground">
              To be a leading software development partner known for our
              technical excellence, client-centric approach, and commitment to
              delivering exceptional value and fostering long-term
              relationships.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={teamRef}
        variants={teamSectionVariants}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold">Meet the (Placeholder) Team</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Our strength lies in our collective expertise and collaborative
          spirit.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div variants={teamCardVariants} className="bg-card p-6 rounded-lg border border-border">
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              alt="Jane Doe"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-bold">Faisal Noman</h3>
            <p className="text-primary">Lead Developer</p>
          </motion.div>
          <motion.div variants={teamCardVariants} className="bg-card p-6 rounded-lg border border-border">
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
              alt="John Smith"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-bold">Zain Noman</h3>
            <p className="text-primary">Senior Developer</p>
          </motion.div>
          <motion.div variants={teamCardVariants} className="bg-card p-6 rounded-lg border border-border">
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704f"
              alt="Alex Johnson"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-bold">Alex Johnson</h3>
            <p className="text-primary">Project Manager</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About