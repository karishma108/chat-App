import { useRef } from "react";
import { FiCamera } from "react-icons/fi";
import useUpdateProfilePic from "../../hooks/useUpdateProfilePic";
import { userAuthContext } from "../../context/AuthContext";
import { resolveAssetUrl } from "../../utils/resolveAssetUrl";

const ProfileSettings = () => {
  const { loading, updateProfilePic } = useUpdateProfilePic();
  const { authUser } = userAuthContext();
  const fileInputRef = useRef(null);

  if (!authUser) {
    return null;
  }

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    await updateProfilePic(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-purple-700/40 border border-purple-500 px-4 py-3 text-sm text-white">
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-orange-400">
            <img src={resolveAssetUrl(authUser.profilePic)} alt={authUser.fullName} />
          </div>
        </div>
        <div>
          <p className="font-semibold leading-snug">{authUser.fullName}</p>
          <button
            type="button"
            onClick={handleChooseFile}
            disabled={loading}
            className="mt-1 inline-flex items-center gap-1 rounded-md bg-orange-500 px-3 py-1 text-xs font-medium text-white hover:bg-orange-400 transition disabled:opacity-60"
          >
            <FiCamera size={14} />
            Change photo
          </button>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProfileSettings;
