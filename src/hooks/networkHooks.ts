import { useQuery } from "@tanstack/react-query";
import { fetchEmployers, fetchProfile, fetchSkills, fetchQualifications } from "utils/network";

enum QueryKeys {
    QUERY_SKILLS = 'QUERY_SKILLS',
    QUERY_PROFILE = 'QUERY_PROFILE',
    QUERY_EMPLOYERS = 'QUERY_EMPLOYERS',
    QUERY_QUALIFICATIONS = 'QUERY_QUALIFICATIONS'
}

export const useFetchSkills = () => {
    return useQuery({ queryKey: [QueryKeys.QUERY_SKILLS], queryFn: fetchSkills });
};

export const useFetchProfile = () => {
    return useQuery({ queryKey: [QueryKeys.QUERY_PROFILE], queryFn: fetchProfile });
};

export const useFetchEmployers = () => {
    return useQuery({ queryKey: [QueryKeys.QUERY_EMPLOYERS], queryFn: fetchEmployers });
};

export const useFetchQualifications = () => {
    return useQuery({ queryKey: [QueryKeys.QUERY_QUALIFICATIONS], queryFn: fetchQualifications });
};