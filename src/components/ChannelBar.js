import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChannelName from './ChannelName';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

function ChannelBar(props) {
    const [channels, setChannels] = useState([]);
    const currentChannel = props.currentChan;
    useEffect(() => {
        axios.get('//localhost:'+ process.env.REACT_APP_BACK_PORT +'/api/channelList')
            .then((res) => {
                setChannels(res.data.chanList)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
      <div className="channelBar">
        <div className="header">
            <h1>tc chat</h1>
        </div>
        <List
            sx={{ width: '100%', bgcolor: '#8395a7'}}
            subheader={<ListSubheader sx={{bgcolor:"#8395a7", color:'white'}}>Channels</ListSubheader>}
            >
            {
            channels.map((chan,index) => 
            <ChannelName name={chan} key={index} isSelected={chan === currentChannel} chanHandler={props.chanHandler}/>
            )
            }
        </List>
      </div>
    );
}
  
export default ChannelBar;
  