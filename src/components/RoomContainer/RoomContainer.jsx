import React from "react";
import RoomFilter from "../RoomFilter/RoomFilter";
import RoomList from "../RoomList/RoomList";
import { withRoomConsumer } from "../../context";
import Loading from "../Loading/Loading";


function RoomContainer({context}){
    const { loading, sortedRooms, rooms } = context;
    if(loading){           
        return <Loading />
    }
    return (
      <div>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </div>
    );
}
export default withRoomConsumer(RoomContainer)


/* 
import React from "react";
import RoomFilter from "../RoomFilter/RoomFilter";
import RoomList from "../RoomList/RoomList";
import { Link } from "react-router-dom";
import { RoomConsumer } from "../../context";
import Loading from "../Loading/Loading";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        console.log(value.loading);
        if(loading){
           
            return <Loading />
        }
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer; */
