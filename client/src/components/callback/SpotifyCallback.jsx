import { useEffect } from 'react';

const SpotifyCallback = () => {
    const code = new URLSearchParams(window.location.search).get("code");

    useEffect(() => {
        if (code) {
            fetch(`http://localhost:3030/spotify/callback?code=${code}`)
                .then(res => res.json())
                .then(data => {
                    
                    if (data.access_token) {
                        localStorage.setItem('spotify_access_token', data.access_token)
                    }
                })
                .catch(err => console.error('Spotify auth error:', err));
        }
    }, [code]);

    return (
        <div>
            <h2>Connected to Spotify</h2>
        </div>
    );
};

export default SpotifyCallback;
