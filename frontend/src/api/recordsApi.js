import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

export const getRecords = () => axios.get(API_URL, {
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
}

);

export const createRecord = (data) => 
    axios.post(API_URL, data, {
    headers: {
        Authorization: `Bearer ${getToken()}`
            }
    }
);

export const updateRecord = (id, data) => 
    axios.put(`${API_URL}/${id}`, data, {
    headers: {
        Authorization: `Bearer ${getToken()}`
            }
    }
        
    );

export const deleteRecord = (id) => {
    axios.delete(`${API_URL}/${id}`, 
        {
        headers: {
            Authorization: `Bearer ${getToken()}`
                }
        }
    )
        .then(response => {
    
        })
        .catch(err => {
            console.error("API Error:", err.message)
        })
}
    

