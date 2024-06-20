'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Home = () => {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const [regNum, setRegNum] = useState('');
    const [department, setDepartment] = useState('');
    const [score, setScore] = useState('');
    
    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        try {
            const response = await axios.get('http://localhost:3000/leaderboard');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching leaderboard data:', error);
        }
    };

    const handleRemove = async (regNo) => {
        try {
            await axios.delete('http://localhost:3000/delete', { data: { regNo } });
            fetchLeaderboard(); 
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleAddUser = async () => {
        const newUser = {
            name: username,
            regNo: regNum,
            Department: department,
            score: parseInt(score)
        };

        try {
            await axios.post('http://localhost:3000/add', newUser);
            fetchLeaderboard(); 
            setUsername('');
            setRegNum('');
            setDepartment('');
            setScore('');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="bg-[#121212] text-white min-h-screen">
            <div className="max-w-7xl mx-auto py-12">
                <h1 className="text-3xl font-bold text-center mb-8">Club Leaderboard</h1>
                {data.length === 0 ? (
                    <p className="text-center">No data available</p>
                ) : (
                    <div className="w-full h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#999ff" />
                                <XAxis dataKey="name" stroke="#ccc" />
                                <YAxis stroke="#ccc" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="score" fill="#3182CE" barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                )}

                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Add New User</h2>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mr-4 px-2 py-1 border border-gray-400 text-black rounded"
                        />
                        <input
                            type="text"
                            placeholder="Registration Number"
                            value={regNum}
                            onChange={(e) => setRegNum(e.target.value)}
                            className="mr-4 px-2 py-1 border border-gray-400 text-black rounded"
                        />
                        <input
                            type="text"
                            placeholder="Department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="mr-4 px-2 py-1 border border-gray-400 text-black rounded"
                        />
                        <input
                            type="number"
                            placeholder="Score"
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                            className="mr-4 px-2 py-1 border border-gray-400 text-black rounded"
                        />
                        <button
                            className="bg-green-500 hover:bg-green-600 text-black px-4 py-1 rounded"
                            onClick={handleAddUser}
                        >
                            Add User
                        </button>
                    </div>
                </div>
                <h2 className="text-xl font-bold my-4">Remove User</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map(member => (
                        <div key={member.regNo} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                            <div>{member.name}</div>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded"
                                onClick={() => handleRemove(member.regNo)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
