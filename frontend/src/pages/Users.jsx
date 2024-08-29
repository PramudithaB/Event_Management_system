import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import "../components/styles/home.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import UserPdf from "../components/users/UserPdf";

import backgroundImage from "../assets/UserAssets/back2.jpg";
import SideNavbar from "../components/SideNavbar";
import Footer from "../components/footer";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const keys = ["name", "gmail"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  var i = 0;
  for (let x in users) {
    if (users[x].gender == "male") {
      i++;
    }
  }
  console.log(i);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/register")
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        //console.log(error);
        setLoading(false);
      });
  }, []);

  //console.log(users);
  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set background image
          backgroundSize: "cover", // Adjust background image size
          backgroundPosition: "center", // Adjust background image position
          minHeight: "100vh", // Ensure the background covers the entire screen
        }}
      >
        <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-col">
          <SideNavbar />
          <div className="flex-[85%] p-[20px]">
            <div className="p-4">
              <div className="flex justify-center items-center gap-x-4"></div>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Admin Dashboard</h1>
                <div>
                  <h1 className="font-semibold">Users Count: {users.length}</h1>
                </div>
                <div>
                  <h1 className="font-semibold">Male Users Count: {i}</h1>
                </div>
                <div>
                  <h1 className="font-semibold">
                    Female Users Count: {users.length - i}
                  </h1>
                </div>
                <div className="form-control ">
                  <input
                    type="text"
                    placeholder="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="input input-bordered w-24 md:w-auto"
                  />
                </div>
              </div>
              {loading ? (
                <Spinner />
              ) : (
                <table className="w-full border-separate border-spacing-2">
                  <thead>
                    <tr>
                      <th className="border border-slate-600 rounded-md">No</th>
                      <th className="border border-slate-600 rounded-md">
                        Name
                      </th>
                      <th className="border border-slate-600 rounded-md">
                        Email
                      </th>
                      <th className="border border-slate-600 rounded-md">
                        Gender
                      </th>
                      <th className="border border-slate-600 rounded-md">
                        Age
                      </th>
                      <th className="border border-slate-600 rounded-md">
                        Address
                      </th>
                      <th className="border border-slate-600 rounded-md">
                        Contact
                      </th>
                      <th className="border border-slate-600 rounded-md">
                        Operations
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {search(users).map((user, index) => (
                      <tr key={user._id} className="h-8">
                        <td className="border border-slate-700 rounded-md text-center">
                          {index + 1}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                          {user.name}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                          {user.gmail}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                          {user.gender}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                          {user.age}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                          {user.address}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                          {user.contact}
                        </td>

                        <td className="border border-slate-700 rounded-md text-center">
                          <div className="flex justify-center gap-x-4">
                            <Link to={`/users/delete/${user._id}`}>
                              <MdOutlineDelete className="text-2xl text-red-600" />
                            </Link>

                            <PDFDownloadLink
                              document={<UserPdf user={user} />}
                              fileName="FORM"
                            >
                              {({ loading }) =>
                                loading ? (
                                  <button>loading...</button>
                                ) : (
                                  <button>download</button>
                                )
                              }
                            </PDFDownloadLink>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
