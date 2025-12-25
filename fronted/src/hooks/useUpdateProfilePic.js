import { useState } from "react";
import toast from "react-hot-toast";
import { userAuthContext } from "../context/AuthContext";

const useUpdateProfilePic = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = userAuthContext();

  const updateProfilePic = async (file) => {
    if (!file) {
      toast.error("Select an image to upload");
      return false;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    setLoading(true);
    try {
      const res = await fetch("/api/users/profile", {
        method: "PATCH",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to update profile");
      }

      setAuthUser(data);
      localStorage.setItem("chat-user", JSON.stringify(data));
      toast.success("Profile photo updated");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateProfilePic };
};

export default useUpdateProfilePic;
