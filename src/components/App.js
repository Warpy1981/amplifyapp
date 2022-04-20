import React from "react";

//components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import RealtorCard from "./RealtorCard";

//apis
import youtube from "../apis/youtube";
import randomUser from "../apis/randomUser";



class App extends React.Component{
    state = {videos: [], realtor: null, selectedVideo: null, location: null}

    componentDidMount() {
        this.onSearchSubmit('Boise').then(r => console.log('started'));
    }

    //fetch videos async
    onSearchSubmit = async term => {
        await this.fetchVideos(term);
        await this.fetchRealtorData(term);
    };

    //fetch videos async-ly
    fetchVideos = async term => {
        //need to tell react to wait on the data fetch then put it into the response object
        const response = await youtube.get("/search", {
            params: {
                q: term + " property listings",
            },
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        console.log(response);
    }

    //fetch rando user info async-ly
    fetchRealtorData = async term => {
        const resp = await randomUser.get("");
        console.log(resp.data.results[0]);
        this.setState({
            realtor: resp.data.results[0],
            location: term
        })
    }

    //method to use as a call back when a video is selected
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };

//pass list of videos as a prop to the component into Video list
    render () {
        return <div className={'ui container'}>
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
            <div className={'ui grid'}>
                <div className={'ui row'}>
                    <div className={'eleven wide column'}>
                        <RealtorCard realtor={this.state.realtor} location={this.state.location}/>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>

                    <div className={'five wide column'}><VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} /></div>
                </div>
            </div>

        </div>;
    }
}

export default App;