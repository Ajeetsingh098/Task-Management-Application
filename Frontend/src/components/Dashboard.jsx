
import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/api';
import { Plus, Trash2, CheckCircle, Circle, Edit3, Check, X } from 'lucide-react';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '' });
    const [editingId, setEditingId] = useState(null); // Track which task is being edited
    const [editValue, setEditValue] = useState("");   // Track the new text
    
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const { data } = await fetchTasks(user.id);
            setTasks(data);
        } catch (err) {
            console.error("Error loading tasks", err);
        }
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!newTask.title.trim()) return;
        try {
            await createTask({ ...newTask, userId: user.id });
            setNewTask({ title: '' });
            loadTasks();
        } catch (err) {
            alert("Failed to add task");
        }
    };

    //  Editing Mode
    const startEdit = (task) => {
        setEditingId(task._id);
        setEditValue(task.title);
    };

    // Updated
    const handleSaveEdit = async (id) => {
        try {
            await updateTask(id, { title: editValue });
            setEditingId(null);
            loadTasks();
        } catch (err) {
            alert("Update failed");
        }
    };

    const handleToggleComplete = async (task) => {
        try {
            await updateTask(task._id, { completed: !task.completed });
            loadTasks();
        } catch (err) {
            alert("Update failed");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this task?")) {
            try {
                await deleteTask(id);
                loadTasks();
            } catch (err) {
                alert("Delete failed");
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <main className="max-w-3xl mx-auto">
                
                {/* WELCOME SECTION */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-slate-800">Welcome, {user?.firstName}</h1>
                    <p className="text-slate-500 text-sm">You have {tasks.filter(t => !t.completed).length} pending tasks.</p>
                </div>

                {/* ADD TASK FORM */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
                    <form onSubmit={handleAddTask} className="flex gap-3">
                        <input 
                            type="text"
                            placeholder="Add a new task..."
                            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            value={newTask.title}
                            onChange={(e) => setNewTask({ title: e.target.value })}
                        />
                        <button type="submit" className="bg-indigo-600 cursor-pointer text-white px-6 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2">
                            <Plus size={20} /> Add
                        </button>
                    </form>
                </div>

                {/* TASK LIST */}
                <div className="space-y-3">
                    {tasks.map((task) => (
                        <div key={task._id} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                            <div className="flex cursor-pointer items-center gap-4 flex-1">
                                <button onClick={() => handleToggleComplete(task)}>
                                    {task.completed ? <CheckCircle className="text-green-500 cursor-pointer" /> : <Circle className="text-slate-300 cursor-pointer" />}
                                </button>

                                {editingId === task._id ? (
                                    /* EDITING STATE */
                                    <input 
                                        className="flex-1 px-2 py-1 bg-indigo-50 border border-indigo-200 rounded-lg outline-none text-slate-800 font-semibold"
                                        value={editValue}
                                        autoFocus
                                        onChange={(e) => setEditValue(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(task._id)}
                                    />
                                ) : (
                                    /* NORMAL STATE */
                                    <span className={`font-semibold ${task.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                                        {task.title}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-1 ">
                                {editingId === task._id ? (
                                    <>
                                        <button onClick={() => handleSaveEdit(task._id)} className="p-2 cursor-pointer text-green-600 hover:bg-green-50 rounded-lg"><Check size={18} /></button>
                                        <button onClick={() => setEditingId(null)} className="p-2 cursor-pointer text-slate-400 hover:bg-slate-100 rounded-lg"><X size={18} /></button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => startEdit(task)} className="p-2 cursor-pointer text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"><Edit3 size={18} /></button>
                                        <button onClick={() => handleDelete(task._id)} className="p-2 cursor-pointer text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={18} /></button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;







