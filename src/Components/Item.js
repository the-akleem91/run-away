export function Item({ item, onDeleteItems, handleToogle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToogle(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>
        <span class="material-symbols-outlined">delete</span>
      </button>
    </li>
  );
}
