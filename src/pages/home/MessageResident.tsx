import { useState } from "react";
import { usePost } from "../../hooks/usePost";
import { useRecoilValue } from "recoil";
import { new_user } from "../../global/RecoilState";

const MessageResident = () => {
  const [formdata, setFormdata] = useState({
    desc: "",
  });

  const { _id } = useRecoilValue(new_user);

  const { PostData, loading } = usePost();

  const handleMessage = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      // Call the register function with updated formdata
      await PostData(
        formdata,
        "64fb1b39b343e01e60c7abc8",
        "64ff3a3cbe16cd5d549ec589"
      );
    } catch (error) {
      console.log(`an error occured registering user`, error);
    }
  };

  const isFormFilled = formdata.desc !== "";

  return (
    <div>
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              {/* user profile */}
              <div className="w-10 bg-orange-500 flex justify-center items-center sm:w-16 h-10 sm:h-16 rounded-full">
                M
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                <span className="text-gray-700 mr-3">Name</span>
              </div>
              <span className="text-lg text-gray-600">Address</span>
            </div>
          </div>
        </div>
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          <div className="chat-message">
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                    Your error message says permission denied, npm global
                    installs must be given root privileges.
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-6 h-6 rounded-full order-2"
              />
            </div>
          </div>

          <div className="chat-message">
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                    I get the same error on Arch Linux (also with sudo)
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                    I also have this issue, Here is what I was doing until now:
                    #1076
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                    even i am facing
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <span className="absolute inset-y-0 flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </button>
            </span>
            <form onSubmit={handleMessage} className="w-[90%]">
              <input
                type="text"
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                onChange={(e: any) => {
                  setFormdata(e.target.value);
                }}
              />
              <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-red-500 hover:bg-blue-400 focus:outline-none"
                >
                  <span className="font-bold">
                    {loading ? "sending" : "send"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <script>
        const el = document.getElementById('messages') el.scrollTop =
        el.scrollHeight
      </script>
    </div>
  );
};

export default MessageResident;
