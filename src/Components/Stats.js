export function Stats({ items }) {
  if (!items.length) return <p className="stats">Add Some Items to Pack</p>;
  const numList = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const NumPercentage = Math.round((numPacked / numList) * 100);
  return (
    <footer className="stats">
      <em>
        {NumPercentage === 100
          ? "You are Ready to go to Flight Hurray!!!!"
          : `You have a ${numList} items in your Bag , and You Packed ${numPacked} (${NumPercentage}%)`}
      </em>
    </footer>
  );
}
