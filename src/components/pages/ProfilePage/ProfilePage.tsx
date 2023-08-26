import { useFetchProfile } from 'hooks/networkHooks';
import './ProfilePage.scss';

interface UseRequestResult {

}

const ProfilePage = () => {

    const { isLoading, isError, error, data } = useFetchProfile();
    
    let profileMarkup;
    if (isLoading) {
        profileMarkup = <div className="alert alert-warning">Retrieving Data ...</div>;
    }
    if (isError) {
        profileMarkup = (
            <div>
                <div className="alert alert-danger">{ }</div>
            </div>
        );
    }

    if (data) {
        debugger;

    profileMarkup = <div>{data.name}</div>;
    }

    return (
        <div id='profilePage'>
            {profileMarkup}
        </div>
    );
}

export default ProfilePage;