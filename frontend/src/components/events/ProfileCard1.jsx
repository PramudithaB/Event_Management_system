import useEventcontext from "../../hooks/useEventcontext";

const ProfileCard1 = ({ contributor }) => {
  const { dispatch1 } = useEventcontext();

  const deletehandler = async () => {
    const response = await fetch(
      `http://localhost:4000/api/contributors/${contributor._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    }

    if (response.ok) {
      console.log("delete success");
      dispatch1({ type: "DELETE_CONTRIBUTER", payload: data });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center pb-10 m-8">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={`../public/images/${contributor.profileImage}`}
          alt="Profile image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {contributor.name}
        </h5>
        <span className="text-sm text-gray-500">
          {contributor.contribution}
        </span>
        
      </div>
    </>
  );
};

export default ProfileCard1;
