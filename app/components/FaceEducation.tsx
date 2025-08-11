export default function FaceEducation() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--face-education)] text-white p-6">
      <h2 className="text-3xl font-semibold mb-4">📚 Education</h2>
      <ul className="space-y-3 text-center">
        <li>
          <strong>10th Grade (ICSE board)</strong>
          <p className="text-sm opacity-80">SFS Public School, 2022</p>
        </li>
        <li>
          <strong>12th Grade (CBSE board)</strong>
          <p className="text-sm opacity-80">Christ Academy Junior College, 2024</p>
        </li>
        <li>
          <strong>B.Tech – Computer Science</strong>
          <p className="text-sm opacity-80">PES University, 2024–2028</p>
        </li>
        <li>
          <strong>Certifications</strong>
          <p className="text-sm opacity-80">
            Google Cybersecurity, ZSecurity Ethical Hacking
          </p>
        </li>
      </ul>
    </div>
  );
}
