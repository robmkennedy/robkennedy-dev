import axios from 'axios';
import Note from 'model/Note';
import Skills from 'model/Skills';
import Profile from 'model/Profile';
import Employer from 'model/Employer';
import Qualification from 'model/Qualification';

const axiosInstance = axios.create({
    baseURL: '/samples',
    timeout: 1000,
    headers: {
        'Content-type': 'application/json'
    }
});

export const fetchSkills = (): Promise<Skills> => {
    return axiosInstance.get('skills.json').then(response => new Skills(response.data));
}

export const fetchProfile = (): Promise<Profile> => {
    return axiosInstance.get('profile.json').then(response => new Profile(response.data));
}

export const fetchEmployers = (): Promise<Employer[]> => {
    return axiosInstance.get('employers.json').then(response => {
        return response.data.map((data: Employer) => new Employer(data));
    });
}

export const fetchQualifications = (): Promise<Qualification[]> => {
    return axiosInstance.get('qualifications.json').then(response => {
        return response.data.map((data: Qualification) => new Qualification(data));
    });
}

export const fetchNotes = (): Promise<Note[]> => {
    return axiosInstance.get('notes.json').then(response => {
        return response.data.map((data: Note) => new Note(data));
    });
}