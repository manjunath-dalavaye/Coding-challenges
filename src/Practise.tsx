import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const FetchData: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { 
    const fetchedData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Error fetching the data");
        }
        const Dataa = await response.json();

        const sortedData = Dataa.sort((a: User, b: User) => 
            a.name.localeCompare(b.name) // Sorting users by name alphabetically
          );
        setData(sortedData);
      } catch {
        setError("Data failed"); // Updated error handling
      } finally {
        setLoading(false);
      }
    };
    fetchedData();
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <h3>Posts</h3>
      <ul>
        {data.map((item) => (
            <div>
          <li>(name--{item.name})</li>
          {/* <li>{item.email}</li> */}
          </div>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
