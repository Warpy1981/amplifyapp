import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import randomUser from "../apis/randomUser";


class App extends React.Component{
    state = {videos: [], realtor: null}

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
                q: term + "property listings",
            },
        });
        this.setState({videos: response.data.items});
        console.log(response);
    }

    //fetch rando user info async-ly
    fetchRealtorData = async term => {
        const resp = await randomUser.get("");
        console.log(resp.data.results[0]);
        this.setState({realtor: resp.data.results[0]})
    }


    render () {
        return <div className={'ui container'}><SearchBar onSearchSubmit={this.onSearchSubmit} />
        I have {this.state.videos.length} videos. name in field {this.state.realtor ? this.state.realtor.name.first : ""}
        </div>;
    }
}

export default App;