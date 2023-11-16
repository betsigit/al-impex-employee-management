import React, { useState } from 'react';
import Header from '../Component/Header'
import { AiOutlineClose } from 'react-icons/ai'



const InterviewForm = ({ handleModalClose }) => {

  const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
  const [name, setName] = useState([]);
  const [phoneNo, setphoneNo] = useState([]);
  const [email, setEmail] = useState([]);
  const [department, setDepartment] = useState([]);



  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(event.target.files[0]);
  }

  const handleUpload = () => {
    if (selectedFile) {
      // Perform file upload logic here (e.g., send the file to the server)
      console.log('Uploading file:', selectedFile);
      // Reset the selected file after upload
      setSelectedFile(null);
    } else {
      alert('Please select a file before uploading.');
    }
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const handleInputChange = (index, type, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][type] = value;
    setQuestions(updatedQuestions);
  };
  const handleSubmit = () => {
    if (questions.length === 0) {
      alert("Nothing to submit");
    } else {
      const url = "http://localhost/enquiry.php";

      let fData = new FormData();
      fData.append('Fullname', name);
      fData.append('phoneNo', phoneNo);
      fData.append('questions', questions);

      /*axios.post(url,fData)
      .then(response=> alert(response.data))
      .catch(error=> alert(error));*/
    }
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  /*const handleReset = () => {
    setName('');
    setphoneNo('');
    setEmail('');
    setQuestions(['']);
  };*/
  return (
    <div className=" bg-half-transparent  fixed inset-0  flex justify-center items-center overflow-y-auto">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] max-w-screen w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/3 overflow-y-auto rounded-lg" style={{ width: "70%", height: "90%" }}>

        <div className="w-full p-6">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">

            <Header category="Employement" title="INTERVIEW Q & A" />

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleModalClose}
              data-modal-hide="editUserModal"
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          </div>
          <h1 className="text-3xl font-semibold text-center text-green-700 underline uppercase ">

          </h1>
          <div className="mb-2">
            <label
              for="uploadCV"
              className="block text-sm font-semibold text-gray-800">Upload CV
            </label>

            <input
              type="file"
              accept=".pdf, .doc, .docx, .jpg, .png"
              onChange={handleFileChange}
            />
            <button onClick={handleUpload}>Upload File</button>
            <label
              for="fullname"
              className="block text-sm font-semibold text-gray-800"
            >
              Fullname
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-stone-700
                             bg-white border rounded-md focus:border-stone-400
                              focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={name} onChange={(e) => setName(e.target.value)}
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
              value={email} onChange={(e) => setEmail(e.target.value)}
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
              type="number"
              className="block w-full px-4 py-2 mt-2 text-stone-700
                             bg-white border rounded-md focus:border-stone-400
                              focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={department} onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Question {index + 1}:
              </label>
              <input
                type="text"
                value={q.question}
                onChange={(e) => handleInputChange(index, 'question', e.target.value)}
                className="w-full p-2 border rounded"
              />
              <label className="block text-sm font-semibold mt-2 mb-2">
                Answer {index + 1}:
              </label>
              <input
                type="text"
                value={q.answer}
                onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

          ))}
          <div class="flex justify-between">
            <button
              onClick={handleAddQuestion}
              className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500"
            >
              Add More Question
            </button>

            <button
              onClick={onSubmit}
              className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500"
            >
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InterviewForm;