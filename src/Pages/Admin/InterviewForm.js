//import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase'; // Import your Firebase configuration
import React, { useState } from 'react';
import Header from '../Component/Header'
import { AiOutlineClose } from 'react-icons/ai'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';


const InterviewForm = ({ handleModalClose }) => {

  const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
  const [fname, setfName] = useState([]);
  const [lname, setlName] = useState([]);
  const [phoneNo, setphoneNo] = useState([]);
  const [Email, setEmail] = useState([]);
  const [department, setDepartment] = useState([]);
  const [User, setUser] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);

  // const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      if (file) {
        const storageRef = ref(storage, `uploaded_files/${file.name}`);
        await uploadBytes(storageRef, file);

        // Get the download URL for the uploaded file
        const url = await getDownloadURL(storageRef);

        // Set the download URL to state
        setDownloadURL(url);

        console.log('File uploaded successfully!');
      } else {
        console.error('No file selected!');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleQuestionChange = (index, type, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][type] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const questionsData = questions.map((q) => ({
      question: q.question,
      answer: q.answer,
      
    }));
    
    console.log(questionsData);
    try {
      const docRef = await addDoc(collection(db, 'employee'), {
        firstName: fname,
        lastName: lname,
        Email: Email,
        Phoneno: phoneNo,
        Department: department,
        questions: questionsData,
      });

      if (Response.ok) {
        alert('Message sent');
        // Additional logic after successful submission if needed
      } else {
        alert('Error occurred');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="z-10 bg-half-transparent  fixed inset-0  flex justify-center items-center overflow-y-auto">
     < div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] max-w-screen w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/3 overflow-y-auto rounded-lg" style={{ width: "70%", height: "90%" }}>

<div className="w-full p-6">
  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">

    <Header category="Employement" title="INTERVIEW Q & A" />
    
        
    <button
      type="button"
      className="text-gray-400 bg-transparent hover:bg-gray-200
       hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center
        dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={handleModalClose}
    >
      <AiOutlineClose className="w-5 h-5" />
    </button>
  </div>
  <h1 className="text-3xl font-semibold text-center text-green-700 underline uppercase ">

  </h1>
  <div className="mb-2">
    <label
     
      for="uploadCV"
      className="block text-sm font-semibold text-gray-800" onChange={handleFileChange}>Upload CV
    </label>

<input
      type="file"
      accept=".pdf, .doc, .docx, .jpg, .png"
      onChange={handleFileChange}
    />
    <button onClick={handleUpload}>Upload File</button>
    {downloadURL && (
        <div>
          <h2>File Preview</h2>
          <a href={downloadURL} target="_blank" rel="noopener noreferrer">
          {file.name}
          </a>
        </div>
      )}
     
        {/* User Info Fields */}
        <label
              for="fullname"
              className="block text-sm font-semibold text-gray-800"
            >
              FristName
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-stone-700
                             bg-white border rounded-md focus:border-stone-400
                              focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={fname} onChange={(e) => setfName(e.target.value)}
            />
          </div>
 {/* User Info Fields */}
 
 <div className="mb-2">
 <label
              for="lastName"
              className="block text-sm font-semibold text-gray-800"
            >
            LastName
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-stone-700
                             bg-white border rounded-md focus:border-stone-400
                              focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={lname} onChange={(e) => setlName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2
                             text-stone-700 bg-white border rounded-md focus:border-stone-400
                              focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={Email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label
              for="phoneNo"
              className="block text-sm font-semibold text-gray-800"
            >
              PhoneNo
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 mt-2 text-stone-700
                             bg-white border rounded-md focus:border-stone-400
                              focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={phoneNo} onChange={(e) => setphoneNo(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              for="department"
              className="block text-sm font-semibold text-gray-800"
            >
              Department
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-stone-700
                             bg-white border rounded-md focus:border-stone-400
                              focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={department} onChange={(e) => setDepartment(e.target.value)}
            />
          </div>

        {/* Dynamic Question and Answer Fields */}
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Question {index + 1}:
              <input className="w-full p-2 border rounded"
                type="text"
                value={q.question}
                onChange={(e) => handleQuestionChange(index, 'question', e.target.value)
              }
              />
            </label>
            <label className="block text-sm font-semibold mt-2 mb-2">
              Answer {index + 1}:
              <input  className="w-full p-2 border rounded"
                type="text"
                value={q.answer}
                onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
              />
            </label>
          </div>
        ))}
          <div class="flex justify-between">
                    <button type="button" onClick={handleAddQuestion} 
                    className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500">
          Add More Question
        </button>

        {/* Submit Button */}
        <button type="submit" onClick={handleSubmit}
        className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500">
          Submit
        </button>
          </div>

          </div>
      </div>
      </div>
  );
};

export default InterviewForm ;