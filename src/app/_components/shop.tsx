export default function Shop({ setScore }: any) {
  return (
    <main className="absolute left-0 gap-4 p-4">
      <h1>Shop:</h1>
      <button onClick={setScore(10)}>Test button</button>
    </main>
  );
}
