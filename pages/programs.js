export default function Programs() {
  const programs = [
    "Starter Program – Beginner-Friendly",
    "Pro Program – Intermediate",
    "Elite Program – Advanced"
  ];

  return (
    <div className="container">
      <h1>Our Programs</h1>
      <ul className="list-disc ml-6 mt-4">
        {programs.map((p, i) => (
          <li key={i} className="mb-2">{p}</li>
        ))}
      </ul>
    </div>
  );
}
