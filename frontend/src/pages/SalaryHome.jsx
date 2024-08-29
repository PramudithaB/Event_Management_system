import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { PDFDownloadLink } from "@react-pdf/renderer";
import SalaryPdf from '../components/SalaryPdf';
import SideNavbar from '../components/SideNavbar';
import Footer from "../components/footer";

import backgroundImage from "../assets/SalaryAssets/bimage2.jpg";

const Home = () => {
  const [salary, setSalary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const keys = ["name", "basicSalary", "attendance"];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/salary")
      .then((response) => {
        setSalary(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  console.log(salary);
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
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",
          }}
        />
        <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-col">
          <SideNavbar />
          <div className="flex-[85%] p-[20px]">
            <div className="flex justify-center items-center gap-x-4"></div>
            <div className="flex-grow text-center">
              <h1 className="text-3xl my-8 text-center font-bold text-black text-center">
                Salary List
              </h1>
              <Link to="/salary/create">
                <MdOutlineAddBox className="text-sky-800 text-4xl" />
              </Link>
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <table className="w-full border-separate border-spacing-2">
                <thead>
                  <tr>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      No
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      ID
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      Name
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      Basic Salary
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      Attendance
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      Allowance
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      EPF
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      ETF
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      Tax
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      NetSalary
                    </th>
                    <th className="border border-slate-600 rounded-md font-bold font-bold text-black">
                      Operations
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {search(salary).map((salary, index) => (
                    <tr key={salary._id} className="h-8">
                      <td className="border border-slate-700 rounded-md text-center font-bold text-black">
                        {index + 1}
                      </td>
                      <td className="border border-slate-700 rounded-md text-center max-md:hidden font-bold text-black">
                        {salary.s_id}
                      </td>
                      <td className="border border-slate-700 rounded-md text-center max-md:hidden font-bold text-black">
                        {salary.name}
                      </td>
                      <td className="border border-slate-700 rounded-md text-center font-bold text-black">
                        {salary.basicSalary}
                      </td>
                      <td className="border border-slate-700 rounded-md text-center max-md:hidden font-bold text-black">
                        {salary.attendance}
                      </td>
                      <td className="border border-slate-700 rounded-md text-center max-md:hidden font-bold text-black">
                        {salary.allowance}
                      </td>
                      <td className="border border-slate-700 rounded-md text-center max-md:hidden font-bold text-black">
                        {salary.epf}
                      </td>
                      <td className="border border-slate-700 rounded-md text-center max-md:hidden font-bold text-black">
                        {salary.etf}
                      </td>
                      <td className="border border-slate-700 rounded-md text-center max-md:hidden font-bold text-black">
                        {salary.tax}
                      </td>

                      <td className="border border-slate-700 rounded-md text-center max-md:hidden font-bold text-black">
                        {salary.netSalary}
                      </td>

                      <td className="border border-slate-700 rounded-md text-center">
                        <div className="flex justify-center gap-x-4">
                          <Link to={`/salary/details/${salary._id}`}>
                            <BsInfoCircle className="text-2xl text-green-800" />
                          </Link>
                          <Link to={`/salary/edit/${salary._id}`}>
                            <AiOutlineEdit className="text-2xl text-yellow-600" />
                          </Link>
                          <Link to={`/salary/delete/${salary._id}`}>
                            <MdOutlineDelete className="text-2xl text-red-600" />
                          </Link>
                          <PDFDownloadLink
                            document={<SalaryPdf salary={salary} />}
                            fileName="FORM"
                          >
                            {({ loading }) =>
                              loading ? (
                                <button>loading...</button>
                              ) : (
                                <button className="font-bold text-black">
                                  Download
                                </button>
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
    </div>
   <Footer/>
   </>
  );
};
export default Home;
