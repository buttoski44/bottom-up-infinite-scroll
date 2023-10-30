import Image from "next/image";
import IconVerified from "./(svg)/Iconverified";
export type resData = {
  id: String;
  message: String;
  sender: {
    image: String;
    is_kyc_verified: Boolean;
    self: Boolean;
    user_id: string;
  };
  time: Date;
};
export const Message = ({ obj }: { obj: resData }) => {
  const { message, sender, time } = obj;
  if (sender?.self)
    return (
      <div className="flex justify-end gap-2 py-2">
        <p className="w-[81%] p-2 rounded-l-lg rounded-br-lg bg-pwaBlue text-white text-sm font-medium shadow-lg ">
          {message}
        </p>
        <div className="relative w-6 h-6 bg-white rounded-full">
          <Image
            src={sender.image.toString()}
            width={24}
            height={24}
            alt={sender.user_id}
            className="rounded-full"
          />
          <div className="absolute bottom-0 right-0 w-2 h-2">
            <IconVerified />
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex gap-2 py-2">
      <div className="relative w-6 h-6 bg-white rounded-full">
        <Image
          src={sender.image.toString()}
          width={24}
          height={24}
          alt={sender.user_id}
          className="rounded-full"
        />
        <div className="absolute bottom-0 right-0 w-2 h-2">
          <IconVerified />
        </div>
      </div>
      <p className="w-[81%] p-2 rounded-r-lg rounded-bl-lg bg-white text-pwaGray-primary text-sm font-medium shadow-md ">
        {message}
      </p>
    </div>
  );
};
