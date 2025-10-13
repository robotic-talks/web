export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/temp_boat.JPG)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello World</h1>
          <p className="mb-5">
            MOON Lab welcomes you to <b>Robotic Talks</b>. Ready to explore the
            fascinating world of robotics with our team?
          </p>
          <button className="btn btn-primary rounded">Get Started</button>
        </div>
      </div>
    </div>
  );
}
