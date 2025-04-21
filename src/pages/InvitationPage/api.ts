import axios from "axios";

export const getInvitation = async (id: string | undefined) => {
  if (!id) return;

  return (
    await axios.get(
      `https://wedding-backend-kkv5.onrender.com/invitations/${id}`
    )
  ).data;
};
