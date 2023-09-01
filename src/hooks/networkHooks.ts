import { UseQueryResult, useQuery } from '@tanstack/react-query';
import Note from 'model/Note';
import Skills from 'model/Skills';
import Profile from 'model/Profile';
import Employer from 'model/Employer';
import Qualification from 'model/Qualification';
import { fetchEmployers, fetchProfile, fetchSkills, fetchQualifications, fetchNotes } from 'utils/network';

enum QueryKeys {
    QUERY_SKILLS = 'QUERY_SKILLS',
    QUERY_PROFILE = 'QUERY_PROFILE',
    QUERY_EMPLOYERS = 'QUERY_EMPLOYERS',
    QUERY_QUALIFICATIONS = 'QUERY_QUALIFICATIONS',
    QUERY_NOTES = 'QUERY_NOTES'
}

export const useFetchSkills = (): UseQueryResult<Skills> => {
    return useQuery({ queryKey: [QueryKeys.QUERY_SKILLS], queryFn: fetchSkills});
};

export const useFetchProfile = (): UseQueryResult<Profile> => {
    return useQuery({ queryKey: [QueryKeys.QUERY_PROFILE], queryFn: fetchProfile});
};

export const useFetchEmployers = (): UseQueryResult<Employer[]> => {
    return useQuery({ queryKey: [QueryKeys.QUERY_EMPLOYERS], queryFn: fetchEmployers });
};

export const useFetchQualifications = (): UseQueryResult<Qualification[]> => {
    return useQuery({ queryKey: [QueryKeys.QUERY_QUALIFICATIONS], queryFn: fetchQualifications });
};

export const useFetchNotes = (): UseQueryResult<Note[]> => {
    return useQuery({ queryKey: [QueryKeys.QUERY_NOTES], queryFn: fetchNotes});
};