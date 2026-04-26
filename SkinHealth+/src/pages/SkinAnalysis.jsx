import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startAnalysis,
  analysisSuccess,
  analysisFailure,
} from "../redux/analysisSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ ADDED

const SkinAnalysis = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ ADDED

  const { loading, result, error } = useSelector((state) => state.analysis);

  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleImageChange = (e) => handleFile(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const analyzeImage = async () => {
    if (!image) return;

    dispatch(startAnalysis());

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post(
        "http://localhost:8000/predict",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      dispatch(analysisSuccess(response.data));
    } catch (err) {
      dispatch(analysisFailure("Failed to analyze image"));
      console.error(err);
    }
  };

  const confidencePct = result ? (result.confidence * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-14">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-500 to-teal-400" />

          <div className="p-8">
            <p className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-1">
              Dermatology AI
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-7">
              Analyze Your Skin
            </h2>

            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`
                relative flex flex-col items-center justify-center gap-3
                min-h-[170px] rounded-xl border-2 border-dashed cursor-pointer
                transition-all duration-200 px-6 py-10
                ${isDragging
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 bg-gray-50 hover:border-blue-300 hover:bg-blue-50/40"
                }
              `}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

              <p className="text-sm font-semibold text-gray-700">
                {isDragging ? "Release to upload" : "Drag & drop your image here"}
              </p>
              <p className="text-xs text-gray-400">
                or <span className="text-blue-500 font-medium">browse files</span>
              </p>
            </div>

            {previewURL && (
              <div className="mt-5 rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={previewURL}
                  alt="Preview"
                  className="w-full h-56 object-cover"
                />
              </div>
            )}

            <button
              onClick={analyzeImage}
              disabled={!image || loading}
              className="mt-5 w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-500 to-teal-400 disabled:opacity-40 transition-all"
            >
              {loading ? "Analyzing…" : "Run AI Analysis"}
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="h-1 bg-gradient-to-r from-blue-500 to-teal-400" />

          <div className="p-8 flex flex-col flex-1">

            {!result && !loading && !error && (
              <div className="flex-1 flex items-center justify-center text-gray-300 text-sm text-center">
                Upload an image to see AI prediction results.
              </div>
            )}

            {loading && (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Analyzing image...
              </div>
            )}

            {result && !loading && (
              <div className="flex flex-col flex-1">

                <span className="text-xs font-bold uppercase text-blue-500 mb-2">
                  Detected Condition
                </span>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {result.disease}
                </h2>

                <div className="flex justify-between mb-2 text-sm text-gray-500">
                  <span>Confidence</span>
                  <span className="font-semibold text-gray-800">
                    {confidencePct}%
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-teal-400"
                    style={{ width: `${confidencePct}%` }}
                  />
                </div>

                {/* Causes */}
                <div className="mb-6">
                  <h3 className="text-xs uppercase font-semibold text-gray-400 mb-2">
                    Possible Causes
                  </h3>
                  <div className="bg-gray-50 border rounded-xl p-4 text-sm text-gray-600">
                    {result.causes}
                  </div>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="text-xs uppercase font-semibold text-gray-400 mb-2">
                    Suggested Care
                  </h3>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
                    {result.solution}
                  </div>
                </div>

                {/* DOCTORS */}
                {result.doctors && result.doctors.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs uppercase font-semibold text-gray-400 mb-3">
                      Recommended Dermatologists
                    </h3>

                    <div className="space-y-3">
                      {result.doctors.map((doc) => (
                        <div
                          key={doc.id}
                          className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                        >
                          <p className="font-semibold text-gray-800">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.specialty}</p>
                          <p className="text-xs text-blue-500">📍 {doc.location}</p>
                        </div>
                      ))}
                    </div>

                    {/* ✅ THIS IS STEP 3.3 */}
                    <button
                     onClick={() => navigate(`/doctors?disease=${result.disease}`)}
                      className="mt-4 w-full py-2 rounded-lg bg-gray-800 text-white text-sm hover:bg-gray-700 transition"
                    >
                      View All Dermatologists
                    </button>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="mt-auto bg-amber-50 border border-amber-100 rounded-xl p-4 text-xs text-gray-600">
                  ⚠️ This AI tool is for educational purposes only.
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm mt-4">
                {error}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default SkinAnalysis;