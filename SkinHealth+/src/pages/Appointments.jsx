import React, { useEffect, useState } from "react";
import axios from "axios";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:8000/appointments");
        setAppointments(res.data);
      } catch (err) {
        console.error("Error fetching appointments", err);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        My Appointments
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">

        {appointments.map((appt, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow border"
          >
            <p className="font-semibold text-lg">{appt.doctor}</p>
            <p className="text-sm text-gray-500">{appt.name}</p>
            <p className="text-xs text-gray-400">{appt.email}</p>

            <div className="mt-2 text-sm">
              📅 {appt.date} | ⏰ {appt.time}
            </div>

            {appt.notes && (
              <p className="text-xs text-gray-500 mt-2">
                📝 {appt.notes}
              </p>
            )}
          </div>
        ))}

        {appointments.length === 0 && (
          <p className="text-center text-gray-400">
            No appointments booked yet.
          </p>
        )}

      </div>
    </div>
  );
};

export default Appointments;