const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function MyButton() {
  return (
    <button
      style={{
        color: "red",
        backgroundColor: "#01283B",
        padding: "1rem 2rem",
        borderRadius: "15px",
        fontSize: "1rem",
        fontWeight: "bold",
      }}
    >
      I'm a button
    </button>
  );
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));

export default function MyApp() {
  return (
    <div>
      <Profile />
      <h1>Welcome to my app</h1>
      <MyButton />
      <ul>{listItems}</ul>
    </div>
  );
}
