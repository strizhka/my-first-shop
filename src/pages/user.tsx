import UserProfile from "../components.tsx/user/userDetails";
import { useAppSelector } from "../redux/hooks";
import { User } from "../redux/Slices/userSlice";

export const UserPage = () => {
  const llll: boolean = useAppSelector((state) => state.user.isLoged)!;
  const u: User = useAppSelector((state) => state.user.currentUser)!;
  console.log(llll);
  console.log(u);
  return (
    <div>
      <UserProfile></UserProfile>
    </div>
  );
};
