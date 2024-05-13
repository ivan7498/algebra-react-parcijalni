import useSWR from 'swr';
import PropTypes from 'prop-types';

const fetcher = (...args) => fetch(...args).then(response => response.json());

function UserInfo({ userName }) {
    const { data: userData, error: userError, isLoading: userIsLoading } = useSWR(`https://api.github.com/users/${userName.toLowerCase()}`, fetcher);
    const { data: repoData, error: repoError, isLoading: repoIsLoading } = useSWR(`https://api.github.com/users/${userName.toLowerCase()}/repos`, fetcher);

    if (userIsLoading || repoIsLoading) {
        return <p>Loading info about {userName}...</p>;
    }
    if (userError || repoError) {
        return <p>There was an error loading {userName}, please check your input</p>;
    }

    if (!userData || !userData.avatar_url || !userData.name || !userData.location || !userData.bio) {
        return <p>No user data found for {userName}.</p>;
    }

    const { avatar_url, name, location, bio } = userData;

    return (
        <div style={{ textAlign: "left" }}>
            <img src={avatar_url} alt="avatar" />
            <h4>NAME: <span>{name}</span></h4>
            <h4>LOCATION:<span>{location}</span></h4>
            <h4>BIO: <span>{bio}</span></h4>
            <h4>REPOSITORIES:</h4>
            <ul className="repo-list">
                {/* Dodajemo provjeru da li je repoData niz prije mapiranja */}
                {Array.isArray(repoData) && repoData.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

UserInfo.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default UserInfo;
