import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const params = useParams();
  return (
    <h1 className="text-primary">
      Profile page of {params.name}
    </h1>
  );
}