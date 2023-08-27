import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Profile from "model/Profile";
import Skills from "model/Skills";
import { fetchEmployers, fetchProfile, fetchSkills, fetchQualifications } from "utils/network";

enum QueryKeys {
    QUERY_SKILLS = 'QUERY_SKILLS',
    QUERY_PROFILE = 'QUERY_PROFILE',
    QUERY_EMPLOYERS = 'QUERY_EMPLOYERS',
    QUERY_QUALIFICATIONS = 'QUERY_QUALIFICATIONS'
}


const transformSkills = (response: AxiosResponse): Skills => new Skills(response.data);

export const useFetchSkills = () => {
    // return useQuery({ queryKey: [QueryKeys.QUERY_SKILLS], queryFn: fetchSkills, select: transformSkills});
};

// const transformProfile = (response: Profile): Profile => {
//     debugger;
//     return new Profile(response)
// };

export const useFetchProfile = () => {
    return useQuery({ queryKey: [QueryKeys.QUERY_PROFILE], queryFn: fetchProfile});
};

export const useFetchEmployers = () => {
    return useQuery({ queryKey: [QueryKeys.QUERY_EMPLOYERS], queryFn: fetchEmployers });
};

export const useFetchQualifications = () => {
    return useQuery({ queryKey: [QueryKeys.QUERY_QUALIFICATIONS], queryFn: fetchQualifications });
};