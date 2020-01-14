# LIRI Bot

### Overview

This is a command line app that utilizes node.js and a handful of packages/apis to allow queries of songs, bands and movies and get info on them.

### Dependencies/Packages

- Node.js
- Axios
- Moment
- Dotenv
- Spotify API
- OMDB API
- Bands In Town API

### Installation/Setup

1. Clone this repository
2. Run `npm install` in the root directory to install the required node packages
3. Create a .env file that replicates the below with your own Spotify API credentials and Boot Camp Spot credentials if you're using the log-me-in-scotty function:

   ```
    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret

    BCS_USER=your-bcs-user
    BCS_PASS=your-bcs-pass
   ```

4. Follow instructions for usage outlined below

### Usage

1. `node liri.js concert-this [BAND-NAME]`
   - **Example:**
   * Input: `node liri.js concert-this "The 1975"`
   * Output:
   ```
   Looks like The 1975 is playing the following shows:
   Laneway Festival
       In Auckland
       On 2020-01-27T12:00:00
   Laneway
       In Brisbane
       On 2020-02-01T12:00:00
   ```
2. `node liri.js spotify-this-song [SONG-NAME]`
   - **Example:**
   * Input: `node liri.js spotify-this-song "What I Got"`
   * Output:
   ```
   Here's some info on What I Got:
         Artist: Sublime
         Album: Sublime
         Preview: https://open.spotify.com/track/3B4q6KbHbGV51HO3GznBFF
   ```
3. `node liri.js movie-this [MOVIE-NAME]`
   - **Example:**
   * Input: `node liri.js movie-this "Catch Me If You Can"`
   * Output:
   ```
   Here's your info on Catch Me If You Can:
        Year: 2002
        IMDB Rating: 8.1/10
        Rotten Tomatoes Rating: 96%
        Country: USA, Canada
        Language: English, French
        Plot: A seasoned FBI agent pursues Frank Abagnale Jr. who, before his 19th birthday, successfully forged millions of dollars' worth of checks while posing as a Pan Am pilot, a doctor, and a legal prosecutor.
        Actors: Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen
   ```
4. `node liri.js do-what-it-says`
   - This command will read and interpret whatever parameters are stored in the `random.txt` file.
5. `node liri.js log-me-in-scotty`
   - **NOTE:** This command is for Boot Camp Spot users only
   - **DISCLAIMER:** This should only be used to login when you are ACTUALLY present for class. Do not use a CRON job to run this automatically every week and therefore not needing to manually log in... that would be dishonest and Ram or Andrea will catch you!
