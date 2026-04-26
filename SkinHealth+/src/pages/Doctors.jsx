import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const disease = queryParams.get("disease");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:8000/doctors");

        let data = res.data;

        if (disease) {
          data = data.filter((doc) =>
            doc.expertise.includes(disease)
          );
        }

        setDoctors(data);
      } catch (err) {
        console.error("Error fetching doctors", err);
      }
    };

    fetchDoctors();
  }, [disease]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Dermatologists
      </h1>

      {disease && (
        <p className="text-center text-sm text-gray-500 mb-8">
          Showing doctors for:{" "}
          <span className="font-semibold">{disease}</span>
        </p>
      )}

      {/* CARD GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-5 flex gap-4"
          >

            <img
              src={doc.image || "https://via.placeholder.com/100"}
              alt={doc.name}
              className="w-20 h-20 rounded-xl object-cover border"
            />

            <div className="flex flex-col flex-1">

              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    {doc.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {doc.specialty}
                  </p>
                </div>

                <span className="text-sm font-semibold text-gray-700">
                  ⭐ {doc.rating}
                </span>
              </div>

              <p className="text-xs text-blue-500 mt-1">
                📍 {doc.location}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {doc.experience} experience
              </p>

              <div className="flex flex-wrap gap-1 mt-2">
                {doc.expertise.map((exp, index) => (
                  <span
                    key={index}
                    className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full border border-blue-100"
                  >
                    {exp}
                  </span>
                ))}
              </div>

              {/* BOOK BUTTON */}
              <button
                onClick={() => {
                  setSelectedDoctor(doc);
                  setShowModal(true);
                  setSuccess(false);
                }}
                className="mt-3 self-start text-xs bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 transition"
              >
                Book Appointment
              </button>

            </div>
          </div>
        ))}

        {doctors.length === 0 && (
          <p className="col-span-2 text-center text-gray-400">
            No specialists available for this condition.
          </p>
        )}

      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-lg">

            <h2 className="text-lg font-bold mb-4">
              Book Appointment
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              {selectedDoctor?.name}
            </p>

            {!success ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.target);

                  const data = {
                    doctor: selectedDoctor.name,
                    name: formData.get("name"),
                    email: formData.get("email"),
                    date: formData.get("date"),
                    time: formData.get("time"),
                    notes: formData.get("notes"),
                  };

                  try {
                    await axios.post("http://localhost:8000/book", data);
                    setSuccess(true);
                  } catch (err) {
                    console.error("Booking failed", err);
                  }
                }}
                className="space-y-3"
              >

                {/* ✅ FIXED INPUTS */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />

                <input
                  type="date"
                  name="date"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />

                <input
                  type="time"
                  name="time"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />

                <textarea
                  name="notes"
                  placeholder="Additional Notes"
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />

                <div className="flex justify-end gap-2 mt-4">

                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg"
                  >
                    Confirm
                  </button>

                </div>

              </form>
            ) : (
              <div className="text-center py-6">

                <p className="text-green-600 font-semibold mb-3">
                  ✅ Appointment Booked Successfully
                </p>

                <button
                  onClick={() => {
                    setShowModal(false);
                    setSuccess(false);
                  }}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg"
                >
                  Done
                </button>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Doctors;