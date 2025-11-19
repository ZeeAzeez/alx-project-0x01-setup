import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>

      <div className="space-y-2 text-gray-600">
        <div className="flex items-center">
          <span className="font-medium mr-2">Email:</span>
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
        </div>

        <div className="flex items-center">
          <span className="font-medium mr-2">Phone:</span>
          <span>{phone}</span>
        </div>

        <div className="flex items-center">
          <span className="font-medium mr-2">Website:</span>
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </div>

        <div className="mt-3">
          <span className="font-medium">Address:</span>
          <p className="text-sm ml-2">
            {address.suite}, {address.street}
          </p>
          <p className="text-sm ml-2">
            {address.city}, {address.zipcode}
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-200">
          <span className="font-medium">Company:</span>
          <p className="text-sm ml-2">{company.name}</p>
          <p className="text-xs text-gray-500 ml-2 italic">
            {company.catchPhrase}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
