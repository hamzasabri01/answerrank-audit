import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-page" style={{ minHeight: "100vh", padding: "120px 24px" }}>
      <div className="section-inner text-center" style={{ maxWidth: 620 }}>
        <span className="section-label">404</span>
        <h1 className="section-title">Page not found</h1>
        <p className="section-sub center">
          The page you are looking for is not available. Return to the AnswerRank Audit homepage.
        </p>
        <div style={{ marginTop: 28 }}>
          <Link className="btn-primary" href="/">
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
