interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Props {
  users: Array<User>;
}

function About({ ...props }) {
  return (
    <div>
      <h1>About</h1>
      {props.users.map((user: User) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { users: data } };
}

export default About;
