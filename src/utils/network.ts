import axios from "axios";
import Skills from "model/Skills";
import Profile from "model/Profile";
import Employer from "model/Employer";
import Qualification from "model/Qualification";

const axiosInstance = axios.create({
    baseURL: '/samples',
    timeout: 1000,
    headers: {
        "Content-type": "application/json"
    }
});

export const fetchSkills = (): Promise<Skills> => {
    return axiosInstance.get('skills.json').then(response => response.data);
}

export const fetchProfile = (): Promise<Profile> => {
    return axiosInstance.get('profile.json').then(response => response.data);
}

export const fetchEmployers = (): Promise<Employer[]> => {
    return axiosInstance.get('employers.json').then(response => response.data);
}

export const fetchQualifications = (): Promise<Qualification[]> => {
    return axiosInstance.get('qualifications.json').then(response => response.data);
}