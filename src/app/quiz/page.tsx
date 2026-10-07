import QuizClient from './QuizClient';

export const metadata = {
  title: 'Find Your Perfect Plant | Suva Botanica',
  description: 'Take our interactive quiz to find the perfect plant for your space, lifestyle, and needs.',
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white selection:bg-emerald-500/30">
      <QuizClient />
    </main>
  );
}
