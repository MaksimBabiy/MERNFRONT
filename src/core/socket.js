import io from 'socket.io-client'

const socket = io("https://mernchatbackend.herokuapp.com")

export default socket