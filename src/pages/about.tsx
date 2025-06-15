// src / pages / About.tsx;

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          About DevCore
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We are a passionate team of developers, designers, and strategists
          dedicated to building high-quality digital products that drive
          business growth.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
            alt="Our team at work"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-2 text-muted-foreground">
              To empower businesses of all sizes with innovative and reliable
              technology solutions, helping them to thrive in an increasingly
              digital world. We believe in the power of code to solve complex
              problems and create meaningful impact.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="mt-2 text-muted-foreground">
              To be a leading software development partner known for our
              technical excellence, client-centric approach, and commitment to
              delivering exceptional value and fostering long-term
              relationships.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold">Meet the (Placeholder) Team</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Our strength lies in our collective expertise and collaborative
          spirit.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              alt="Jane Doe"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-bold">Jane Doe</h3>
            <p className="text-primary">Lead Developer</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
              alt="John Smith"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-bold">John Smith</h3>
            <p className="text-primary">UX/UI Designer</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026704f"
              alt="Alex Johnson"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-bold">Alex Johnson</h3>
            <p className="text-primary">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
