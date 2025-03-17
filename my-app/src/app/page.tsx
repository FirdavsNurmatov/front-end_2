import { UserCard } from "@/components/user-card";
import { UserForm } from "@/components/user-form";
import { getAllUsers } from "@/service/todo";

export default async function Home() {
  const users = await getAllUsers();

  return (
    <div className="container">
      <UserForm />
      {users.map((item) => (
        <UserCard key={item.id} {...item} />
      ))}
    </div>
  );
}
