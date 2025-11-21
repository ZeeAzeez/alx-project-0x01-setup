import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserProps) => {
    // In a real application, you would add the user to your state or send to an API
    console.log("New user added:", newUser);
  };

  return (
    <div>
      <Header />
      <main className="grow bg-linear-to-r from-blue-500 to-purple-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold text-white">Users</h1>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Add User
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
