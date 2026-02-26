import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startAnalysis,
  analysisSuccess,
  analysisFailure,
} from "../redux/analysisSlice";
import axios from "axios";

const SkinAnalysis = () => {
  const dispatch = useDispatch();
  const { loading, result, error } = useSelector(
    (state) => state.analysis
  );

  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
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
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(analysisSuccess(response.data));
    } catch (err) {
      dispatch(analysisFailure("Failed to analyze image"));
      console.error(err);
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center px-6 py-12">
    
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Left Section */}
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/40">
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">
          Upload Skin Image
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-sm text-slate-600"
        />

        {previewURL && (
          <img
            src={previewURL}
            alt="Preview"
            className="mt-6 w-full h-80 object-cover rounded-2xl shadow-md"
          />
        )}

        <button
          onClick={analyzeImage}
          className="mt-6 w-full py-3 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-900 transition duration-300"
        >
          {loading ? "Analyzing..." : "Analyze Skin"}
        </button>
      </div>

      {/* Right Section */}
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/40 flex flex-col justify-center">
        
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">
          AI Analysis Result
        </h2>

        {!result && !loading && (
          <p className="text-slate-500">
            Upload an image to receive AI-based prediction.
          </p>
        )}

        {loading && (
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-slate-300 rounded w-3/4"></div>
            <div className="h-4 bg-slate-300 rounded w-1/2"></div>
          </div>
        )}

        {result && (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800">
                {result.disease}
              </h3>
            </div>

            {/* Confidence Bar */}
            <div className="w-full bg-slate-200 rounded-full h-4 mb-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${result.confidence * 100}%` }}
              ></div>
            </div>

            <p className="text-slate-600">
              Confidence: {(result.confidence * 100).toFixed(2)}%
            </p>

            <div className="mt-6 text-sm text-slate-400">
              ⚠ This AI system is for educational purposes and not a medical diagnosis.
            </div>
          </>
        )}

        {error && (
          <p className="text-red-500 font-medium mt-4">
            {error}
          </p>
        )}

      </div>

    </div>
  </div>
);
};

export default SkinAnalysis;