import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([
    {
      title: "Note 1",
      content: "Content 1",
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [uppdate, setUpadate] = useState(false);

  const getNotes = async () => {
    axios
      .get("http://localhost:3000/notes")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uppdate) {
      axios.put(`http://localhost:3000/notes/${note._id}`, { title, content });
    } else {
      axios.post("http://localhost:3000/notes", { title, content });
    }
    setTitle("");
    setContent("");
    setUpadate(false);
  };

  return (
    <div className="text-2xl font-bold flex flex-col gap-10 flex-wrap">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" w-[400px] border border-gray-300 rounded-lg p-2 mb-2"
          type="text"
          placeholder="Title"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className=" w-[400px] border border-gray-300 rounded-lg p-2 mb-2"
          type="text"
          placeholder="Content"
        />
        <button
          className=" w-[400px] border border-gray-300 rounded-lg p-2 mb-2 cursor-pointer"
          type="submit"
        >
          Add Note
        </button>
      </form>
      {notes.map((note) => (
        <div
          key={note._id}
          className="border border-gray-300 rounded-lg p-4 mb-4 grow-1 min-w-[300px] max-w-[400px]"
        >
          <div className="flex justify-between">
            <h1 className="text-xl ">{note.title}</h1>
            <div className="">
              {" "}
              <button
                onClick={() => {
                  axios.delete(`http://localhost:3000/notes/${note._id}`);
                  getNotes();
                }}
                className="mr-2 px-5 py-2 border border-gray-300 bg-blue-300 rounded-lg"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setUpadate(true);
                  setTitle(note.title);
                  setContent(note.content);
                }}
                className="px-5 py-2 border border-gray-300 bg-red-300 rounded-lg"
              >
                Update
              </button>
            </div>
          </div>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
