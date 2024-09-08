import React, { useContext, useState } from 'react';
import notecontext from '../context/notes/notescontext';

export default function Addnotes() {
    const context = useContext(notecontext);
    const { addnotes } = context;
    const [note, setNote] = useState({ title: "", desc: "", tag:"" }); // Default tag value

    const handleClick = async (e) => {
        e.preventDefault();
        addnotes(note.title, note.desc, note.tag);
        setNote({ title: "", desc: "", tag: "" }); // Reset to default tag value
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        aria-describedby="titleHelp"
                        value={note.title}
                        onChange={onChange}
                    />
                    <div id="titleHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="desc"
                        id="desc"
                        value={note.desc}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Status</label>
                    <select
                        className="form-select"
                        name="tag"
                        id="tag"
                        value={note.tag}
                        onChange={onChange}
                    >
                        <option value="todo">Todo</option>
                        <option value="in-Progress">In-Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
}
